<?php
//insertion du template header
include_once "templates/header.php";
?>

    <!-- image d'entête -->
    <div id="header-img" class="container mt-3 mt-lg-5">
        <img src="https://via.placeholder.com/1000x300" class="img-fluid" alt="">
    </div>

    <!-- ligne de blocs -->
    <section class="container mt-5">
        <div class="row">
            <div class="col-lg-8 col-12">
                <!-- article mis en avant (à la une) -->
                <div id="sticky-post" class="p-3 border border-dark rounded"></div>
            </div>

            <div class="col-lg-4 col-12 mt-lg-0 mt-5">
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
            </div>
        </div>
    </section>

    <!-- ligne de blocs -->
    <section class="container mt-5">
        <div class="row">
            <!-- articles de la rubrique politique -->
            <div class="col-lg-4 col-12">
                <div id="politics-posts" class="p-3 border border-dark rounded"></div>
            </div>

            <!-- articles de la rubrique business -->
            <div class="col-lg-4 col-12 mt-5 mt-lg-0">
                <div id="business-posts" class="p-3 border border-dark rounded"></div>
            </div>

            <div class="col-lg-4 col-12 mt-5 mt-lg-0">
                <div class="p-3 border border-dark rounded">
                    <h4>Post TV</h4>
                    <iframe class="img-fluid w-100" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"></iframe>
                </div>
            </div>
        </div>
    </section>

    <!-- ligne de blocs -->
    <section class="container mt-5">
        <div class="row">
            <div class="col-lg-8 col-12">
                <div class="row mb-5">
                    <div class="col">
                        <div class="p-3 border border-dark rounded">
                            <h4 class="pb-5">BLOC</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <!-- articles de la rubrique culture -->
                        <div id="culture-posts" class="p-3 border border-dark rounded"></div>
                    </div>

                    <div class="col mt-5 mt-lg-0 mt-md-0">
                        <!-- articles de la rubrique sport -->
                        <div id="sport-posts" class="p-3 border border-dark rounded"></div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-12 mt-5 mt-lg-0">
                <div class="p-3 border border-dark rounded">
                    <h4>Agenda national</h4>
                    <h4 class="mt-5">Agenda international</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- ligne de blocs -->
    <section class="container mt-5">
        <div class="p-3 border border-dark rounded">
            <h4 class="mb-3">Images à la une</h4>
            
            <!-- liste des images à la une -->
            <div id="images-list" class="row row-cols-1 row-cols-lg-5 row-cols-md-3"></div>

            <div class="d-flex align-items-center mt-3">
                <button class="btn d-flex align-items-center">
                    <i class="fa fa-plus fa-2x"></i>
                    <a href="gallerie.php?id=toute" class="ml-2">d'images</a>
                </button>
            </div>
        </div>
    </section>

     <!-- ligne de blocs -->
     <section class="container mt-5">
        <div class="row">
            <div class="col-lg-4 col-12 mb-5">
                <div class="p-3 border border-dark rounded">
                    <h4>Agenda national</h4>
                </div>
            </div>

            <div class="col-lg-8 col-12">
                <div class="row">
                    <div class="col">
                        <!-- articles de la rubrique technologie -->
                        <div id="tech-posts" class="p-3 border border-dark rounded"></div>
                    </div>

                    <div class="col mt-5 mt-lg-0 mt-md-0">
                        <!-- articles de la rubrique monde -->
                        <div id="world-posts" class="p-3 border border-dark rounded"></div>
                    </div>
                </div>

                <div class="row mt-5">
                    <div class="col">
                        <div class="p-3 border border-dark rounded">
                            <h4 class="pb-5">BLOC</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- section newsletter -->
    <section class="container my-5">
        <form>
            <div class="form-row">
                <div class="col-12 col-lg-9 col-md-7">
                    <input class="form-control" type="email" placeholder="Recevez chaque jour les titres à la Une">
                </div>
    
                <div class="col-12 col-lg-3 col-md-5 mt-3 mt-lg-0 mt-md-0">
                    <button class="btn btn-link" type="submit">Je m'inscris</button>
                </div>
            </div>
        </form>
    </section>
    
<?php
//insertion du template footer
include_once "templates/footer.php";
?>