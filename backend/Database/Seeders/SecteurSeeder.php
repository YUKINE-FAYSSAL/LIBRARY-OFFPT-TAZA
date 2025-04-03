<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Secteur;

class SecteurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $secteurs = [
            ['code_secteur' => 'B', 'libelle' => 'BTP'],
            ['code_secteur' => 'C', 'libelle' => 'Tertiaire'],
            ['code_secteur' => 'D', 'libelle' => 'Divers'],
            ['code_secteur' => 'I', 'libelle' => 'Industriel'],
        ];

        foreach ($secteurs as $secteur) {
            Secteur::create($secteur);
        }
    }
}