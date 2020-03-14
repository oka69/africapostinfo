<?php
require_once "app/core/controller.php";
require_once "app/models/collections.php";
require_once "app/helpers/sanitize.php";
require_once "app/helpers/session.php";

class DashboardController extends Controller {

	public function index() {
		if (!Session::exists("admin")) {
			$this->redirect("home");
			exit();
		}

		$collections_model = new CollectionsModel();
		$data = array();
		
		$data['page_title'] = "AFRICAPOST";
		$data['collections'] = $collections_model->get_all();

		$this->render("templates/header", $data);
		$this->render("dashboard", $data);
		$this->render("templates/footer");
	}

	public function add_collection(string $name) {
		$collection_full_path = $_SERVER['DOCUMENT_ROOT'] . ROOT . "public/img/" . $name;
		
		if (!is_dir($collection_full_path)) {
			mkdir($collection_full_path, 0777);
			chmod($collection_full_path, 0777);

			$collections_model = new CollectionsModel();
			$collections_model->add_collection(Sanitize::input($name));
		}
	}

	public function update_collection(string $id) {
		$collections_model = new CollectionsModel();
		$collection = $collections_model->get($id);

		$collection_path = ROOT . "public/img/" . stripslashes(html_entity_decode($collection['name']));
		$collection_full_path = $_SERVER['DOCUMENT_ROOT'] . $collection_path;

		$images = array();

		if (is_dir($collection_full_path)) {
			$files_count = count($_FILES['images']['name']);
	
			for($i = 0; $i < $files_count; $i++){
				$tmp_name = $_FILES['images']['tmp_name'][$i];
				$image_full_path = $collection_full_path . "/" . basename($_FILES['images']['name'][$i]);
				$image_path = $collection_path . "/" . $_FILES['images']['name'][$i];

				if(move_uploaded_file($tmp_name, $image_full_path)) {
					$images[] = $image_path;
				}
			}
		}

		if (!empty($images)) {
			$images_str = implode(",", $images);

			$collections_model = new CollectionsModel();
			$collections_model->update_collection($id, $images_str);
		}
	}

	public function remove_collection(int $id) {
		$collections_model = new CollectionsModel();
		$collections_model->remove_collection($id);
	}
}
