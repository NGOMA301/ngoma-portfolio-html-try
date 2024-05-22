<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient_email = "benjaminsiradj@gmail.com"; // Replace with your Gmail email
    $subject = "New Contact Form Submission";
    
    $sender_email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST["message"]);
    
    $headers = "From: $sender_email\r\nReply-To: $sender_email";
    
    mail($recipient_email, $subject, $message, $headers);
    
    echo "Email sent successfully!";
} else {
    echo "Invalid request.";
}
?>
