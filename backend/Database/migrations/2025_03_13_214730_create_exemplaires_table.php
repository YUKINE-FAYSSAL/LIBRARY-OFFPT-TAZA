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
        Schema::create('exemplaireso', function (Blueprint $table) {
            $table->string('CoteExo')->primary(); // Code unique de l'exemplaire (clé primaire)
            $table->string('Cote'); // Code de l'ouvrage associé
            $table->timestamps(); // Colonnes created_at et updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('exemplaireso');
    }
};