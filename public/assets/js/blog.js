//mise en forme de la date
function formatDate( utcDate ) {
    let months = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet",
        "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    let newDate = new Date(utcDate);
    return newDate.getUTCDate() + " " + months[newDate.getUTCMonth()] + " " + newDate.getUTCFullYear();
}

$(function() {
    //connexion au REST API de WordPress avec la librairie javascript node-wpapi
    let wp = new WPAPI({ endpoint: blogEndPoint });

    //récupération du dernier article mis en avant (sticky post)
    if ( document.getElementById( "sticky-post" ) ) {
        wp.posts().sticky( true ).status( 'publish' ).order( 'desc' ).orderby( 'id' ).get().then(function( data ) {
            $("#sticky-post").html(`
                <h4>A la une</h4>

                <h1 class="my-3">
                    <a href="article.php?id=${ data[0].id }">${ data[0].title.rendered }</a>
                </h1>

                <p class="text-muted">Publié le ${ formatDate( data[0].date ) }</p>

                <a href="article.php?id=${ data[0].id }">
                    <img src="${ data[0].featured_image_url }" class="img-fluid" alt="">
                </a>

                <p>${ data[0].excerpt.rendered }</p>

                <a href="article.php?id=${ data[0].id }" class="btn btn-link my-2">
                    Lire la suite
                </a>
            `);
        });
    }

    //récupération des articles les plus récents
    if ( document.getElementById( "most-recent" ) ) {
        wp.posts().status( 'publish' ).perPage( 5 ).order( 'desc' ).orderby( 'id' ).get().then(function( data ) {
            let html = '';

            data.forEach(element => {
                html += `
                    <div class="row no-gutters mt-2">
                        <div class="col-lg-4 col-md-2 col-4 pr-2">
                            <a href="article.php?id=${ element.id }">
                                <img src="${ element.featured_image_url }" class="img-fluid" alt="">
                            </a>
                        </div>
                        
                        <div class="col-lg-8 col-md-10 col-8">
                            <a href="article.php?id=${ element.id }">${ element.title.rendered }</a>
                        </div>
                    </div>
                `;
            });

            $("#most-recent").html( html );
        });
    }

    //récupération des articles les plus lus
    if ( document.getElementById( "most-viewed" ) ) {
        $.post( counterEndPoint, {get_most_viewed: 5} )
            .done(function( data ) {
                let html = '';

                data.forEach(element => {
                    html += `
                        <div class="row no-gutters mt-2">
                            <div class="col-lg-4 col-md-2 col-4 pr-2">
                                <a href="article.php?id=${ element.post_id }">
                                    <img src="${ element.image }" class="img-fluid" alt="">
                                </a>
                            </div>
                            
                            <div class="col-lg-8 col-md-10 col-8">
                                <a href="article.php?id=${ element.post_id }">${ element.title }</a>
                            </div>
                        </div>
                    `;
                });

                $("#most-viewed").html( html );
            });
    }

    //récupération des articles les plus partagés
    if ( document.getElementById( "most-shared" ) ) {
        $.post( counterEndPoint, {get_most_shared: 5} )
            .done(function( data ) {
                let html = '';

                data.forEach(element => {
                    html += `
                        <div class="row no-gutters mt-2">
                            <div class="col-lg-4 col-md-2 col-4 pr-2">
                                <a href="article.php?id=${ element.post_id }">
                                    <img src="${ element.image }" class="img-fluid" alt="">
                                </a>
                            </div>
                            
                            <div class="col-lg-8 col-md-10 col-8">
                                <a href="article.php?id=${ element.post_id }">${ element.title }</a>
                            </div>
                        </div>
                    `;
                });

                $("#most-shared").html( html );
            });
    }

    //récupération des articles de la rubrique politique
    if ( document.getElementById( "politics-posts" ) ) {
        wp.categories().slug( 'politique' )
            .then(function ( data ) {
                return wp.posts().categories( data[0].id ).status( 'publish' ).perPage( 3 ).order( 'desc' ).orderby( 'id' );
            })
            .then(function( data ) {
                let html = '<h4>Politique</h4>';

                data.forEach(element => {
                    html += `
                        <div class="row no-gutters mt-3">
                            <div class="col-lg-6 col-md-3 col-4 pr-2">
                                <a href="article.php?id=${ element.id }">
                                    <img src="${ element.featured_image_url }" class="img-fluid" alt="">
                                </a>
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
            });
    }

    //récupération des articles de la rubrique business
    if ( document.getElementById( "business-posts" ) ) {
        wp.categories().slug( 'business' )
            .then(function ( data ) {
                return wp.posts().categories( data[0].id ).status( 'publish' ).perPage( 3 ).order( 'desc' ).orderby( 'id' );
            })
            .then(function( data ) {
                let html = '<h4>Business</h4>';

                data.forEach(element => {
                    html += `
                        <div class="row no-gutters mt-3">
                            <div class="col-lg-6 col-md-3 col-4 pr-2">
                                <a href="article.php?id=${ element.id }">
                                    <img src="${ element.featured_image_url }" class="img-fluid" alt="">
                                </a>
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
            });
    }

    //récupération des articles de la rubrique culture
    if ( document.getElementById( "culture-posts" ) ) {
        wp.categories().slug( 'culture' )
            .then(function ( data ) {
                return wp.posts().categories( data[0].id ).status( 'publish' ).order( 'desc' ).orderby( 'id' );
            })
            .then(function( data ) {
                $("#culture-posts").html(`
                    <h4>Culture</h4>

                    <a href="article.php?id=${ data[0].id }">
                        <img src="${ data[0].featured_image_url }" class="img-fluid my-3" alt="">
                        <h3>${ data[0].title.rendered }</h3>
                    </a>
                
                    <div class="d-flex align-items-center justify-content-between my-2">
                        <a href="article.php?id=${ data[0].id }" class="btn btn-link">Lire la suite</a>

                        <div class="d-flex align-items-center">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
                                <a href="rubrique.php?id=culture" class="ml-2">d'articles</a>
                            </button>
                        </div>
                    </div>
                `);
            });
    }

    //récupération des articles de la rubrique sport
    if ( document.getElementById( "sport-posts" ) ) {
        wp.categories().slug( 'sport' )
            .then(function ( data ) {
                return wp.posts().categories( data[0].id ).status( 'publish' ).order( 'desc' ).orderby( 'id' );
            })
            .then(function( data ) {
                $("#sport-posts").html(`
                    <h4>Sport</h4>

                    <a href="article.php?id=${ data[0].id }">
                        <img src="${ data[0].featured_image_url }" class="img-fluid my-3" alt="">
                        <h3>${ data[0].title.rendered }</h3>
                    </a>
                
                    <div class="d-flex align-items-center justify-content-between my-2">
                        <a href="article.php?id=${ data[0].id }" class="btn btn-link">Lire la suite</a>

                        <div class="d-flex align-items-center">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
                                <a href="rubrique.php?id=sport" class="ml-2">d'articles</a>
                            </button>
                        </div>
                    </div>
                `);
            });
    }

    //récupération des articles de la rubrique technologie
    if ( document.getElementById( "tech-posts" ) ) {
        wp.categories().slug( 'technologie' )
            .then(function ( data ) {
                return wp.posts().categories( data[0].id ).status( 'publish' ).order( 'desc' ).orderby( 'id' );
            })
            .then(function( data ) {
                $("#tech-posts").html(`
                    <h4>Technologie</h4>

                    <a href="article.php?id=${ data[0].id }">
                        <img src="${ data[0].featured_image_url }" class="img-fluid my-3" alt="">
                        <h3>${ data[0].title.rendered }</h3>
                    </a>
                
                    <div class="d-flex align-items-center justify-content-between my-2">
                        <a href="article.php?id=${ data[0].id }" class="btn btn-link">Lire la suite</a>

                        <div class="d-flex align-items-center">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
                                <a href="rubrique.php?id=technologie" class="ml-2">d'articles</a>
                            </button>
                        </div>
                    </div>
                `);
            });
    }

    //récupération des articles de la rubrique monde
    if ( document.getElementById( "world-posts" ) ) {
        wp.categories().slug( 'monde' )
            .then(function ( data ) {
                return wp.posts().categories( data[0].id ).status( 'publish' ).order( 'desc' ).orderby( 'id' );
            })
            .then(function( data ) {
                $("#world-posts").html(`
                    <h4>Monde</h4>

                    <a href="article.php?id=${ data[0].id }">
                        <img src="${ data[0].featured_image_url }" class="img-fluid my-3" alt="">
                        <h3>${ data[0].title.rendered }</h3>
                    </a>
                
                    <div class="d-flex align-items-center justify-content-between my-2">
                        <a href="article.php?id=${ data[0].id }" class="btn btn-link">Lire la suite</a>

                        <div class="d-flex align-items-center">
                            <button class="btn d-flex align-items-center">
                                <i class="fa fa-plus fa-2x"></i>
                                <a href="rubrique.php?id=monde" class="ml-2">d'articles</a>
                            </button>
                        </div>
                    </div>
                `);
            });
    }

    //affichage du contenu d'un article
    if ( document.getElementById( "post-content" ) ) {
        wp.posts().id( postId ).get().then(function( data ) {
            $("#post-content").html(`
                <h1 class="my-3">${ data.title.rendered }</h1>
                <p class="text-muted">Publié le ${ formatDate( data.date ) }</p>
                <img src="${ data.featured_image_url }" class="img-fluid my-3" alt="">
                <p>${ data.content.rendered }</p>
            `);

            $("#facebook-share").attr("href", 
                "https://www.facebook.com/sharer.php?u=" + encodeURI(window.location.href)
            );

            $("#twitter-share").attr("href", 
                "https://twitter.com/intent/tweet?text=" + data.title.rendered + "... " + encodeURI(window.location.href)
            );

            $("#linkedin-share").attr("href",
                "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURI(window.location.href)
            );
        });
    }

    //affichage des articles similaires
    if ( document.getElementById( "similar-posts" ) ) {
        wp.posts().id( postId ).get()
            .then(function( data ) {
                return wp.posts().categories( data.categories[0].id ).status( 'publish' ).perPage( 3 ).order( 'desc' ).orderby( 'id' );
            })
            .then(function( data ) {
                let html = '';

                data.forEach(element => {
                    html += `
                        <div class="col">
                            <a href="article.php?id=${ element.id }">
                                <img src="${ element.featured_image_url }" class="img-fluid" alt="">
                                <h5 class="mt-2">${ element.title.rendered }</h5>
                            </a>
                        </div>
                    `;
                });
    
                $("#similar-posts").html( html );

                wp.categories().id( data[0].categories[0] ).get().then(function( data ) {
                    $("#similar-posts-more").html(`
                        <button class="btn d-flex align-items-center">
                            <i class="fa fa-plus fa-2x"></i>
                            <a href="rubrique.php?id=${ data.slug }" class="ml-2">d'articles</a>
                        </button>
                    `); 
                });
            });

    }

    //récupération de tous les articles
    if ( document.getElementById( "posts-list" ) ) {
        if ( catId === "tout" ) {
            //création de la pagination
            wp.posts().status( 'publish' ).perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' ).headers()
                .then(function( data ) {
                    let totalPages = data["x-wp-totalpages"];

                    //barre de pagination
                    let pagination = `
                        <nav class="mt-5">
                            <ul class="pagination">
                    `;

                    //bouton page précédente 
                    if ( pageId > 1 ) {
                        pagination += `
                            <li class="page-item">    
                                <a class="page-link" href="rubrique.php?id=${ catId }&page=${ pageId - 1 }">Page précédente</a>
                            </li>
                        `;
                    }
        
                    //bouton numérotés
                    if ( totalPages > 1 ) {
                        for (let i = 1; i <= totalPages; i++) {
                            if (i === pageId) {
                                pagination += `
                                    <li class="page-item active">    
                                        <a class="page-link" href="rubrique.php?id=${ catId }&page=${ i }">
                                        ${ i }
                                        <span class="sr-only">(current)</span>
                                        </a>
                                    </li>
                                 `;
                            } else {
                                pagination += `
                                    <li class="page-item">    
                                        <a class="page-link" href="rubrique.php?id=${ catId }&page=${ i }">${ i }</a>
                                    </li>
                                 `;
                            }
                        }
                    }
        
                    //bouton page suivante
                    if ( pageId < totalPages ) {
                        pagination += `
                            <li class="page-item">    
                                <a class="page-link" href="rubrique.php?id=${ catId }&page=${ pageId + 1 }">Page suivante</a>
                            </li>
                        `;
                    }
    
                    pagination += `
                            </ul>
                        </nav>
                    `;

                    return pagination;
                }) //récupération des articles
                .then(function( pagination ) {
                    wp.posts().status( 'publish' ).perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' ).get()
                        .then(function( data ) {
                            let html = '';

                            data.forEach(element => {
                                html += `
                                    <div class="p-3 mb-5 border border-dark rounded">
                                        <a href="article.php?id=${ element.id }">
                                            <h1 class="my-3">${ element.title.rendered }</h1>
                                        </a>

                                        <p class="text-muted">Publié le ${ formatDate( element.date ) }</p>

                                        <a href="article.php?id=${ element.id }">
                                            <img src="${ element.featured_image_url }" class="img-fluid my-3" alt="">
                                        </a>

                                        <p>${ element.excerpt.rendered }</p>
            
                                        <a href="article.php?id=${ element.id }" class="btn btn-link my-2">
                                            Lire la suite
                                        </a>
                                    </div>
                                `;
                            });

                            html += pagination;

                            $("#posts-list").html( html );
                    })
                })
        } else {
            wp.categories().slug( catId ).then(function ( data ) {
                //création de la pagination
                wp.posts().categories( data[0].id ).status( 'publish' ).perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' ).headers()
                    .then(function( pages ) {
                        let totalPages = pages["x-wp-totalpages"];

                        //barre de pagination
                        let pagination = `
                            <nav class="mt-5">
                                <ul class="pagination">
                        `;

                        //bouton page précédente 
                        if ( pageId > 1 ) {
                            pagination += `
                                <li class="page-item">    
                                    <a class="page-link" href="rubrique.php?id=${ catId }&page=${ pageId - 1 }">Page précédente</a>
                                </li>
                            `;
                        }
            
                        //bouton numérotés
                        if ( totalPages > 1 ) {
                            for (let i = 1; i <= totalPages; i++) {
                                if (i === pageId) {
                                    pagination += `
                                        <li class="page-item active">    
                                            <a class="page-link" href="rubrique.php?id=${ catId }&page=${ i }">
                                            ${ i }
                                            <span class="sr-only">(current)</span>
                                            </a>
                                        </li>
                                    `;
                                } else {
                                    pagination += `
                                        <li class="page-item">    
                                            <a class="page-link" href="rubrique.php?id=${ catId }&page=${ i }">${ i }</a>
                                        </li>
                                    `;
                                }
                            }
                        }
            
                        //bouton page suivante
                        if ( pageId < totalPages ) {
                            pagination += `
                                <li class="page-item">    
                                    <a class="page-link" href="rubrique.php?id=${ catId }&page=${ pageId + 1 }">Page suivante</a>
                                </li>
                            `;
                        }

                        pagination += `
                                </ul>
                            </nav>
                        `;

                        return pagination;
                    })
                    .then(function( pagination ) {
                        wp.categories().slug( catId )
                            .then(function ( data ) {
                                return wp.posts().categories( data[0].id ).status( 'publish' ).perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' );
                            })
                            .then(function( data ) {
                                let html = '';
                
                                data.forEach(element => {
                                    html += `
                                        <div class="p-3 mb-5 border border-dark rounded">
                                            <a href="article.php?id=${ element.id }">
                                                <h1 class="my-3">${ element.title.rendered }</h1>
                                            </a>

                                            <p class="text-muted">Publié le ${ formatDate( element.date ) }</p>

                                            <a href="article.php?id=${ element.id }">
                                                <img src="${ element.featured_image_url }" class="img-fluid my-3" alt="">
                                            </a>
                                            
                                            <p>${ element.excerpt.rendered }</p>
                
                                            <a href="article.php?id=${ element.id }" class="btn btn-link my-2">
                                                Lire la suite
                                            </a>
                                        </div>
                                    `;
                                });
                
                                html += pagination;

                                $("#posts-list").html( html );
                            })
                        })
            })
        }
    }

    //récupération de tous les articles selon la requête de la recherche
    if ( document.getElementById( "posts-list-search" ) ) {
        wp.posts().status( 'publish' ).search( query ).perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' ).headers()
            .then(function( data ) {
                let totalPages = data["x-wp-totalpages"];

                //barre de pagination
                let pagination = `
                    <nav class="mt-5">
                        <ul class="pagination">
                `;

                //bouton page précédente 
                if ( pageId > 1 ) {
                    pagination += `
                        <li class="page-item">    
                            <a class="page-link" href="search.php?q=${ query }&page=${ pageId - 1 }">Page précédente</a>
                        </li>
                    `;
                }
    
                //bouton numérotés
                if ( totalPages > 1 ) {
                    for (let i = 1; i <= totalPages; i++) {
                        if (i === pageId) {
                            pagination += `
                                <li class="page-item active">    
                                    <a class="page-link" href="search.php?q=${ query }&page=${ i }">
                                    ${ i }
                                    <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                `;
                        } else {
                            pagination += `
                                <li class="page-item">    
                                    <a class="page-link" href="search.php?q=${ query }&page=${ i }">${ i }</a>
                                </li>
                                `;
                        }
                    }
                }
    
                //bouton page suivante
                if ( pageId < totalPages ) {
                    pagination += `
                        <li class="page-item">    
                            <a class="page-link" href="search.php?q=${ query }&page=${ pageId + 1 }">Page suivante</a>
                        </li>
                    `;
                }

                pagination += `
                        </ul>
                    </nav>
                `;

                return pagination;
            }) //récupération des articles
            .then(function( pagination ) {
                wp.posts().status( 'publish' ).search( query ).perPage( 5 ).page( pageId ).order( 'desc' ).orderby( 'id' ).get()
                    .then(function( data ) {
                        let html = `
                            <h4 class="mb-5">Résultats de la recherche pour "${query}"</h4>
                        `;

                        if (data.length > 0) {
                            data.forEach(element => {
                                html += `
                                    <div class="p-3 mb-5 border border-dark rounded">
                                        <a href="article.php?id=${ element.id }">
                                            <h1 class="my-3">${ element.title.rendered }</h1>
                                        </a>

                                        <p class="text-muted">Publié le ${ formatDate( element.date ) }</p>

                                        <a href="article.php?id=${ element.id }">
                                            <img src="${ element.featured_image_url }" class="img-fluid my-3" alt="">
                                        </a>
    
                                        <p>${ element.excerpt.rendered }</p>
            
                                        <a href="article.php?id=${ element.id }" class="btn btn-link my-2">
                                            Lire la suite
                                        </a>
                                    </div>
                                `;
                            });
                        } else {
                            html += `<p class="lead">Aucun résultat trouvé</p>`;
                        }

                        html += pagination;

                        $("#posts-list-search").html( html );
                })
            })
    }

    //formulaire de recherche
    //https://stackoverflow.com/questions/979662/how-to-detect-pressing-enter-on-keyboard-using-jquery
    $("#search").keypress(function(event) {
        if (event.key === "Enter") {
            $("#search-button").click();
        }
    });

    //bouton de l'icône rechercher
    $("#search-button").click(function() {
        let search_query = $("#search").val();

        if ( search_query !== "" ) {
            window.location.href = "/search.php?q=" + search_query;
        }
    });
});
