<?php
header( 'Content-Type: application/json' );

require_once "app/core/controller.php";
require_once "app/models/collections.php";

class CollectionsController extends Controller {

	public function index(int $limit = 0) {
		$collections_model = new CollectionsModel();
		$collections = $collections_model->get_all();

		$thumbnails = array();
		
		if ( $limit === 0 ) {
			$limit = count($collections);
		} else {
			if ($limit > count($collections)) {
				$limit = count($collections);
			}
		}

		for( $i = 0; $i < $limit; $i++ ) {
			$images = explode(",", $collections[$i]['images']);

			$thumbnails[] = array(
				"image" => $images[0]
			);
		}
		
		$data = array(
			"collections" => $collections,
			"thumbnails" => $thumbnails
		);
        
        echo json_encode( $data );
	}

	public function images(int $id) {
		$collections_model = new CollectionsModel();
		$collection = $collections_model->get($id);

		$thumbnails = array();
		$images = explode(",", $collection['images']);

		foreach($images as $image) {
			$thumbnails[] = array(
				"image" => $image
			);
		}

		$data = array(
			"name" => $collection['name'],
			"thumbnails" => $thumbnails
		);
        
        echo json_encode( $data );
	}
}
