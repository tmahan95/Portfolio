<?php
// I have a bunch of things I'm messing with, best way to go about this thing would be to simplify the structure as best I can, I won't have much, so load time should be find, especially if I can keep the load from happening before click.
$xml = simplexml_load_file("../docs/manifest.xml");
//looping through, adding folders from the glob, it's pretty dumb right now, I'd like to eventually have this baby add folder elements if they don't exist already, right now it's 
	$file = $xml->addChild('file');// add it to the xml structure
	$file->addChild('description', "Description of Case1draft.docx");
	$file->addChild('parent','WebArchitecture');
	$file->addChild('filename', 'Case1draft.docx');

	$file2 = $xml->addChild('file');
	$file2->addChild('description',"descr");
	$file2->addChild('parent', 'Programming');
	$file2->addChild('filename', 'derp.docx');
Header('Content-type: text/xml');
print $xml->asXML('../docs/manifest.xml');
?>
