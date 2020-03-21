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
	$counter->update_count( json_decode( $_POST['update_views'] ), "views" );
} elseif ( isset( $_POST['update_shares'] ) ) {
	$counter->update_count( json_decode( $_POST['update_shares'] ), "shares" );
} elseif ( isset( $_POST['get_most_viewed'] ) ) {
	$data = $counter->get_posts( (int)$_POST['get_most_viewed'], "views" );
} elseif ( isset( $_POST['get_most_shared'] ) ) {
	$data = $counter->get_posts( (int)$_POST['get_most_viewed'], "shares" );
} elseif ( isset( $_POST['get_views_count'] ) ) {
	$data = $counter->get_count( (int)$_POST['get_views_count'], "views" );
} elseif ( isset( $_POST['get_shares_count'] ) ) {
	$data = $counter->get_count( (int)$_POST['get_shares_count'], "shares" );
}

//send response in json format
echo json_encode( $data );

/*
by eliseekn 
	-> eliseekn@gmail.com
*/