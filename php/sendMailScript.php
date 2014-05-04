<?php 

	$data = $_POST["data"];
	
	$to = "antpono@gmail.com";
	$subject = "Enquiry From Pono.com.au";
	
	$headers = "From: Enquiry <noreply@pono.com.au>"  . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	//$headers .= "Bcc: antpono@gmail.com\r\n";
	
	
	$message = 	"Name: " . htmlspecialchars($data["name"])  . "\r\n" .
				"Email: " .  htmlspecialchars($data["email"]) . "\r\n" .
				"Enquiry: " .  htmlspecialchars($data["enquiry"]) ;
	

	//echo $message;
	
	
	$htmlmessage = "<html>
	<body style='padding:0; margin:0; font-family:Verdana, Geneva, sans-serif'>
		<table style='width:800px'>	
			<tr>
				<td colspan='2'>
				<img src='http://pono.com.au/images/meheader.jpg'/>
				</td>
			</tr>
			<tr >
				<td colspan='2'>
				<p>Dere has been an enquiry yo!
				<br />The details are as follows:</p>        
				</td>    
			</tr>
			
			<tr>
				<td width='100px' style='font-weight:bold'> Name: </td>
				<td width='646px'> " . htmlspecialchars( $data["name"]) ."
					
				</td>
			</tr>
			<tr>
				<td style='font-weight:bold'> Email: </td>
				<td> 
					" .  htmlspecialchars($data["email"]) ."
				 </td>
			</tr>
			
			 <tr>
				<td style='font-weight:bold'>  Enquiry:  </td>
				<td> 
					" .  htmlspecialchars($data["enquiry"]) ."
				</td>
			</tr>
		</table>
		</body>
	
	
	</html>";	
	mail($to,$subject,$htmlmessage,$headers);






//------To the sender

	$to2 = $data["email"];
	$subject2 = "Thanks for your enquiry to Pono.com.au";
	
	$headers2 = "From: Enquiry <noreply@pono.com.au>"  . "\r\n";
	$headers2 .= "MIME-Version: 1.0\r\n";
	$headers2 .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	//$headers .= "Bcc: antpono@gmail.com\r\n";
	
	
	$message2 = 	"Name: " . htmlspecialchars($data["name"])  . "\r\n" .
				"Email: " .  htmlspecialchars($data["email"]) . "\r\n" .
				"Enquiry: " .  htmlspecialchars($data["enquiry"]) ;
	

	//echo $message;
	
	
	$htmlmessage2 = "<html>
	<body style='padding:0; margin:0; font-family:Verdana, Geneva, sans-serif'>
		<table style='width:800px'>	
			<tr>
				<td colspan='2'>
				<img src='http://pono.com.au/images/meheader.jpg'/>
				</td>
			</tr>
			<tr >
				<td colspan='2'>
				<p>Dearest " . htmlspecialchars( $data["name"]) . ", 
				<br /><br />Thanks for your enquiry, I will endeavour to respond as soon as I can.
				<br />If it is urgent please feel free to contact me on <a href='tel.:+61423300300'>+61 423 300 300</a>.
				<br /><br />Your enquiry was:</p>    
				<p>".    htmlspecialchars($data["enquiry"]) . "
				</td>    
			</tr>	
			 
		</table>
		</body>
	
	
	</html>";	
	mail($to2,$subject2,$htmlmessage2,$headers2);



?>