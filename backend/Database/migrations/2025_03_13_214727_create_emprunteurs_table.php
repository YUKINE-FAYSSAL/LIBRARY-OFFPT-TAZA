<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('emprunteurs', function (Blueprint $table) {
            $table->string('Mat')->primary(); // Matricule (clé primaire)
            $table->string('Nom'); // Nom de l'emprunteur
            $table->string('Prenom'); // Prénom de l'emprunteur
            $table->string('CodeFil'); // Code de la filière
            $table->integer('Niveau'); // Niveau de l'emprunteur
            $table->string('Groupe'); // Groupe de l'emprunteur
            $table->string('TypeEmploy'); // Type d'employé
            $table->string('Motpass'); // Mot de passe
            $table->string('Tel'); // Numéro de téléphone
            $table->string('Email'); // Adresse e-mail
            $table->timestamps(); // Colonnes created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('emprunteurs');
    }
};