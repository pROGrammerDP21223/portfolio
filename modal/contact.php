<?php
// contact.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = isset($_POST['ajax_name']) ? trim($_POST['ajax_name']) : '';
    $email   = isset($_POST['ajax_email']) ? trim($_POST['ajax_email']) : '';
    $subject = isset($_POST['ajax_subject']) ? trim($_POST['ajax_subject']) : 'Contact Form Submission';
    $message = isset($_POST['ajax_message']) ? trim($_POST['ajax_message']) : '';

    $errors = [];

    // Basic validation
    if ($name === '') {
        $errors[] = "Name is required.";
    }
    if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "A valid email is required.";
    }
    if ($message === '') {
        $errors[] = "Message cannot be empty.";
    }

    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo "<span class='contact_error'>{$error}</span><br>";
        }
        exit;
    }

    // Replace these with your email settings
    $to      = 'dhananjayphirke@gmail.com'; // Your receiving email
    $headers = "From: {$name} <{$email}>\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    $fullMessage = "You have received a new message from your website contact form.\n\n";
    $fullMessage .= "Name: {$name}\n";
    $fullMessage .= "Email: {$email}\n";
    $fullMessage .= "Subject: {$subject}\n";
    $fullMessage .= "Message:\n{$message}\n";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Message successfully sent.";
    } else {
        echo "<span class='contact_error'>There was a problem sending your message. Please try again later.</span>";
    }
}
?>
