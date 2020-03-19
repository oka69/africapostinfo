<?php
/*
products.php
	used to manage operations on products in database
*/

//define main class for products
class Counter {
	private $db;

	public function __construct() {
		//create new database connection instance
		$this->db = new Database();
	}

	private function fetch_posts( string $query, string $count ): array {
		$posts = array();

		if ( $this->db->connected ) {
			$result = $this->db->fetch_assoc( $query, true );

			foreach ( $result as $post ) {
				$count = (int)$post[$count];

				if ($count > 4 ) {
					$posts[] = array (
						'post_id' => $post['post_id'],
						'title' => $post['title'],
						'image' => $post['image']
					);
				}
			}
		}

		return $posts;
	}

	private function update_post( array $post, string $count) {
		$post_id = $post[0];
		$post_title = $post[1];
		$post_image = $post[2];

		$post = array();

		if ( $this->db->connected ) {
			$post = $this->db->fetch_assoc( "SELECT * FROM posts WHERE post_id='$post_id'" );
	
			if (!empty($post)) {
				$query = "UPDATE posts SET $count=$count+1 WHERE post_id='$post_id'";				
			} else {
				$query = "INSERT INTO posts (post_id, title, image) VALUES 
					('$post_id', '$post_title', '$post_image')";
			}

			$result = $this->db->execute_query( $query );
		}
	}
	
	//retrieves posts list by views
	public function get_most_viewed( int $limit = 0 ): array {
		if ($limit === 0) {
			$query = "SELECT * FROM posts ORDER BY views DESC";
		} else {
			$query = "SELECT * FROM posts ORDER BY views DESC LIMIT $limit";
		}

		return $this->fetch_posts( $query, "views" );
	}

	//update post view counter
	public function update_most_viewed( array $post ) {
		$this->update_post( $post, "views" );
	}

	//retrieves posts list by share
	public function get_most_shared( int $limit = 0 ) {
		if ($limit === 0) {
			$query = "SELECT * FROM posts ORDER BY shares DESC";
		} else {
			$query = "SELECT * FROM posts ORDER BY shares DESC LIMIT $limit";
		}

		return $this->fetch_posts( $query, "shares" );
	}

	//update post share counter
	public function update_most_shared( array $post ) {
		$this->update_post( $post, "shares" );
	}
}

/*
by eliseekn 
	-> eliseekn@gmail.com
*/