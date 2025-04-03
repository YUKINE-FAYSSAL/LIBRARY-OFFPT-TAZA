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
        Schema::create('prets', function (Blueprint $table) {
            $table->id(); // ID unique pour chaque prêt
            $table->string('n_prets')->unique(); // Numéro de prêt (unique)
            $table->string('matricule'); // Matricule de l'emprunteur
            $table->string('cote_exo'); // Cote de l'exemplaire
            $table->date('date_sortie'); // Date de sortie
            $table->string('prets'); // Description du prêt
            $table->string('reservation_ouvrage'); // Référence à la réservation
            $table->string('secteur'); // Secteur
            $table->string('sous_secteur'); // Sous-secteur
            $table->timestamps(); // Colonnes created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prets');
    }
};