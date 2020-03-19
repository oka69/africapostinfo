<!DOCTYPE html>
<html lang="fr-FR">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- librairie css -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

        <!-- feuille de style personnalisée -->
        <link rel="stylesheet" href="public/assets/css/style.css">

        <!-- librairie fontawesome -->
        <script src="https://use.fontawesome.com/5d5817c157.js"></script>

        <title>AFRICAPOST</title>
    </head>
    <body>
        <!-- barre d'entête -->
        <div id="top-bar" class="py-2">
            <div class="container-fluid d-flex align-items-center">
                <div id="flash-infos" class="flex-fill d-none d-lg-flex d-md-flex">
                    <span class="btn rounded-left text-white">ALERT</span>
                    <div class="border border-dark rounded-right d-flex align-items-center flex-fill">
                        <span id="flash-infos-text" class="ml-2">
                            Bloc des Flash info en bande circulante
                        </span>
                    </div>
                </div>

                <div class="d-flex align-items-center flex-grow-1 flex-md-grow-0 flex-lg-grow-0">
                    <div class="input-group pl-0 pl-md-3 pl-lg-3">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <i class="fa fa-search"></i>
                            </div>
                        </div>
                        <input type="search" class="form-control" id="search" placeholder="Rechercher">
                    </div>

                    <li class="fa fa-user fa-2x pl-3"></li>
                </div>
            </div>
        </div>

        <!-- section d'entête -->
        <header>
            <div class="container-fluid">
                <div id="banner" class="row d-none d-lg-flex d-md-none justify-content-between align-items-center flex-fill">
                    <div class="col-4">
                        <img src="public/assets/img/logo.jpg" class="img-fluid" alt="Logo AfricaPost">
                    </div>

                    <div class="col-6">
                        <img src="https://via.placeholder.com/900x290" class="img-fluid" alt="">
                    </div>
                    
                    <div class="col-2 text-center">
                        <a href="carte.php">
                            <img src="public/assets/img/carte_afrique.png" 
                                class="img-fluid p-3" alt="Pays d'Afrique" title="Carte d'Afrique">
                        </a>
                    </div>
                </div>

                <nav class="navbar navbar-expand-lg">
                    <!-- block d'entête pour mobile -->
                    <div class="row align-items-center justify-content-between navbar-toggler flex-fill">
                        <img src="public/assets/img/logo_mini.jpg" class="img-fluid" alt="Logo AfricaPost">

                        <!-- bouton burger -->
                        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                            <li class="fa fa-bars" style="font-size: 2rem;"></li>
                        </button>
                    </div>

                    <!-- menu de navigation -->
                    <div class="collapse navbar-collapse" id="navbar">
                        <ul class="navbar-nav text-uppercase">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Accueil</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="rubrique.php?id=politique">Politique</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="rubrique.php?id=afrique">Afrique</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="rubrique.php?id=monde">Monde</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="rubrique.php?id=business">Business</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="rubrique.php?id=sport">Sport</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="rubrique.php?id=culture">Culture</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="rubrique.php?id=technologie">Technologie</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">AfriqueTV</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
