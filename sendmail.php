<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    //От кого
    $mail->setFrom('yborkin@yandex.ru', 'Заказ');
    //Кому письмо
    $mail->addAddress('yborkin@mail.ru');
    //Тема письма
    $mail->Subject = 'Заказ';

    $nameGet = $_POST['name-get'];
    $telGet = $_POST['tel-get'];
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $bin = $_POST['property'];

    // Тело письма
    
    $title = "Заказ!";
    $body = "
    <h1>Заказ!</h1>
    <p><bold>Имя:</bold> $nameGet</p><br>
    <p><bold>Номер телефона:</bold> $telGet</p><br>
    <p><bold>Имя:</bold> $name</p><br>
    <p><bold>Номер телефона:</bold> $tel</p><br>
    <p><bold>Тип бака:</bold> $bin</p>'
    ";

    // $body .= '<h1>Заказ!</h1>';

    // if (trim(!empty($__POST['name-get']))) {
    //     $body.='<p><bold>Имя:</bold> '.$_POST['name-get'].'</p>';
    // }
    // if (trim(!empty($__POST['tel-get']))) {
    //     $body.='<p><bold>Имя:</bold> '.$_POST['tel-get'].'</p>';
    // }
    // if (trim(!empty($__POST['name']))) {
    //     $body.='<p><bold>Имя:</bold> '.$_POST['name'].'</p>';
    // }
    // if (trim(!empty($__POST['tel']))) {
    //     $body.='<p><bold>Имя:</bold> '.$_POST['tel'].'</p>';
    // }
    // $body.='<p><bold>Тип бака:</bold> '.$_POST['property'].'</p>';

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

    // require 'phpmailer/PHPMailer.php';
    // require 'phpmailer/SMTP.php';
    // require 'phpmailer/Exception.php';

    // // Переменные, которые отправляет пользователь
    // $nameGet = $_POST['name-get'];
    // $telGet = $_POST['tel-get'];
    // $name = $_POST['name'];
    // $tel = $_FILES['tel'];

    // // Формирование самого письма
    // $title = "Заказ!";
    // $body = "
    // <h1>Заказ!</h1>
    // <p><bold>Имя:</bold> $nameGet</p><br>
    // <p><bold>Номер телефона:</bold> $telGet</p><br>
    // <p><bold>Имя:</bold> $name</p><br>
    // <p><bold>Номер телефона:</bold> $tel</p><br>
    
    // ";

    // // Настройки PHPMailer
    // $mail = new PHPMailer\PHPMailer\PHPMailer();
    // try {
    //     $mail->isSMTP();   
    //     $mail->CharSet = "UTF-8";
    //     $mail->SMTPAuth   = true;
    //     $mail->SMTPDebug = 2;
    //     $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    //     // Настройки вашей почты
    //     $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    //     $mail->Username   = 'vasily-bazhenov.03@mail.ru'; // Логин на почте
    //     $mail->Password   = 'bhbc2003'; // Пароль на почте
    //     $mail->SMTPSecure = 'ssl';
    //     $mail->Port       = 465;
    //     $mail->setFrom('vasily-bazhenov.03@mail.ru', 'Имя отправителя'); // Адрес самой почты и имя отправителя

    //     // Получатель письма
    //     $mail->addAddress('vasek.0343@mail.ru');  
        
    // // Отправка сообщения
    // $mail->isHTML(true);
    // $mail->Subject = $title;
    // $mail->Body = $body;    

    // // Проверяем отравленность сообщения
    // if ($mail->send()) {$result = "success";} 
    // else {$result = "error";}

    // } catch (Exception $e) {
    //     $result = "error";
    //     $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    // }

    // // Отображение результата
    // echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
?>