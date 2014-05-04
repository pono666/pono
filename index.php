<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">


    <title>onomarenko</title>
    <link rel="icon" 
      type="image/png" 
      href="images/favicon.png" />
    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">

  <link href='http://fonts.googleapis.com/css?family=Roboto:100,300,500,700,900' rel='stylesheet' type='text/css'>
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
    <script src="js/jquery.validate.js"  > </script>
    <script src="js/additional-methods.js"  > </script>
   <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
     Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.js"></script>
    <script src="js/main.js" type="text/javascript" > </script>
    
  </head>
  <body>
    <div class="xsListener"></div>
    <div class="smListener"></div>
    <div class="mdListener"></div>
    <div class="lgListener"></div>
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
    <div class="menuPadding-xs visible-xs"></div>
    <div class="menuPadding hidden-xs"></div>
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
            <span class="col-xs-12 text-right hidden-xs">
              
              <h1 class="navbar-text-right " style="color:#FFF"> Anthony Ponomarenko<br />
              <small>WEB / FLASH DEVELOPER</small></h1>
            </span>

            <span class="xs-header text-right visible-xs">
              <h3 class="navbar-text-right" style="color:#FFF"> Anthony Ponomarenko<br />
              <small>WEB / FLASH DEVELOPER</small></h3>             
            </span>

           
        </div>
          <div class="navbar-header visible-xs">
           
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

      <div class="container">
        <div id="Content" class="row content">
          <div id ="homePageStuff" class="jumbotron hidden col-xs-12 col-sm-8 col-sm-offset-2">
            <h2>Welcome</h2>
            <p class="override">My name is Anthony Ponomarenko. This site serves as a personal portfolio and also to develop my skills in Web Development. It has been built with HTML5, CSS3(SASS), JavaScript, JQuery and Bootsrap to be responsive and look great on all devices.</p>

            <p>It is constantly evolving to incorporate what I am currently researching and also serves as a reminder to myself of what I have achieved in my career.</p>

            <p>You may have noticed the greyscaleness of this site. I am in fact colourblind, I have Deuteranopia. I get the same questions whenever someone finds out so to circumvent this I provide the following link <a target="_blank" href="http://www.colourblindawareness.org/colour-blindness/colour-blindness-experience-it/">to see what I see.</a></p>
            <span id="MoreButton" class="btn btn-black btn-lg">More...</span>

            <div id="hiddenHomeText" class="hidden">
              <h2>A little about me</h2>
              <p> For the past 8 years I have been a Flash Developer, however I have been working with Flash for over 15 years. I class myself as being a Flash Developer when I started using AS3 and OOP to create projects.</p>

              <h3>In the beginning...</h3>
              <p>It all started at High School when in my graphics class we started learning CAD. I never really use a computer prior to this in any other way apart from writing reports and playing Doom. I enjoyed it thoroughly, being able to create something technical on a computer. This led me to start studying Engineering once I completed grade 12.</p>
              <p>After a year of engineering I decided it wasnt for me. I enjoyed the computer and practical subjects however the rest didnt capture me as I thought it would. I dropped out and looked for something more creative.</p>

              <h3>The introduction to computer generated creativity</h3>
              <p>I had always had a creative streak and always loved computers and technology. These two areas of my persona were allowed to run free when I started the Certificate in Digital Art. I didnt consider it study, I considered it play. We would use Flash and Photoshop to create Art. It was so satisfying to see something being created in a new media that was just starting to find its feet and being able to show my works not only in print but also on computer. </p>

              <p>After a year of play I continued into the newly created Diploma of Multimedia. Here we used Flash, Photoshop, Premier, Director, Maya and a slew of other programs not to art, but to create viable products that could be used by others. Our final project was for the Brisbane City Council, A guide to Brisbane Skateparks on CD-ROM that is still available to this day in state run libraries. The Guide contained an interactive map of the locations of the Skateparks with Quicktime VR and 3D renders of the skateparks along with video </p>
            </div>
          </div>

            <div id="contactPageStuff" class="hidden jumbotron col-xs-12 col-sm-8 col-sm-offset-2">
            <h2>Contact me</h2>
              <form id="contactForm" class="form-horizontal" action="">
                <fieldset>      
                  
                  <div class="form-group has-feedback" style="position:relative">
                    <label class="col-xs-3 control-label text-right" for="formName">Name:</label>
                      <div class="col-xs-9">
                         <input id="formName" name="formName" type="text" class="form-control input-md" placeholder="Enter your name">
                         <span class="glyphicon form-control-feedback" id="formName1"></span>
                      </div>               
                  </div>

                  <div class="form-group has-feedback">
                    <label class="col-xs-3 control-label text-right" for="formEmail">Email:</label>
                      <div class="col-xs-9">
                         <input id="formEmail" name="formEmail" class="form-control input-md" placeholder="Enter your email" type="email">
                         <span class="glyphicon form-control-feedback" id="formEmail1"></span>
                      </div>               
                  </div>

                  <div class="form-group has-feedback">
                    <label class="col-xs-3 control-label text-right" for="formConfirmEmail">Confirm Email:</label>
                      <div class="col-xs-9">
                         <input id="formConfirmEmail" name="formConfirmEmail" class="form-control input-md" placeholder="Confirm email" type="email">
                         <span class="glyphicon form-control-feedback" id="formConfirmEmail1"></span>
                      </div>               
                  </div>

                  <div class="form-group has-feedback">
                    <label class="col-xs-3 control-label text-right">Enquiry:</label>
                    <div class="col-xs-9">
                       <textarea id="formEnquiryText" name="formEnquiryText" type="text-area" class="form-control" placeholder="Enter your enquiry" ></textarea>                       
                       <span class="glyphicon form-control-feedback" id="formEnquiryText1"></span>
                    </div>
                  </div>

                             

                  <div class="text-right">                
                    <input id="contactSubmitBtn" class="btn btn-black" data-loading-text="Sending..." data-complete-text="Sent :)" data-error-text = "Error :(" value="Submit" type="submit">
                  </div>

                </fieldset>


              </form>
            </div>

        </div>
        </div>
      </div>
     


     
      
    </div>

  </div>
    
    <div class="footerPadding"></div>
    <footer>
        <div> </div>
        <span class="glyphicon glyphicon-earphone"></span>
        <span> <a href="tel:+61423300300">+61 423 300 300</a> </span>
        <span style="width:20px;display:inline-block;"></span>
          <span class="glyphicon glyphicon-envelope"></span> 
          <span><a  href"mailto:anthony@pono.com.au">anthony@pono.com.au</a></span>
    </footer>
  </body>
</html>
