<?php
$path = './docs/';
/*
$files1 = scandir($dir);

print_r($files1);
*/
/*the above was just for listing all files and folders in a directory. The following will list just the directory and it's sub directories. Make this recursive and omit trying to view any documents with online viewers, that'd suck ass.*/
/*if ($handle = opendir($path)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != "..") {
	   if ($entry->isDir()) {
		 echo "$entry\n";
	   }
        }
    }
    closedir($handle);
}
$dirs = array_filter(glob('/var/www/html/docs/*'), 'is_dir');
print_r($dirs);
*/
/*
$dir = new DirectoryIterator($path);

$stack = array();
foreach ($dir as $fileinfo) {
    if ($fileinfo->isDir() && !$fileinfo->isDot()) {
        echo $fileinfo->getFilename()."\n";
	$stack[] = $fileinfo->getPathname();
    }
}
print_r($stack);
$stuffs = array();
foreach ($stack as &$derp) {
	$files = scandir($derp);
	foreach($files as $file) {
		if(is_dir($derp.$file) == FALSE && $derp.$file != "." && $derp.$file != ".." && $derp.$file != ".") {
			echo $derp.$file;
//			echo $file;
			var_dump(is_dir($derp.$file));
			echo "\n";
		}
	}
}
//print_r($stuffs);
*/
$dirs = array_filter(glob('/var/www/html/docs/*'), 'is_dir');
//print_r($dirs);

function listFiles($dirs) {
$result = array();
  $arraySeperator = 0;//not actually doing anything right now.
  foreach ($dirs as $x) {
   //$result[] = $x[];//New
    $files = array_filter(glob("$x/*"), 'is_file');
      foreach ($files as $y) {
	       $result[] = array_pop(explode('/',$y));//get rid of second set of [][] if nothing else

          }
	}
  print_r($result);
}

listFiles($dirs);

//$xml = Array2XML::createXML('/var/www/html/docs', $php_array);
//echo $xml->saveXML();
?>
