<?php
$doc = new DOMDocument();
$doc->load('../docs/manifest.xml');
$doc->preserveWhiteSpace = false;
$doc->formatOutput = true;
//$doc->loadXML('/var/www/html/docs/manifest.xml');
echo $doc->save('../docs/manifest.xml');

?>
