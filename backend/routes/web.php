<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Besoins;
use App\Http\Controllers\EmprunteurController;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('welcome');
});

//Route::get('/ABC', $bc->index());
Route::get('/ABC', [Besoins::class, 'index']);


Route::prefix('/api/emprunteurs')->group(function () {
    Route::get('/All', [EmprunteurController::class, 'index']);

    Route::get('/', [EmprunteurController::class, 'create']);               // Liste des emprunteurs
    Route::get('/a', [EmprunteurController::class, 'store']);
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
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');