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

                    <div class="row d-flex mt-5 mb-3">
                        <div class="col-lg-6 col-md-6">
                            <button class="btn btn-link">Commentaires</button>
                        </div>

                        <div class="col-lg-6 col-md-6 mt-2 mt-md-0 mt-lg-0 align-items-end">
                            <span class="mr-2">Partager:</span>

                            <a class="btn btn-link">
                                <li class="fa fa-facebook text-white"></li>
                            </a>

                            <a class="btn btn-link">
                                <li class="fa fa-google-plus text-white"></li>
                            </a>

                            <a class="btn btn-link">
                                <li class="fa fa-twitter text-white"></li>
                            </a>

                            <a class="btn btn-link">
                                <li class="fa fa-linkedin text-white"></li>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="my-5 p-3 border border-dark rounded">
                    <h4 class="pb-5">BLOC</h4>
                </div>
            </div>

            <div class="col-lg-4 col-12">
                <div class="p-3 border border-dark rounded">
                    <!-- onglets de navigation -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#recent-posts" role="tab" aria-selected="true">+ récents</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#most-read" role="tab" aria-selected="false">+ lus</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#most-shared" role="tab" aria-selected="false">+ partagés</a>
                        </li>
                    </ul>
    
                    <div class="tab-content">
                        <!-- articles les plus récents -->
                        <div class="tab-pane show active mt-3" id="recent-posts" role="tabpanel"></div>
    
                        <!-- articles les plus lus -->
                        <div class="tab-pane mt-3" id="most-read" role="tabpanel"></div>

                        <!-- articles les plus partagés -->
                        <div class="tab-pane mt-3" id="most-shared" role="tabpanel"></div>
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