<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            
            // Authentication fields
            $table->string('numero_stagiaire', 20)->unique();
            $table->string('password');
            $table->rememberToken();
            
            // Personal information
            $table->string('nom', 50);
            $table->string('prenom', 50);
            $table->enum('genre', ['H', 'F', 'U'])->default('U'); // H=Homme, F=Femme, U=Unknown
            $table->date('date_naissance');
            
            // Contact information
            $table->string('adresse')->nullable();
            $table->string('telephone', 20)->nullable();
            $table->string('email')->nullable()->unique();
            
            // Academic information
            $table->string('niveau_scolaire', 100)->nullable();
            $table->string('code_filiere', 50);
            $table->string('filiere', 100);
            $table->string('groupe', 50);
            $table->string('annee_etude', 50);
            
            // Timestamps
            $table->timestamps();
            
            // Indexes
            $table->index('numero_stagiaire');
            $table->index('code_filiere');
            $table->index('groupe');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};