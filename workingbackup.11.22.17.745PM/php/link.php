<?php
header("refresh:1;url=../pages/protected/upload.html");
$desc = $_POST['description'];
$parent = $_POST['parent'];
$title = $_POST['title'];
$url = $_POST['gitHubURL'];

copy("../docs/manifest.xml","../xmlbackups".time());

$manifest = simplexml_load_file('../docs/manifest.xml');
$file = $manifest->addChild('link');
$file->addChild('description',$desc);
$file->addChild('parent',$parent);
$file->addChild('url',$url);
$file->addChild('title',$title);

$dom = new DOMDocument('1.0');
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($manifest->asXML());
echo $dom->save('../docs/manifest.xml');
?>
