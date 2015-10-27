<?php
function createCSV(array &$array)
{
  // only continue when there is data
  if (count($array) == 0) {
   return null;
  }
  
  // store output in a internal buffer
  ob_start();
  
  // create file stream
  $df = fopen("php://output", 'w');
  
  // write csv headers (firstName, lastName etc) to filestream
  fputcsv($df, array_keys(reset($array)));
  
  // iterate subsequent rows and write data
  foreach ($array as $row) {
    fputcsv($df, $row);
  }
  fclose($df);
  
  // gets the current buffer contents and delete current output buffer.
  return ob_get_clean();
}

function setHeaders($filename) {

  // force download
  header("Content-Type: application/force-download");
  header("Content-Type: application/octet-stream");
  header("Content-Type: application/download");

  // disposition / encoding on response body
  header("Content-Disposition: attachment;filename={$filename}");
  header("Content-Transfer-Encoding: binary");
}

// get the data from the query parameters
$query_parameters = array ($_GET);
setHeaders("linkedin-csv-export.csv");
echo createCSV($query_parameters);
die();  
?>