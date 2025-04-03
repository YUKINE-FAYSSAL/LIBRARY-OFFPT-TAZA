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
        Schema::create('inventaire_ouvrages', function (Blueprint $table) {
            $table->id(); // ID unique pour chaque ouvrage
            $table->string('cote')->nullable(); // Cote de l'ouvrage
            $table->string('num_enreg')->nullable(); // Numéro d'enregistrement
            $table->string('num_l_j')->nullable(); // Numéro L/J
            $table->string('titre_ouvrage'); // Titre de l'ouvrage
            $table->string('auteur')->nullable(); // Auteur de l'ouvrage
            $table->string('edition_date')->nullable(); // Date d'édition
            $table->string('support_accomp')->nullable(); // Support accompagnant
            $table->integer('quantite')->default(1); // Quantité disponible
            $table->dateTime('recu_le')->nullable(); // Date de réception
            $table->string('origine')->nullable(); // Origine de l'ouvrage
            $table->integer('libelle')->nullable(); // Libellé
            $table->string('code_secteur')->nullable(); // Code secteur
            $table->text('observations')->nullable(); // Observations
            $table->string('image_path')->nullable(); // Chemin de l'image associée
            $table->string('file_path')->nullable(); // Chemin du fichier associé
            $table->timestamps(); // Timestamps pour created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inventaire_ouvrages');
    }
};