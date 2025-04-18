<?php

namespace Database\Seeders;

use App\Models\Emprunteur;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Création d'un emprunteur de test
        Emprunteur::factory()->create([
            'nom' => 'Test User',
            'email' => 'test@example.com',
        ]);

        // Appel des Seeders
        //$this->call(BesoinSeeder::class);
        $this->call(EmprunteurSeeder::class,StagiaireSeeder::class,);
        //$this->call(FiliereSeeder::class);
        //$this->call(InventaireOuvrageSeeder::class); // Appel du InventaireOuvrageSeeder
       //$this->call(PretSeeder::class); // Appel du PretSeeder
       //$this->call(ReservationOuvrageSeeder::class); // Appel du ReservationOuvrageSeeder
        //$this->call(SecteurSeeder::class);
        //$this->call(SousSecteurSeeder::class);
        //$this->call(ExemplaireSeeder::class);
    }
}