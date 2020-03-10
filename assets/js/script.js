$(function() {
    //connexion au REST API de WordPress avec la librairie javascript node-wpapi
    var wp = new WPAPI({ endpoint: 'http://localhost/africapostinfo/wordpress/wp-json' });

    //récupération du dernier article mis en avant (sticky post)
    if ( document.getElementById( "sticky-post" ) ) {
        wp.posts().sticky( true ).order( 'desc' ).orderby( 'id' ).get()
            .then(function( data ) {
                let html = `
                    <h4>A la une</h4>
                    <h1 class="my-3">${ data[0].title.rendered }</h1>
                    <img src="${ data[0].featured_image_url }" class="img-fluid" alt="">
                    <p>${ data[0].excerpt.rendered }</p>

                    <a href="article.php?id=${ data[0].id }" class="btn btn-link my-2">
                        Lire la suite
                    </a>
                `;

                $("#sticky-post").html( html );
            })
            .catch(function( err ) {
                console.log( err );
            });
    }

    //récupération des articles récents
    if ( document.getElementById( "recent-posts" ) ) {
        wp.posts().perPage( 5 ).order( 'desc' ).orderby( 'id' ).get()
            .then(function( data ) {
                let html = '';

                data.forEach(element => {
                    html += `
                        <div class="row no-gutters mt-2">
                            <div class="col-lg-4 col-md-2 col-4 pr-2">
                                <img src="${ element.featured_image_url }" class="img-fluid" alt="">
                            </div>
                            
                            <div class="col-lg-8 col-md-10 col-8">
                                <a href="article.php?id=${ element.id }">${ element.title.rendered }</a>
                            </div>
                        </div>
                    `;
                });

                if ( data.length >= 4 ) {
                    html += `
                        <div class="d-flex align-items-center mt-2">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
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
    }

    //récupération des articles de la rubrique politique
    if ( document.getElementById( "politics-posts" ) ) {
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
                            <i class="fa fa-plus fa-2x"></i>
                            <a href="rubrique.php?id=politique" class="ml-2">d'articles</a>
                        </button>
                    </div>
                `;

                $("#politics-posts").html( html );
            })
            .catch(function( err ) {
                console.log( err );
            });
    }

    //récupération des articles de la rubrique business
    if ( document.getElementById( "business-posts" ) ) {
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
                            <i class="fa fa-plus fa-2x"></i>
                            <a href="rubrique.php?id=business" class="ml-2">d'articles</a>
                        </button>
                    </div>
                `;

                $("#business-posts").html( html );
            })
            .catch(function( err ) {
                console.log( err );
            });
    }

    //récupération des articles de la rubrique culture
    if ( document.getElementById( "culture-posts" ) ) {
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
                        <a href="article.php?id=${ data[0].id }" class="btn btn-link">Lire la suite</a>

                        <div class="d-flex align-items-center">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
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
    }

    //récupération des articles de la rubrique sport
    if ( document.getElementById( "sport-posts" ) ) {
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
                        <a href="article.php?id=${ data[0].id }" class="btn btn-link">Lire la suite</a>

                        <div class="d-flex align-items-center">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
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
    }

    //récupération des articles de la rubrique technologie
    if ( document.getElementById( "tech-posts" ) ) {
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
                        <a href="article.php?id=${ data[0].id }" class="btn btn-link">Lire la suite</a>

                        <div class="d-flex align-items-center">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
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
    }

    //récupération des articles de la rubrique monde
    if ( document.getElementById( "world-posts" ) ) {
        wp.categories().slug( 'monde' )
            .then(function ( data ) {
                return wp.posts().categories( data[0].id ).order( 'desc' ).orderby( 'id' );
            })
            .then(function( data ) {
                let html = `
                    <h4>Monde</h4>

                    <img src="${ data[0].featured_image_url }" class="img-fluid my-3" alt="">
                    <h3>${ data[0].title.rendered }</h3>
                
                    <div class="d-flex align-items-center justify-content-between my-2">
                        <a href="article.php?id=${ data[0].id }" class="btn btn-link">Lire la suite</a>

                        <div class="d-flex align-items-center">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
                                <a href="rubrique.php?id=monde" class="ml-2">d'articles</a>
                            </button>
                        </div>
                    </div>
                `;

                $("#world-posts").html( html );
            })
            .catch(function( err ) {
                console.log( err );
            });
    }

    //affichage du contenu d'un article
    if ( document.getElementById( "post-content" ) ) {
        wp.posts().id( postId ).get()
            .then(function( data ) {
                let html = `
                    <h1 class="my-3">${ data.title.rendered }</h1>
                    <img src="${ data.featured_image_url }" class="img-fluid my-3" alt="">
                    <p>${ data.content.rendered }</p>
                `;

                $("#post-content").html( html );
            })
            .catch(function( err ) {
                console.log( err );
            });
    }

    if ( document.getElementById( "posts-list" ) ) {
        if ( catId === "plus_recents" ) {
            //récupération des articles récents
            var totalPages = 0;

            //récupération du nombre total de pages par articles
            wp.posts().perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' ).headers()
                .then(function( data ) {
                    totalPages = data["x-wp-totalpages"];
                });
            
            wp.posts().perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' ).get()
                .then(function( data ) {
                    let html = '';

                    data.forEach(element => {
                        html += `
                            <div class="p-3 mb-5 border border-dark rounded">
                                <h1 class="my-3">${ element.title.rendered }</h1>
                                <img src="${ element.featured_image_url }" class="img-fluid my-3" alt="">
                                <p>${ element.excerpt.rendered }</p>
    
                                <a href="article.php?id=${ element.id }"" class="btn btn-link my-2">
                                    Lire la suite
                                </a>
                            </div>
                        `;
                    });

                    //barre de pagination
                    html += `
                        <nav class="mt-5">
                            <ul class="pagination">
                    `;

                    //bouton page précédente 
                    if ( pageId > 1 ) {
                        html += `
                            <li class="page-item">    
                                <a class="page-link" href="rubrique.php?id=${ catId }&page=${ pageId - 1 }">Page précédente</a>
                            </li>
                        `;
                    }
        
                    //bouton numérotés
                    if ( totalPages > 1 ) {
                        for (let i = 1; i <= totalPages; i++) {
                            if (i === pageId) {
                                html += `
                                    <li class="page-item active">    
                                        <a class="page-link" href="rubrique.php?id=${ catId }&page=${ i }">
                                        ${ i }
                                        <span class="sr-only">(current)</span>
                                        </a>
                                    </li>
                                 `;
                            } else {
                                html += `
                                    <li class="page-item">    
                                        <a class="page-link" href="rubrique.php?id=${ catId }&page=${ i }">${ i }</a>
                                    </li>
                                 `;
                            }
                        }
                    }
        
                    //bouton page suivante
                    if ( pageId < totalPages ) {
                        html += `
                            <li class="page-item">    
                                <a class="page-link" href="rubrique.php?id=${ catId }&page=${ pageId + 1 }">Page suivante</a>
                            </li>
                        `;
                    }
    
                    html += `
                            </ul>
                        </nav>
                    `;
    
                    $("#posts-list").html( html );
                })
                .catch(function( err ) {
                    console.log( err );
                });
        } else {
            //récupération des articles par rubrique
            var totalPages = 0;

            //récupération du nombre total de pages par articles de la rubrique
            wp.categories().slug( catId )
                .then(function ( data ) {
                    wp.posts().categories( data[0].id ).perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' ).headers()
                        .then(function( data ) {
                            totalPages = data["x-wp-totalpages"];
                        });
            });
            
            wp.categories().slug( catId )
                .then(function ( data ) {
                    return wp.posts().categories( data[0].id ).perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' );
                })
                .then(function( data ) {
                    let html = '';
    
                    data.forEach(element => {
                        html += `
                            <div class="p-3 mb-5 border border-dark rounded">
                                <h1 class="my-3">${ element.title.rendered }</h1>
                                <img src="${ element.featured_image_url }" class="img-fluid my-3" alt="">
                                <p>${ element.excerpt.rendered }</p>
    
                                <a href="article.php?id=${ element.id }"" class="btn btn-link my-2">
                                    Lire la suite
                                </a>
                            </div>
                        `;
                    });
    
                    //barre de pagination
                    html += `
                        <nav class="mt-5">
                            <ul class="pagination">
                    `;

                    //bouton page précédente 
                    if ( pageId > 1 ) {
                        html += `
                            <li class="page-item">    
                                <a class="page-link" href="rubrique.php?id=${ catId }&page=${ pageId - 1 }">Page précédente</a>
                            </li>
                        `;
                    }
        
                    //bouton numérotés
                    if ( totalPages > 1 ) {
                        for (let i = 1; i <= totalPages; i++) {
                            if (i === pageId) {
                                html += `
                                    <li class="page-item active">    
                                        <a class="page-link" href="rubrique.php?id=${ catId }&page=${ i }">
                                        ${ i }
                                        <span class="sr-only">(current)</span>
                                        </a>
                                    </li>
                                 `;
                            } else {
                                html += `
                                    <li class="page-item">    
                                        <a class="page-link" href="rubrique.php?id=${ catId }&page=${ i }">${ i }</a>
                                    </li>
                                 `;
                            }
                        }
                    }
        
                    //bouton page suivante
                    if ( pageId < totalPages ) {
                        html += `
                            <li class="page-item">    
                                <a class="page-link" href="rubrique.php?id=${ catId }&page=${ pageId + 1 }">Page suivante</a>
                            </li>
                        `;
                    }
    
                    html += `
                            </ul>
                        </nav>
                    `;
    
                    $("#posts-list").html( html );
                })
                .catch(function( err ) {
                    console.log( err );
                });
        }
    }
});
