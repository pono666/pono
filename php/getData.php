
<?php
    error_reporting(E_ALL);
     ini_set('display_errors', true);
     $projectsData = [];
     $employersData = [];

    //mysql_ping();
     /*
      $con=mysqli_connect("localhost","pono","yellow33","Ponodata");
    
      // Check connection
      if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
      }

      $result = mysqli_query($con, "SELECT * FROM projects");
      while($row = mysqli_fetch_array($result)){
        echo $row['title'];
        $projectsData
      }  

*/


      $dataType = $_GET["dataType"];

      
        class Project{
          public $title;
          public $location;
          public $image_name;
          public $description;
          public function get_title()
          {
            return $this->title;
          }
        }

        class Employer extends Project{
          public $dates;
        };

        try{
          $conn = new PDO("mysql:host=localhost;dbname=Ponodata", "pono", "yellow33");
          $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

         // $data = $conn->prepare('SELECT * FROM projects');
         // $data->execute();    
         switch ($dataType) {
              case 'projects':
                $data = $conn->query('SELECT * FROM projects');
                $data->setFetchMode(PDO::FETCH_CLASS,'Project');
                while($user = $data->fetch()){
                 $projectsData[] = $user;
                }
                echo json_encode($projectsData);  
                break;

              case 'employers':

                $myquery = "SELECT e.*, GROUP_CONCAT(CONCAT( d.from, '|' ,IFNULL(d.to,'Present')) SEPARATOR ',') AS dates FROM employers_has_dates ehd INNER JOIN employers e ON e.employers_id = ehd.employers_employers_id INNER JOIN dates d ON d.dates_id = ehd.dates_dates_id GROUP BY e.employers_id";

                 // $myquery = "SELECT * FROM employers";
                  //$data = $conn->query('SELECT * FROM employers');
                  $data = $conn->query($myquery);
                  $data->setFetchMode(PDO::FETCH_CLASS,'Employer');
                 
                  while($employer = $data->fetch()){
                    // $datesIDs = $conn->query('SELECT * FROM employers_has_dates')
                   // $datesIDs->execute($employer->employers_id);
                  //  $employer->dates = $datesIDs->fetchAll();
                   // echo($employer);
                    $employersData[] = $employer;
                  }
                  echo json_encode($employersData);  
                  break;
                case 'education':

                  $myquery = "SELECT e.*, GROUP_CONCAT(CONCAT( d.from, '|' ,IFNULL(d.to,'Present')) SEPARATOR ',') AS dates FROM education_has_dates ehd INNER JOIN education e ON e.education_id = ehd.education_education_id INNER JOIN dates d ON d.dates_id = ehd.dates_dates_id GROUP BY e.education_id";

                  $data = $conn->query($myquery);
                  $data->setFetchMode(PDO::FETCH_CLASS,'Employer');
                 
                  while($employer = $data->fetch()){
                    $employersData[] = $employer;
                  }
                  echo json_encode($employersData);  
                  break;


              default:
                # code...
                break;
          }   
          

                 

        } catch(PDOException $e) {
            echo 'ERROR: ' . $e->getMessage();
        } 

      

      ?>