//gestion des compteurs de lecture et de partage d'articles 
$(function() {
    //connexion au REST API de WordPress avec la librairie javascript node-wpapi
    let wp = new WPAPI({ endpoint: blogEndPoint });
    
    //gestion du compteur de lecture d'articles
    if ( document.getElementById( "post-content" ) ) {
        wp.posts().id( postId ).get().then(function( data ) {
            let post = [
                data.id,
                data.title.rendered,
                data.featured_image_url
            ];

            //incrémentation du compteur de lecture d'articles
            $.post( counterEndPoint, {update_views: JSON.stringify(post)} );

            //incrémentation des compteurs de partage d'articles
            $("#facebook-share").click(function() {
                $.post( counterEndPoint, {update_shares: JSON.stringify(post)} );
            });

            $("#twitter-share").click(function() {
                $.post( counterEndPoint, {update_shares: JSON.stringify(post)} );
            });

            $("#linkedin-share").click(function() {
                $.post( counterEndPoint, {update_shares: JSON.stringify(post)} );
            });
        });
    }
});
