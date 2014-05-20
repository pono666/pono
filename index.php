<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="Anthony Ponomarenko. Brisbane based freelance Web and Flash Developer.">

    <title>Anthony Ponomarenko</title>
    <link rel="icon" 
      type="image/png" 
      href="images/favicon.png" />
    <!-- Bootstrap 
    <link href="css/bootstrap.css" rel="stylesheet">-->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <link href='http://fonts.googleapis.com/css?family=Roboto:100,300,500,700,900' rel='stylesheet' type='text/css'>
    <link href="css/mainStyle.css" rel="stylesheet">


    <!--<link rel="stylesheet" href="css/main.css"></link>-->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
 <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <!--<script src="js/jquery-1.11.0.js"  > </script>
    <script src="js/jquery.validate.js"  > </script>
    <script src="js/additional-methods.js"  > </script>
    <script src="js/bootstrap.js"></script>

  
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.12.0/jquery.validate.min.js"  > </script>    
    <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.12.0/additional-methods.min.js"  > </script>
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    -->

    <script src="js/jquery-1.11.0.js"  > </script>
    <script src="js/jquery.validate.js"  > </script>
    <script src="js/additional-methods.js"  > </script>
    <script src="js/bootstrap.js"></script>
    <script src="js/main.js"  > </script>
  </head>

  <body> 
  

     <?php    
      error_reporting(E_ALL);
     ini_set('display_errors', true);

      $pageToInclude;
      $currentPageId;

      function setupPage(){
        $path = $_SERVER['QUERY_STRING'];   
        switch($path){
          case "": 
            $GLOBALS['currentPageId'] ="home";        
          break;  
          
          case "education": 
            $GLOBALS['currentPageId'] ="education";
          break;
          
          case "skills":
            $GLOBALS['currentPageId'] ="skills";
          break;
          
          case "employers":
            $GLOBALS['currentPageId'] ="employers";
          break;
          
          case "projects":
            $GLOBALS['currentPageId'] ="projects";
          break;

          case "contact":
            $GLOBALS['currentPageId'] ="contact";
          break;    
        }

        echo '<script>$(window).load(function(e){handleMenuForCurrentPage(' . json_encode($GLOBALS['currentPageId']) . ')}) </script>'; 

      }
      setupPage();
    // if (mysqli_connect_errno()) {
     // echo "Failed to connect to MySQL: " . mysqli_connect_error();
   // }
    ?>
    <!-- listeners to determine resize events -->
    <div class="xsListener"></div>
    <div class="smListener"></div>
    <div class="mdListener"></div>
    <div class="lgListener"></div>

    <!-- padding that is toggled for either the xs or above -->
    <div class="menuPadding-xs visible-xs"></div>
    <div class="menuPadding hidden-xs"></div>

    <!-- main container -->
    <div class="container-fluid">
      <div  class="navbar navbar-inverse  navbar-fixed-top black" role="navigation">       
        <div id="HeaderContainer" class="container">
          <div class="row">
            <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>             
            </button> 
            
            <div  class="col-xs-12 text-right hidden-xs">               
              <h1 id="NameLink" style="color:#FFF"> Anthony Ponomarenko<br /><small>WEB / FLASH DEVELOPER</small></h1>
            </div>

            <span class="xs-header text-right visible-xs">
              <h3 class="navbar-text-right" style="color:#FFF"> Anthony Ponomarenko<br />
              <small>WEB / FLASH DEVELOPER</small></h3>             
            </span>
        </div>
          <div class="navbar-collapse collapse ">
            <ul class="nav navbar-nav ">
              <li id="home"><a href="?">Home</a></li>
              <li id="education" ><a href="?education">Education</a></li>
              <li id="employers" ><a href="?employers">Employers</a></li>
              <li id="projects" ><a href="?projects">Projects</a></li>
              <li id="contact" ><a href="?contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="blackrule"></div>
      
      <!-- main content goes in here -->
      <div class="container">
        <div id="Content" class="row content">
        </div>
      </div>
    </div>     
  
    <!-- padding to keep the footer at the bottom of page-->
    <div class="footerPadding"></div>
    <footer>
        <span class="glyphicon glyphicon-earphone"></span>
        <span> <a href="tel:+61423300300">+61 423 300 300</a> </span>
        <span style="width:20px;display:inline-block;"></span>
        <span class="glyphicon glyphicon-envelope"></span> 
        <span><a  href"mailto:anthony@pono.com.au">anthony@pono.com.au</a></span>
    </footer>
  </body>
</html>
