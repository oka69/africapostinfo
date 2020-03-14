<div class="container">
    <div class="centered-container card shadow p-5">
        <h1 class="mb-4">Connexion</h1>

        <form method="post" action="home/login">
            <div class="form-group">
                <input type="text" class="form-control" name="username" placeholder="Nom d'utilisateur" required>
            </div>

            <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Mot de passe" required>
            </div>

            <button type="submit" class="btn btn-primary mt-3">
                <li class="fa fa-sign-in"></li> Se connecter
            </button>
        </form>
    </div>
</div>
