$(function() {
    //ajout et suppression des collections
    if ( document.getElementById( "add-collection-form" ) ) {
        $( "#add-collection-form" ).submit(function(e) {
            e.preventDefault();

            $.ajax({
                url: "dashboard/add_collection",
                type: "post",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                success: function() {
                    window.location.href = "/gallery/dashboard";
                }
            });
        });

        $(".remove-collection").click(function(e) {
            e.preventDefault();

            let collectionId = $(this).data( "collectionId" );

            if (window.confirm("Etes-vous sûr de vouloir supprimer cette collection?")) {
                $.post( "dashboard/remove_collection/" + collectionId, function() {
                    window.location.href = "/gallery/dashboard";
                });
            }
        });
    }

    //ajout des images à une collection
    if ( document.getElementById( "add-images-form" ) ) {
        $( "#add-images-form" ).submit(function(e) {
            e.preventDefault();

            let collections = document.getElementById("collection-list");
            let options = collections.options;
            let i = collections.selectedIndex;
            let collectionId = options[i].dataset.collectionId;

            if ( collectionId === undefined ) {
                alert("Veuillez sélectionner une collection");
            } else {
                $.ajax({
                    url: "dashboard/update_collection/" + collectionId,
                    type: "post",
                    data: new FormData(this),
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function() {
                        window.location.href = "/gallery/dashboard";
                    }
                });
            }
        });
    }
});
