<?php
$files = scandir('path/to/directory');
foreach($files as $file) {
    echo "<a href='$file'>$file</a><br>";
}
?>
