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
        Schema::create('secteurs', function (Blueprint $table) {
            $table->id(); // ID unique pour chaque secteur
            $table->string('code_secteur')->unique(); // Code du secteur (par exemple, "B", "C", etc.)
            $table->string('libelle'); // Libellé du secteur (par exemple, "BTP", "Tertiaire", etc.)
            $table->timestamps(); // Timestamps pour created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('secteurs');
    }
};