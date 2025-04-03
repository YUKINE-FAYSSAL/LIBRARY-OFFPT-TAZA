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
        Schema::create('reservation_ouvrage', function (Blueprint $table) {
            $table->id(); // ID unique pour chaque réservation
            $table->string('mat'); // Matricule de l'emprunteur
            $table->string('coteEXO'); // Cote de l'exemplaire
            $table->date('dateReserv'); // Date de réservation
            $table->timestamps(); // Colonnes created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservation_ouvrage');
    }
};