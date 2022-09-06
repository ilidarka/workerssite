<?php 

require_once __DIR__ . '/phpmailer/Exception.php';
require_once __DIR__ . '/phpmailer/PHPMailer.php';
require_once __DIR__ . '/phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$text = $_POST['user_text'];

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Mailer = 'tls';  
$mail->Host = 'smtp.yandex.ru';  					// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'workerssite@yandex.by'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'mjakfvmtogyvmunf'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                           // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('workerssite@yandex.by'); // от кого будет уходить письмо?
$mail->addAddress('workerssite@yandex.by');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта workersekb';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Его сообщение: ' .$text;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    include 'index.html';
}
?>