<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$input = json_decode($raw, true);

if (!$input) {
    echo json_encode(['ok' => false, 'error' => 'Invalid form submission data.']);
    exit;
}

$fullName = htmlspecialchars(trim($input['fullName'] ?? 'N/A'));
$email = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars(trim($input['phone'] ?? 'N/A'));
$company = htmlspecialchars(trim($input['company'] ?? 'N/A'));
$eventDate = htmlspecialchars(trim($input['eventDate'] ?? 'N/A'));
$eventLocation = htmlspecialchars(trim($input['eventLocation'] ?? 'N/A'));
$eventType = htmlspecialchars(trim($input['eventType'] ?? 'N/A'));
$investment = htmlspecialchars(trim($input['investment'] ?? 'N/A'));
$message = nl2br(htmlspecialchars(trim($input['message'] ?? 'N/A')));

if (!$email) {
    echo json_encode(['ok' => false, 'error' => 'A valid email address is required.']);
    exit;
}

$to = 'hello@livenlavishevents.com';
$subject = "New " . ($eventType ?: "Event") . " Inquiry from " . $fullName;

$htmlContent = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body>
  <h2>New Consultation Request</h2>
  <p><strong>Name:</strong> {$fullName}</p>
  <p><strong>Email:</strong> {$email}</p>
  <p><strong>Phone:</strong> {$phone}</p>
  <p><strong>Company:</strong> {$company}</p>
  <p><strong>Event Date:</strong> {$eventDate}</p>
  <p><strong>Event Location:</strong> {$eventLocation}</p>
  <p><strong>Event Type:</strong> {$eventType}</p>
  <p><strong>Estimated Investment:</strong> {$investment}</p>
  <hr />
  <p><strong>Vision / Message:</strong></p>
  <p>{$message}</p>
</body>
</html>
";

function sendViaSmtp($to, $subject, $htmlContent, $replyTo) {
    $smtpHost = "ssl://smtp.gmail.com";
    $smtpPort = 465;
    $username = "developers@gemwebservices.com";
    $password = "vghsdvejgyzcqjtd";
    $fromName = "Event Inquiries";

    $ctx = stream_context_create([
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ]);

    $socket = @stream_socket_client($smtpHost . ":" . $smtpPort, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);
    if (!$socket) {
        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: {$fromName} <{$username}>\r\n";
        $headers .= "Reply-To: {$replyTo}\r\n";
        return mail($to, $subject, $htmlContent, $headers);
    }

    fgets($socket, 515);

    fputs($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?? 'localhost') . "\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) === ' ') break;
    }

    fputs($socket, "AUTH LOGIN\r\n");
    fgets($socket, 515);

    fputs($socket, base64_encode($username) . "\r\n");
    fgets($socket, 515);

    fputs($socket, base64_encode($password) . "\r\n");
    $authResp = fgets($socket, 515);

    if (substr($authResp, 0, 3) !== "235") {
        fclose($socket);
        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: {$fromName} <{$username}>\r\n";
        $headers .= "Reply-To: {$replyTo}\r\n";
        return mail($to, $subject, $htmlContent, $headers);
    }

    fputs($socket, "MAIL FROM: <{$username}>\r\n");
    fgets($socket, 515);

    fputs($socket, "RCPT TO: <{$to}>\r\n");
    fgets($socket, 515);

    fputs($socket, "DATA\r\n");
    fgets($socket, 515);

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$fromName} <{$username}>\r\n";
    $headers .= "To: {$to}\r\n";
    $headers .= "Reply-To: {$replyTo}\r\n";
    $headers .= "Subject: {$subject}\r\n";

    fputs($socket, $headers . "\r\n" . $htmlContent . "\r\n.\r\n");
    $dataResp = fgets($socket, 515);

    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return (substr($dataResp, 0, 3) === "250");
}

$success = sendViaSmtp($to, $subject, $htmlContent, $email);

if ($success) {
    echo json_encode(['ok' => true]);
} else {
    echo json_encode(['ok' => false, 'error' => 'Unable to send inquiry. Please try again or reach out to us by phone.']);
}
