<?php
/*
router.php
	used to parse $_POST requests to server
*/

//set headers for json response
header( 'Content-Type: application/json' );

//import database class
require_once "database.php";
require_once "counter.php";

//define main variables
$data = array();
$counter = new Counter();

//parse $_POST requests
if ( isset( $_POST['update_views'] ) ) {
	$counter->update_most_viewed( json_decode( $_POST['update_views'] ) );
} elseif ( isset( $_POST['update_shares'] ) ) {
	$counter->update_most_shared( json_decode( $_POST['update_shares'] ) );
} elseif ( isset( $_POST['get_most_viewed'] ) ) {
	$data = $counter->get_most_viewed( $_POST['get_most_viewed'] );
} elseif ( isset( $_POST['get_most_shared'] ) ) {
	$data = $counter->get_most_shared( $_POST['get_most_shared'] );
}

//send response in json format
echo json_encode( $data );

/*
by eliseekn 
	-> eliseekn@gmail.com
*/