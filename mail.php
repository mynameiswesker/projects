<?php
    $recepient = "zentrmangust@yandex.ru";
    $sitename = "www.mangust.ru";

    $name = trim($_POST["user_name"]);
    $phone = trim($_POST["phone"]);
    $email = trim($_POST["email"]);
    $question = trim($_POST["question"]);

    $message = "Имя: $name \n Телефон: $phone \n Почта $email \n Вопрос: $question";

    $paigetitle = "Новая заявка с сайта \"$sitename\"";

    mail($recepient, $paigetitle, $message, "Content-type: text/plain; charset=\"utf-8\" \n From: $recepient");

