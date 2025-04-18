<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BesoinsController;
use App\Http\Controllers\EmprunteurController;
use App\Http\Controllers\ExemplairesOController;
use App\Http\Controllers\FilièreController;
use App\Http\Controllers\Inventaire_OuvrageController;
use App\Http\Controllers\PretsController;
use App\Http\Controllers\Reservation_ouvrageController;
use App\Http\Controllers\SecteurController;
use App\Http\Controllers\Sous_SecteurController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Public routes
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Protected routes (require authentication)
Route::middleware(['auth:sanctum'])->group(function () {
    // User routes
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    // Filières
    Route::get('/filieres', [FilièreController::class, 'index']);
    Route::get('/filieres/{id}', [FilièreController::class, 'show']);
    
    // Secteurs
    Route::get('/secteurs', [SecteurController::class, 'index']);
    Route::get('/secteurs/{id}', [SecteurController::class, 'show']);
    
    // Sous-secteurs
    Route::get('/sous-secteurs', [Sous_SecteurController::class, 'index']);
    Route::get('/sous-secteurs/{id}', [Sous_SecteurController::class, 'show']);
    
    // Ouvrages
    Route::get('/ouvrages', [Inventaire_OuvrageController::class, 'index']);
    Route::get('/ouvrages/{id}', [Inventaire_OuvrageController::class, 'show']);
    Route::post('/ouvrages', [Inventaire_OuvrageController::class, 'store']);
    Route::put('/ouvrages/{id}', [Inventaire_OuvrageController::class, 'update']);
    Route::delete('/ouvrages/{id}', [Inventaire_OuvrageController::class, 'destroy']);
    
    // Exemplaires
    Route::get('/exemplaires', [ExemplairesOController::class, 'index']);
    Route::get('/exemplaires/{id}', [ExemplairesOController::class, 'show']);
    
    // Emprunteurs
    Route::get('/emprunteurs', [EmprunteurController::class, 'index']);
    Route::get('/emprunteurs/{numero_stagiaire}', [EmprunteurController::class, 'show']);
    
    // Prêts
    Route::get('/prets', [PretsController::class, 'index']);
    Route::post('/prets', [PretsController::class, 'store']);
    Route::put('/prets/{id}', [PretsController::class, 'update']);
    
    // Réservations
    Route::get('/reservations', [Reservation_ouvrageController::class, 'index']);
    Route::post('/reservations', [Reservation_ouvrageController::class, 'store']);
    Route::delete('/reservations/{id}', [Reservation_ouvrageController::class, 'destroy']);
    
    // Besoins
    Route::get('/besoins', [BesoinsController::class, 'index']);
    Route::post('/besoins', [BesoinsController::class, 'store']);
    Route::put('/besoins/{id}', [BesoinsController::class, 'update']);
    Route::delete('/besoins/{id}', [BesoinsController::class, 'destroy']);
});

// Fallback route
Route::fallback(function () {
    return response()->json([
        'message' => 'Endpoint not found'
    ], 404);
});