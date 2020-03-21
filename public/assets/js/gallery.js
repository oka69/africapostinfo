//afficher le lightbox
function showLightbox(e) {
    //attribution du lien vers l'image
    let lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.setAttribute("src", e.dataset.imgPath);

    //affichage du lightbox
    let lightbox = document.getElementById("lightbox");
    lightbox.setAttribute("style", "display: block;");
}

$(function() {
    //récupération des dernières collections images
    if ( document.getElementById( "collections-list" ) ) {
        $.post(galleryEndPoint + "5", function( data ) {
            let html = '';
            let collections = data.collections;
            let thumbnails = data.thumbnails;

            collections.forEach((element, i) => {
                html += `
                    <div class="col">
                        <a href="galerie.php?id=${ element.id }">
                            <img src="${ thumbnails[i].image }" class="img-fluid" alt="">
                            <h5 class="mt-2">${ element.name }</h5>
                        </a>
                    </div>
                `;
            });

            $("#collections-list").html( html );

            if ( collections.length > 0) {
                $("#collections-list-more").html(`
                    <button class="btn d-flex align-items-center">
                        <i class="fa fa-plus fa-2x"></i>
                        <a href="galerie.php?id=tout" class="ml-2">d'images</a>
                    </button>
                `);
            }
        });
    }
    
    //récupération des images par catégorie
    if ( document.getElementById( "images-list" ) ) {
        if ( catId === "tout" ) {
            //récupération du nombre total de pages par articles
            $.post(galleryEndPoint, function( data ) {
                let html = `
                    <h2 class="py-3">Galerie d'images</h2>
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2">
                `;

                let collections = data.collections;
                let thumbnails = data.thumbnails;
    
                collections.forEach((element, i) => {
                    html += `
                        <div class="col">
                            <a href="galerie.php?id=${ element.id }">
                                <img src="${ thumbnails[i].image }" class="img-fluid" alt="">
                                <h5 class="mt-2">${ element.name }</h5>
                            </a>
                        </div>
                    `;
                });

                html += '</div>';
    
                $("#images-list").html( html );
            });
        } else {
            catId = Number(catId);

            $.post(galleryEndPoint + "images/" + catId, function( data ) {
                let html = `
                    <h2 class="py-3">${ data.name }</h2>
                    <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2">
                `;

                let thumbnails = data.thumbnails;
    
                thumbnails.forEach(element => {
                    html += `
                        <div class="col p-3">
                            <img 
                                src="${ element.image }" 
                                class="img-fluid lightbox" 
                                data-img-path="${ element.image }" 
                                onclick="showLightbox(this)" alt="">
                        </div>
                    `;
                });

                html += '</div>';
    
                $("#images-list").html( html );
            });
        }
    }

    //cacher le lightbox
    $( "#lightbox" ).find( "li" ).click( function() {
        $( "#lightbox"  ).css( "display", "none" );
    });
})