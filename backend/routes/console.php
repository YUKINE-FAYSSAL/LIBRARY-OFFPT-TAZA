<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();
use App\Http\Controllers\EmprunteurController;

Route::prefix('emprunteurs')->group(function () {
    Route::get('/', [EmprunteurController::class, 'index']);               // Liste des emprunteurs
    Route::post('/', [EmprunteurController::class, 'store']);              // Créer un nouvel emprunteur
    Route::get('/{id}', [EmprunteurController::class, 'show']);            // Afficher un emprunteur
    Route::put('/{id}', [EmprunteurController::class, 'update']);          // Mettre à jour un emprunteur
    Route::delete('/{id}', [EmprunteurController::class, 'destroy']);      // Supprimer un emprunteur
    Route::get('/{id}/edit', [EmprunteurController::class, 'edit']);       // Informations pour l'édition
});

// Authentification
Route::post('/login', [EmprunteurController::class, 'login']);             // Connexion
Route::post('/logout', [EmprunteurController::class, 'logout']);           // Déconnexion

// Vérification d'e-mail
Route::get('/verify-email/{token}', [EmprunteurController::class, 'verifyEmail']); // Vérification email
