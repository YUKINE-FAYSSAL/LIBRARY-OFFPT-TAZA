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
        Schema::create('besoins', function (Blueprint $table) {
            $table->id(); // Colonne ID auto-incrémentée (équivalent à "Numero")
            $table->string('Titre_Ouvrag'); // Titre de l'ouvrage
            $table->string('Auteur'); // Auteur de l'ouvrage
            $table->date('Edition_Date'); // Date d'édition
            $table->integer('Quantite'); // Quantité disponible
            $table->string('Matricule'); // Matricule (code ou identifiant supplémentaire)
            $table->timestamps(); // Colonnes created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('besoins');
    }
};