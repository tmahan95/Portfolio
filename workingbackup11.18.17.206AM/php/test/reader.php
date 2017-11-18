<?php
require_once './vendor/autoload.php';

$client = new Google_Client();
$client->setApplicationName("Portfolio");
$client->setDeveloperKey("AIzaSyDK4uf-FggQ8fs1wHYQVWFqfylUC1flnxM");

$service = new Google_Service_Drive($client);

