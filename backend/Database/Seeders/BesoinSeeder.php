<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BesoinSeeder extends Seeder
{
    public function run()
    {
        DB::table('besoins')->insert([
            [
                'Titre_Ouvrag' => 'Algorithmique', // Correction du nom de la colonne
                'Auteur' => 'Albert',
                'Edition_Date' => '2008-01-01', // Format de date valide (YYYY-MM-DD)
                'Quantite' => 1,
                'Matricule' => '985844',
            ],
            [
                'Titre_Ouvrag' => 'Laravel 9', // Correction du nom de la colonne
                'Auteur' => 'Fred',
                'Edition_Date' => '2020-01-01', // Format de date valide (YYYY-MM-DD)
                'Quantite' => 12,
                'Matricule' => '985844',
            ],
            [
                'Titre_Ouvrag' => 'Ajax', // Correction du nom de la colonne
                'Auteur' => 'Jim',
                'Edition_Date' => '2022-01-01', // Format de date valide (YYYY-MM-DD)
                'Quantite' => 12,
                'Matricule' => '145666',
            ],
        ]);
    }
}