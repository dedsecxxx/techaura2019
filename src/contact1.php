<?php

if(isset($_POST['submit'])) {
	$name = $_POST['full-name'];
    $mailfrom = $_POST['email'];
    $message = $_POST['message'];
    $mailTo = "contact@techaura.co.in";
    $output = "Name :".$name."\nFrom: ".$mailfrom."\nMessage :".$message;
    $sub = "You have received an e-mail from ".$name;

    
    mail($mailTo, $sub, $output);
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE-edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You</title>
    <link rel="stylesheet" href="../css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <style>
    	html,body,section { height: 100%; }
    	#cover { background-image: url("../img/thnk.jpg"); background-repeat: no-repeat; background-size: cover; height: 100%; }
    	#outer { display: table; width: 100%; height: 100%; }
    	#inner { display: table-cell; vertical-align: middle; }
    	#acknowledge h3 { font-size: 4rem; color: black;}
    	@media (max-width: 480px) { #acknowledge h3{font-size: 2rem;} }
    </style>
</head>
<body>
	 <section>

        <div id="cover" >

            <div id="outer" class="container">

                <div id="inner">

                    <div id="acknowledge">
                        <h3 class="text-center">Thank You For Contacting Us<br>We will get back to you as soon as possible</h3>
                        

                    </div>

                </div>

            </div>

        </div>

    </section>
</body>
</html>

<?php
    header("refresh:3; url=\#contact-right");
    
	}
	
	

?>