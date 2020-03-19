<?php
//récupération de l'identifiant de la rubrique
//afficher la page uniquement s'il existe un identifant de rubrique
if ( isset( $_GET['id'] ) && !empty( $_GET['id'] ) ) {
    $cat_id = $_GET['id'];

    //récupération de la page
    $page_id = isset( $_GET['page'] ) ? $_GET['page'] : 1;

    //insertion du template header
    include_once "templates/header.php";
?>

<script>
    //définition des variables globales de l'identifiant de la rubrique et de celui la page
    var catId = "<?php echo $cat_id; ?>";
    var pageId = <?php echo $page_id; ?>;
</script>

    <!-- image d'entête -->
    <div id="header-img" class="container mt-3 mt-lg-5">
        <img src="https://via.placeholder.com/1000x300" class="img-fluid" alt="">
    </div>

    <!-- bloc d'article -->
    <section class="container mt-5">
        <div class="row">
            <!-- liste des articles de la rubrique -->
            <div id="posts-list" class="col-lg-8 col-12"></div>

            <div class="col-lg-4 col-12 mt-5 mt-lg-0">
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
                    <h4>Post TV</h4>
                    <iframe class="img-fluid w-100" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"></iframe>
                </div>

                <div class="mt-5 p-3 border border-dark rounded">
                    <h4>Agenda national</h4>
                    <h4 class="mt-5">Agenda international</h4>
                </div>
            </div>
        </div>
    </section>

<?php
    //insertion du template footer
    include_once "templates/footer.php";
} else {
    //retour à la page d'accueil
    header("Location: index.php");
}
?>