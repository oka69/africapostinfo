<?php
require_once "app/core/model.php";

class AdminModel extends Model {

    public function __construct() {
        parent::__construct();
    }

    public function login(string $username, string $password) {
        $query = "SELECT * FROM admin WHERE username=? AND password=?";
        $query_params = array($username, $password);
        $query_result = $this->db->execute_query($query, $query_params);
        $admin_infos = $this->db->fetch_assoc($query_result);
        return $admin_infos === NULL ? FALSE : TRUE;
    }
}