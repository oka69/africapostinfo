<?php
//récupération de l'identifiant de l'article
//afficher la page uniquement s'il existe un identifant d'article
if ( isset( $_GET['id'] ) && !empty( $_GET['id'] ) ) {
    $post_id = $_GET['id'];

    //insertion du template header
    include_once "templates/header.php";
?>

<script>
    //définition d'une variable globale de l'identifiant de l'article
    var postId = <?php echo $post_id; ?>;
</script>

    <!-- bloc d'article -->
    <section class="container mt-5">
        <div class="row">
            <div class="col-lg-8 col-12">
                <div class="p-3 border border-dark rounded">
                    <!-- contenu de l'article -->
                    <div id="post-content"></div>

                    <div class="d-flex justify-content-start py-2">
                        <div class="d-flex align-items-center">
                            <span class="mr-2">Partager l'article:</span>

                            <a id="facebook-share" class="btn btn-link mr-2" href="#" target="_blank">
                                <li class="fa fa-facebook text-white"></li>
                            </a>
                            <a id="twitter-share" class="btn btn-link mr-2" href="#" target="_blank">
                                <li class="fa fa-twitter text-white"></li>
                            </a>
                            <a id="linkedin-share" class="btn btn-link" href="#" target="_blank">
                                <li class="fa fa-linkedin text-white"></li>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="my-5 p-3 border border-dark rounded">
                    <h4 class="mb-3">Articles similaires</h4>

                    <!-- liste des articles similaires -->
                    <div id="similar-posts" class="row row-cols-1 row-cols-lg-3 row-cols-md-2"></div>

                    <!-- bouton voir plus d'articles similaires-->
                    <div id="similar-posts-more" class="d-flex align-items-center mt-3"></div>
                </div>
            </div>

            <div class="col-lg-4 col-12">
                <div class="p-3 border border-dark rounded">
                    <!-- onglets de navigation -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#most-recent" role="tab" aria-selected="true">+ Récents</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#most-viewed" role="tab" aria-selected="false">+ Lus</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#most-shared" role="tab" aria-selected="false">+ Partagés</a>
                        </li>
                    </ul>
    
                    <div class="tab-content">
                        <!-- articles les plus récents -->
                        <div class="tab-pane show active mt-3" id="most-recent" role="tabpanel"></div>
    
                        <!-- articles les plus lus -->
                        <div class="tab-pane mt-3" id="most-viewed" role="tabpanel"></div>

                        <!-- articles les plus partagés -->
                        <div class="tab-pane mt-3" id="most-shared" role="tabpanel"></div>
                    </div>

                    <div class="d-flex align-items-center mt-2">
                        <button class="btn d-flex align-items-center">
                            <i class="fa fa-plus fa-2x"></i>
                            <a href="rubrique.php?id=tout" class="ml-2">d'articles</a>
                        </button>
                    </div>
                </div>

                <div class="mt-5 p-3 border border-dark rounded">
                    <h2>Post TV</h2>
                    <iframe class="img-fluid w-100" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"></iframe>
                </div>

                <div class="mt-5 p-3 border border-dark rounded">
                    <h4>Agenda national</h4>
                    <h4 class="mt-5">Agenda international</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- image d'entête -->
    <div id="header-img" class="container my-5">
        <img src="https://via.placeholder.com/1000x300" class="img-fluid" alt="">
    </div>

<?php
    //insertion du template footer
    include_once "templates/footer.php";
} else {
    //retour à la page d'accueil
    header("Location: index.php");
}
?>