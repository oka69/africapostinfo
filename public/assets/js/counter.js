//gestion des compteurs de lecture et de partage d'articles 
$(function() {
    //gestion du compteur de lecture d'articles
    if ( document.getElementById( "post-content" ) ) {
        wp.posts().id( postId ).get().then(function( data ) {
            let post = [
                data.id,
                data.title.rendered,
                data.featured_image_url
            ];

            //incrémentation du compteur de lecture d'articles
            $.post( "/africapostinfo/counter/router.php/", {update_views: JSON.stringify(post)});

            //incrémentation des compteurs de partage d'articles
            $("#facebook-share").click(function() {
                $.post( "/africapostinfo/counter/router.php/", {update_shares: JSON.stringify(post)});
            });

            $("#twitter-share").click(function() {
                $.post( "/africapostinfo/counter/router.php/", {update_shares: JSON.stringify(post)});
            });

            $("#linkedin-share").click(function() {
                $.post( "/africapostinfo/counter/router.php/", {update_shares: JSON.stringify(post)});
            });
        });
    }
});
