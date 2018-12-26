<?php

if(isset($_POST['submit'])) {
    $fullname = $_POST['full-name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $email_form = "contact@techaura.co.in";

    $email_subject = "A new message through techaura.co.in";

    $email_body = "Full Name : $fullname.\n".
                    "Visitor Email : $email.\n".
                        "Visitor Message : $message.\n";
    
    $to = "sk6036420@gmail.com";
    
    $headers = "From: $email_form \r\n";
    
    $headers .= "Reply-To: $email \r\n";
    
    mail($to,$email_subject,$email_body,$headers);
    
    header("Location: index.html/#contact-right");
}

?>