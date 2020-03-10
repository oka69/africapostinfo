<?php

function theme_setup() {
    add_theme_support( 'post-thumbnails' );
}

function rest_featured_image( $data, $post, $context ) {
    $featured_image_id = $data->data['featured_media'];
    $featured_image_url = wp_get_attachment_image_src( $featured_image_id, 'full' );

    if ( $featured_image_url ) {
        $data->data['featured_image_url'] = $featured_image_url[0];
    }

    return $data;
}

function custom_excerpt_length( $length ) {
    return 30;
}

add_action( 'after_setup_theme', 'theme_setup' );
add_filter( 'rest_prepare_post', 'rest_featured_image', 10, 3 );
add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );