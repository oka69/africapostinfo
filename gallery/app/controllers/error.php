<?php
require_once "app/core/controller.php";

class ErrorController extends Controller {

	public function error_404() {
		header("Location: ../");
	}
}
