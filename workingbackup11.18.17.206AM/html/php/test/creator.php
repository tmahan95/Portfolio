<?php
$fileMetadata = new Google_Service_Drive_DriveFile(array(
    'name' => 'Invoices',
    'mimeType' => 'application/vnd.google-apps.folder'));
$file = $driveService->files->create($fileMetadata, array(
    'fields' => 'id'));
printf("Folder ID: %s\n", $file->id);
?>
