$(function() {
    //connexion à REST API de WordPress avec la librairie node-wpapi
    var wp = new WPAPI({ endpoint: 'http://localhost/africapostinfo/wordpress/wp-json' });

    //récupération du dernier article mis en avant (sticky post)
    wp.posts().sticky( true ).order( 'desc' ).orderby( 'id' ).get()
		.then(function( data ) {
            let html = `
                <h4>A la une</h4>
                <img src="${ data[0].featured_image_url }" class="img-fluid" alt="">
                <h1 class="my-3">${ data[0].title.rendered }</h1>
                <p>${ data[0].excerpt.rendered }</p>

                <a href="article.php?id=${ data[0].id }" class="btn btn-primary my-2">
                    Lire la suite
                </a>
            `;

            $("#sticky-post").html( html );
        })
        .catch(function( err ) {
            console.log( err );
        });

    //récupération des articles récents
    wp.posts().perPage( 5 ).order( 'desc' ).orderby( 'id' ).get()
		.then(function( data ) {
            let html = '';

            data.forEach(element => {
                html += `
                    <div class="row no-gutters mt-2">
                        <div class="col-lg-4 col-md-2 col-4">
                            <img src="${ element.featured_image_url }" class="img-fluid" alt="">
                        </div>
                        
                        <div class="col-lg-8 col-md-10 col-8 pl-lg-2 pl-0">
                            <a href="article.php?id=${ element.id }">${ element.title.rendered }</a>
                        </div>
                    </div>
                `;
            });

            if ( data.length >= 4 ) {
                html += `
                    <div class="d-flex align-items-center mt-2">
                        <button class="btn d-flex align-items-center">
                            <i class="fa fa-plus fa-2x text-danger"></i>
                            <a href="rubrique.php?id=plus_recents" class="ml-2">d'articles</a>
                        </button>
                    </div>
                `;
            }

            $("#recent-posts").html( html );
        })
        .catch(function( err ) {
            console.log( err );
        });

    //récupération des articles de la rubrique politique
    wp.categories().slug( 'politique' )
        .then(function ( data ) {
            return wp.posts().perPage( 3 ).categories( data[0].id ).order( 'desc' ).orderby( 'id' );
        })
		.then(function( data ) {
            let html = '<h4>Politique</h4>';

            data.forEach(element => {
                html += `
                    <div class="row no-gutters mt-3">
                        <div class="col-lg-6 col-md-3 col-4 pr-2">
                            <img src="${ element.featured_image_url }" class="img-fluid" alt="">
                        </div>

                        <div class="col-lg-6 col-md-9 col-8">
                            <a href="article.php?id=${ element.id }">${ element.title.rendered }</a>
                        </div>
                    </div>
                `;
            });

            html += `
                <div class="d-flex align-items-center mt-3">
                    <button class="btn d-flex align-items-center">
                        <i class="fa fa-plus fa-2x text-danger"></i>
                        <a href="rubrique.php?id=politique" class="ml-2">d'articles</a>
                    </button>
                </div>
            `;

            $("#politics-posts").html( html );
        })
        .catch(function( err ) {
            console.log( err );
        });

    //récupération des articles de la rubrique business
    wp.categories().slug( 'business' )
        .then(function ( data ) {
            return wp.posts().perPage( 3 ).categories( data[0].id ).order( 'desc' ).orderby( 'id' );
        })
		.then(function( data ) {
            let html = '<h4>Business</h4>';

            data.forEach(element => {
                html += `
                    <div class="row no-gutters mt-3">
                        <div class="col-lg-6 col-md-3 col-4 pr-2">
                            <img src="${ element.featured_image_url }" class="img-fluid" alt="">
                        </div>

                        <div class="col-lg-6 col-md-9 col-8">
                            <a href="article.php?id=${ element.id }">${ element.title.rendered }</a>
                        </div>
                    </div>
                `;
            });

            html += `
                <div class="d-flex align-items-center mt-3">
                    <button class="btn d-flex align-items-center">
                        <i class="fa fa-plus fa-2x text-danger"></i>
                        <a href="rubrique.php?id=business" class="ml-2">d'articles</a>
                    </button>
                </div>
            `;

            $("#business-posts").html( html );
        })
        .catch(function( err ) {
            console.log( err );
        });

    //récupération des articles de la rubrique culture
    wp.categories().slug( 'culture' )
        .then(function ( data ) {
            return wp.posts().categories( data[0].id ).order( 'desc' ).orderby( 'id' );
        })
		.then(function( data ) {
            let html = `
                <h4>Culture</h4>

                <img src="${ data[0].featured_image_url }" class="img-fluid my-3" alt="">
                <h3>${ data[0].title.rendered }</h3>
            
                <div class="d-flex align-items-center justify-content-between my-2">
                    <a href="article.php?id=${ data[0].id }" class="btn btn-primary">Lire la suite</a>

                    <div class="d-flex align-items-center">
                        <button class="btn d-flex align-items-center">
                            <i class="fa fa-plus fa-2x text-danger"></i>
                            <a href="rubrique.php?id=culture" class="ml-2">d'articles</a>
                        </button>
                    </div>
                </div>
            `;

            $("#culture-posts").html( html );
        })
        .catch(function( err ) {
            console.log( err );
        });

    //récupération des articles de la rubrique sport
    wp.categories().slug( 'sport' )
        .then(function ( data ) {
            return wp.posts().categories( data[0].id ).order( 'desc' ).orderby( 'id' );
        })
		.then(function( data ) {
            let html = `
                <h4>Sport</h4>

                <img src="${ data[0].featured_image_url }" class="img-fluid my-3" alt="">
                <h3>${ data[0].title.rendered }</h3>
            
                <div class="d-flex align-items-center justify-content-between my-2">
                    <a href="article.php?id=${ data[0].id }" class="btn btn-primary">Lire la suite</a>

                    <div class="d-flex align-items-center">
                        <button class="btn d-flex align-items-center">
                            <i class="fa fa-plus fa-2x text-danger"></i>
                            <a href="rubrique.php?id=sport" class="ml-2">d'articles</a>
                        </button>
                    </div>
                </div>
            `;

            $("#sport-posts").html( html );
        })
        .catch(function( err ) {
            console.log( err );
        });

    //récupération des articles de la rubrique technologie
    wp.categories().slug( 'technologie' )
        .then(function ( data ) {
            return wp.posts().categories( data[0].id ).order( 'desc' ).orderby( 'id' );
        })
		.then(function( data ) {
            let html = `
                <h4>Technologie</h4>

                <img src="${ data[0].featured_image_url }" class="img-fluid my-3" alt="">
                <h3>${ data[0].title.rendered }</h3>
            
                <div class="d-flex align-items-center justify-content-between my-2">
                    <a href="article.php?id=${ data[0].id }" class="btn btn-primary">Lire la suite</a>

                    <div class="d-flex align-items-center">
                        <button class="btn d-flex align-items-center">
                            <i class="fa fa-plus fa-2x text-danger"></i>
                            <a href="rubrique.php?id=tech" class="ml-2">d'articles</a>
                        </button>
                    </div>
                </div>
            `;

            $("#tech-posts").html( html );
        })
        .catch(function( err ) {
            console.log( err );
        });
});
