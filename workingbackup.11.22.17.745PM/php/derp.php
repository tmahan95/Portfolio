<?php
//$derp = "/var/www/html/docs/ManagementOfInformationSystems/Course.docx";
$ferp = pathinfo('../docs/ManagementOfInformationSystems/Course.docx');
//echo $ferp['filename'];
$dir = $ferp['dirname'];
$fname = $ferp['filename'].".".$ferp['extension'];

shell_exec("/var/www/html/php/converter.sh /var/www/html/docs/ManagementOfInformationSystems/Fieldwork_nots.docx /var/www/html/docs/ManagementOfInformationSystems/");
?>
