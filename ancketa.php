<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$userMail = $_POST['user_mail'];
$phone = $_POST['user_phone'];
$age = $_POST['user_age'];
$salary = $_POST['user_salary'];
$expirience = $_POST['user_expirience'];

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'workerssite@yandex.by'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'mjakfvmtogyvmunf'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('workerssite@yandex.by'); // от кого будет уходить письмо?
$mail->addAddress('workerssite@yandex.by');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Анкета с сайта workersekb';
$mail->Body    = '' .$name . ' оставил анкету, его почта ' .$userMail. '<br>его телефон ' .$phone. '<br>Его возраст ' .$age. '<br>Его зарплата' .$salary. '<br>Его опыт: ' .$expirience;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: index.html');
}
?>