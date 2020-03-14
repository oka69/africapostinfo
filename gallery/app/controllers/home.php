<?php
require_once "app/core/controller.php";
require_once "app/models/admin.php";
require_once "app/helpers/session.php";

class HomeController extends Controller {

	public function index() {
		$data = array();
		$data['page_title'] = "AFRICAPOST";

		$this->render("templates/header", $data);
		$this->render("home", $data);
		$this->render("templates/footer");
	}

	public function login(string $username, string $password) {
		$admin_model = new AdminModel();

		if ($admin_model->login($username, $password)) {
			Session::set(
				array("admin" => $username)
			);

			$this->redirect("dashboard");
		} else {
			$this->redirect("home");
		}
	}

	public function logout() {
		Session::destroy();
		$this->redirect("home");
	}
}
