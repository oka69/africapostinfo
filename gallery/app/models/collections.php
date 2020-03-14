<?php
include_once "app/core/model.php";
include_once "app/helpers/pagination.php";

class CollectionsModel extends Model {
    
    public function __construct() {
        parent::__construct();
    }

    public function get_all(): array {
        $query_result = $this->db->execute_query("SELECT * FROM collections ORDER BY id DESC");
        $collections = array();

        if ($query_result) {
			while ($data = $this->db->fetch_assoc($query_result)) {
				$collections[] = array(
                    'id' => $data['id'],
                    'images' => $data['images'],
                    'name' => stripslashes($data['name'])
                );
			}
        }
        
        return $collections;
    }

    public function get(int $id): array {
        $query = "SELECT * FROM collections WHERE id=?";
        $query_params = array($id);
        $query_result = $this->db->execute_query($query, $query_params);
        $collection = $this->db->fetch_assoc($query_result);
        return $collection;
    }

    public function add_collection(string $name) {
        $name = $this->db->safe_string($name);
        
        $query = "INSERT INTO collections (name, images) VALUES (?, ?)";
        $query_params = array($name, "");
        $query_result = $this->db->execute_query($query, $query_params);
        return $query_result;
    }

    public function update_collection(int $id, string $images) {
        $query = "UPDATE collections SET images=? WHERE id=?";
        $query_params = array($images, $id);
        $query_result = $this->db->execute_query($query, $query_params);
        return $query_result;
    }

    public function remove_collection(int $id) {
        $query = "SELECT * FROM collections WHERE id=?";
        $query_params = array($id);
        $query_result = $this->db->execute_query($query, $query_params);
        
        if ($query_result) {
            $collection = $this->db->fetch_assoc($query_result);
            $collection_path = ROOT . "public/img/" . stripslashes(html_entity_decode($collection['name']));
            $collection_full_path = $_SERVER['DOCUMENT_ROOT'] . $collection_path;

            if (is_dir($collection_full_path)) {
                $this->rrmdir($collection_full_path);
            }

            $query = "DELETE FROM collections WHERE id=? LIMIT 1";
            $query_params = array($id);
            $query_result = $this->db->execute_query($query, $query_params);
        }
        
        return $query_result;
    }

    //https://stackoverflow.com/questions/3338123/how-do-i-recursively-delete-a-directory-and-its-entire-contents-files-sub-dir
    public function rrmdir($dir) { 
        if (is_dir($dir)) { 
          $objects = scandir($dir);
          foreach ($objects as $object) { 
            if ($object != "." && $object != "..") { 
              if (is_dir($dir. DIRECTORY_SEPARATOR .$object) && !is_link($dir."/".$object))
                rrmdir($dir. DIRECTORY_SEPARATOR .$object);
              else
                unlink($dir. DIRECTORY_SEPARATOR .$object); 
            } 
          }
          rmdir($dir); 
        } 
      }
}