<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="sass/mainStyle.css" rel="stylesheet">
    <!--<link rel="stylesheet" href="css/main.css"></link>-->

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
 <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery-1.11.0.js"  > </script>
   <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
     Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.js"></script>
    <script src="js/main.js" type="text/javascript" > </script>

  </head>
  <body>
    <?php

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


    ?>
    <div class="mainContainerWrapper">
    <div class="container">
      <div class="row">
        <span class="col-xs-12 col=sm-8 col-md-8 col-md-offset-2 text-right headerName"><h1> Anthony Paul Ponomarenko</h1></span>
        <span class="col-xs-12 col-sm-4 col-md-8 col-md-offset-2 text-right headerTitle" > WEB / FLASH DEVELOPER</span>
        
      </div>
      <div class="mobileMenuToggle">
        <span class="mobileIcon"></span>
      </div>
      
    </div>

    <div class="navbar navbar-inverse">
      <div class="container ">
        <div class="navbar-header">
          <button class="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
            <span class="icon-bar"></span>
             <span class="icon-bar"></span>
             <span class="icon-bar"></span> 
            
          </button>
        </div>
        <div class="navbar-collapse collapse ">
          <ul class="nav navbar-nav  navbar-right ">
            <li class="active"><a href="?">Home</a></li>
            <li><a href="?education">Education</a></li>
            <li><a href="?skills">Skills</a></li>
            <li><a href="?employers">Employers</a></li>
            <li><a href="?projects">Projects</a></li>
            <li><a href="?contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
   

    <div id="Content" class="content">
      
    </div>
    <div class="footer">

      
    </div>

  </div>

   
  </body>
</html>
