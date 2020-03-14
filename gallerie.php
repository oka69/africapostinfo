<?php
//récupération de l'identifiant de la catégorie des images
//afficher la page uniquement s'il existe un identifant de catégorie
if ( isset( $_GET['id'] ) && !empty( $_GET['id'] ) ) {
    $cat_id = $_GET['id'];

    //récupération de la page
    $page_id = isset( $_GET['page'] ) ? $_GET['page'] : 1;

    //insertion du template header
    include_once "templates/header.php";
?>

<script>
    //définition d'une variable globale de l'identifiant de la catégorie des images
    var catId = "<?php echo $cat_id; ?>";
    var pageId = <?php echo $page_id; ?>;
</script>

    <!-- bloc d'article -->
    <section class="container mt-5">
        <div class="row">
            <div class="col-lg-8 col-12">
                <div class="p-3 mb-5 border border-dark rounded">
                    <!-- liste des images de la catégorie -->
                    <div id="_images-list"></div>
                </div>
                
                <nav class="mt-5">
                    <ul class="pagination"></ul>
                </nav>
            </div>

            <div class="col-lg-4 col-12 mt-5 mt-lg-0">
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

    <div id="lightbox">
        <div class="container">
            <div id="lightbox-header p-2">
                <li class="fa fa-times fa-3x text-white" title="Fermer" style="cursor: pointer"></li>
            </div>
            
            <div class="text-center">
                <img id="lightbox-image">
            </div>
        </div>
    </div>

<?php
    //insertion du template footer
    include_once "templates/footer.php";
} else {
    //retour à la page d'accueil
    header("Location: index.php");
}
?>