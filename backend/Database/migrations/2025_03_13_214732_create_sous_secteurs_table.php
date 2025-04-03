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
        Schema::create('sous_secteurs', function (Blueprint $table) {
            $table->id(); // ID unique pour chaque sous-secteur
            $table->string('libelless'); // Libellé du sous-secteur (correspond à "Libelless" dans l'image)
            $table->string('code_sectet'); // Code du secteur associé (correspond à "CodeSectet" dans l'image)
            $table->text('sujet')->nullable(); // Sujet ou description supplémentaire (correspond à "Sujet" dans l'image)
            $table->timestamps(); // Timestamps pour created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sous_secteurs');
    }
};