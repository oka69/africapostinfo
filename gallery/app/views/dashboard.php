<div class="container w-75 py-5">
    <div class="card shadow mt-5 p-5">
        <div class="text-center">
            <h3 class="py-3">Galerie d'images</h3>
            <?= Session::get("admin") ?>: <a href="home/logout">Déconnexion</a>
        </div>

        <div class="d-flex justify-content-center my-5">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#add-collection">
                Créer une collection
            </button>
            
            <button type="button" class="btn btn-primary ml-3" data-toggle="modal" data-target="#add-images">
                Ajouter des images
            </button>
        </div>

        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Nom de la collection</th>
                    <th scope="col">Images</th>
                    <th scope="col"></th>
                </tr>
            </thead>

            <tbody>
                <?php foreach( $collections as $collection ) { ?>

                <tr>
                    <td><?= $collection['name'] ?></td>

                    <td>
                        <?php
                        
                        $images = explode(",", $collection['images']);
                        
                        foreach( $images as $image ) { ?>

                            <img src="<?= $image ?>" class="img-fluid mb-2" width="150" alt="">
                        
                        <?php } ?>
                    </td>

                    <td><a class="remove-collection" data-collection-id="<?= $collection['id'] ?>" href="#">Supprimer la collection</a></td>
                </tr>

                <?php } ?>
            </tbody>
        </table>

        <!-- <nav class="mt-5 mx-auto">
            <ul class="pagination">
                <a class="page-link" href="#">
                    Page précédente
                </a>

                <a class="page-link" href="#">1</a>
                <a class="page-link" href="#">2</a>
                <a class="page-link" href="#">3</a>

                <a class="page-link" href="#">
                    Page suivante
                </a>
            </ul>
        </nav> -->
    </div>
</div>

<!-- formulaire de création de collection -->
<div class="modal fade" id="add-collection" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Créer une collection d'images</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <form id="add-collection-form">
                <div class="modal-body">
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" placeholder="Nom de la collection" required>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Créer la collection</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!-- formulaire d'ajout d'images -->
<div class="modal fade" id="add-images" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Ajouter des images à une collection</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <form id="add-images-form" enctype="multipart/form-data">
                <div class="modal-body">
                    <div class="form-group">
                        <select name="collection" id="collection-list" class="custom-select">
                            <option value="Aucune" selected>Sélectionner une collection</option>
                            
                            <?php foreach( $collections as $collection ) { ?>

                            <option value="<?= stripslashes($collection['name']) ?>" data-collection-id="<?= $collection['id'] ?>">
                                <?= stripslashes($collection['name']) ?>
                            </option>

                            <?php } ?>
                        </select>
                    </div>

                    <input type="file" name="images[]" class="form-control-file" required multiple>
                </div>

                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Ajouter les images</button>
                </div>
            </form>
        </div>
    </div>
</div>
