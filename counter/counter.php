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

	//get posts by shares or views
	public function get_posts( int $limit, string $count ): array {
		$posts = array();
		$query = "SELECT * FROM posts ORDER BY $count DESC LIMIT $limit";

		if ( $this->db->connected ) {
			$result = $this->db->fetch_assoc( $query, true );

			foreach ( $result as $post ) {
				$count = (int)$post[$count];

				//retrieves posts with more than 4 views or shares
				if ( $count > 4 ) {
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

	//get posts shares or views count
	public function get_count( int $post_id, string $count ): array {
		$post = array();
		$query = "SELECT * FROM posts WHERE post_id='$post_id'";

		if ( $this->db->connected ) {
			$result = $this->db->fetch_assoc( $query );
			$post[] = array( "$count" => $result[$count] );
		}

		return $post;
	}

	//increment views or shares count
	public function update_count( array $post, string $count) {
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

			$this->db->execute_query( $query );
		}
	}
}

/*
by eliseekn 
	-> eliseekn@gmail.com
*/