<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Anthony Paul Ponomarenko - Web / Flash Developer</title>
	<link href='http://fonts.googleapis.com/css?family=Roboto:100,300,500,700,900' rel='stylesheet' type='text/css'>
	<!--<link rel="stylesheet" media="(min-width: 800px)" href="css/main.css"></link> -->
	<link rel="stylesheet" href="css/main.css"></link>


</head>
<script src="js/jquery-1.11.0.js" type="text/javascript" > </script>
<script src="js/imagesloaded.pkgd.js" type="text/javascript"></script>
<script src="js/masonry.pkgd.js" type="text/javascript"></script>
<script src="js/main.js" type="text/javascript" > </script>



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
		<div class="header">
			<header>
				<span class="headerName"> Anthony Paul Ponomarenko</span>
				<span class="headerTitle" > WEB / FLASH DEVELOPER</span>
				
			</header>
			<div class="mobileMenuToggle">
				<span class="mobileIcon"></span>
			</div>
			
		</div>
		<div id="Menu" class="menu">
			<ul>
				<li id ="home"><a href="?">Home</a></li>
				<li id ="education"><a href="?education">Education</a></li>
				<li id ="skills"><a href="?skills">Skills</a></li>
				<li id ="employers"><a href="?employers">Employers</a></li>
				<li id ="projects"><a href="?projects">Projects</a></li>
				<li id ="contact"><a href="?contact">Contact</a></li>
			</ul>
		</div>
		<div id="MobileMenu" class="mobileMenu">
			<ul>
				<li><a href="">Home</a></li>
				<li><a href="?education">Education</a></li>
				<li><a href="?skills">Skills</a></li>
				<li><a href="?employers">Employers</a></li>
				<li><a href="?projects">Projects</a></li>
				<li><a href="?contact">Contact</a></li>
			</ul>
		</div>

		<div id="Content" class="content">
			
		</div>
		<div class="footer">

			
		</div>

	</div>
</body>
</html>



