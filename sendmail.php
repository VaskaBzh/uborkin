<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require = 'phpmailer/src/Exception.php';
    require = 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    //От кого
    $mail->setFomr('yborkin@yandex.ru', 'Заказ');
    //Кому письмо
    $mail->addAddress('info@yborkin.ru')
    //Тема письма
    $mail->Subject = 'Заказ'

    if (trim(!empty($__POST['nameGet']))) {
        $body.='<p><bold>Имя:</bold> '.$_POST['nameGet'].'</p>';
    }
    if (trim(!empty($__POST['telGet']))) {
        $body.='<p><bold>Имя:</bold> '.$_POST['telGet'].'</p>';
    }
    if (trim(!empty($__POST['nameTake']))) {
        $body.='<p><bold>Имя:</bold> '.$_POST['nameTake'].'</p>';
    }
    if (trim(!empty($__POST['telTake']))) {
        $body.='<p><bold>Имя:</bold> '.$_POST['telTake'].'</p>';
    }

    $mail->Body = $body;

    //Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправленны!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>