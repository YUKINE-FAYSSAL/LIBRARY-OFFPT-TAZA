<?php

namespace App\Http\Controllers;

use App\Models\Emprunteur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class EmprunteurController extends Controller
{
    /**
     * Affiche la liste des emprunteurs.
     */
    public function index()
    {
        $emprunteurs = Emprunteur::all();
        return response()->json($emprunteurs);
    }

    /**
     * Affiche les détails pour la création (en JSON).
     */
    public function create()
    {
        return response()->json(['message' => 'Endpoint pour créer un emprunteur']);
    }

    /**
     * Enregistre un nouvel emprunteur.
     */
    public function store(Request $request)
    {
        $request->validate([
            'Nom' => 'required|string|max:255',
            'Prenom' => 'required|string|max:255',
            'CodeFil' => 'required|string|max:10',
            'Niveau' => 'required|string|max:50',
            'Groupe' => 'required|string|max:50',
            'TypeEmployé' => 'required|in:stagiaire,formateur',
            'Motpass' => 'required|string|min:8',
            'Tel' => 'required|string|max:15',
            'Email' => 'required|email|unique:emprunteurs,Email',
        ]);

        $verificationToken = Str::random(64);

        $emprunteur = Emprunteur::create([
            'Nom' => $request->Nom,
            'Prenom' => $request->Prenom,
            'CodeFil' => $request->CodeFil,
            'Niveau' => $request->Niveau,
            'Groupe' => $request->Groupe,
            'TypeEmployé' => $request->TypeEmployé,
            'Motpass' => Hash::make($request->Motpass),
            'Tel' => $request->Tel,
            'Email' => $request->Email,
            'verification_token' => $verificationToken,
        ]);

        Mail::raw("Cliquez sur ce lien pour vérifier votre email: ".url("/api/verify-email/{$verificationToken}"), function ($message) use ($emprunteur) {
            $message->to($emprunteur->Email);
            $message->subject('Vérification de votre adresse e-mail');
        });

        return response()->json(['message' => 'Emprunteur créé avec succès. Veuillez vérifier votre email.', 'emprunteur' => $emprunteur]);
    }

    /**
     * Vérifie l'email de l'utilisateur.
     */
    public function verifyEmail($token)
    {
        $emprunteur = Emprunteur::where('verification_token', $token)->first();

        if (!$emprunteur) {
            return response()->json(['message' => 'Token de vérification invalide'], 404);
        }

        $emprunteur->verification_token = null;
        $emprunteur->email_verified_at = now();
        $emprunteur->save();

        return response()->json(['message' => 'Email vérifié avec succès']);
    }

    /**
     * Affiche un emprunteur spécifique.
     */
    public function show(string $id)
    {
        $emprunteur = Emprunteur::findOrFail($id);
        return response()->json($emprunteur);
    }

    /**
     * Informations pour l'édition d'un emprunteur (en JSON).
     */
    public function edit(string $id)
    {
        $emprunteur = Emprunteur::findOrFail($id);
        return response()->json(['message' => 'Endpoint pour éditer un emprunteur', 'emprunteur' => $emprunteur]);
    }

    /**
     * Met à jour un emprunteur spécifique.
     */
    public function update(Request $request, string $id)
    {
        $emprunteur = Emprunteur::findOrFail($id);

        $request->validate([
            'Nom' => 'string|max:255',
            'Prenom' => 'string|max:255',
            'Tel' => 'string|max:15',
            'Email' => 'email|unique:emprunteurs,Email,' . $id,
        ]);

        $emprunteur->update($request->all());

        return response()->json(['message' => 'Emprunteur mis à jour avec succès', 'emprunteur' => $emprunteur]);
    }

    /**
     * Supprime un emprunteur spécifique.
     */
    public function destroy(string $id)
    {
        Emprunteur::findOrFail($id)->delete();
        return response()->json(['message' => 'Emprunteur supprimé avec succès']);
    }

    /**
     * Gère l'authentification de l'emprunteur.
     */
    public function login(Request $request)
    {
        $request->validate([
            'Email' => 'required|email',
            'Motpass' => 'required|string',
        ]);

        $emprunteur = Emprunteur::where('Email', $request->Email)->first();

        if (!$emprunteur || !Hash::check($request->Motpass, $emprunteur->Motpass)) {
            return response()->json(['message' => 'Identifiants invalides'], 401);
        }

        return response()->json(['message' => 'Connexion réussie', 'emprunteur' => $emprunteur]);
    }

    /**
     * Déconnecte l'utilisateur.
     */
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Déconnexion réussie']);
    }
}
