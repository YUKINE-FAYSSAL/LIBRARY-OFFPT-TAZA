<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Prets;

class PretSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $prets = [
            [
                'n_prets' => 'PRET001', // Numéro de prêt (unique)
                'matricule' => 'MAT001', // Matricule de l'emprunteur
                'cote_exo' => 'COTE001', // Cote de l'exemplaire
                'date_sortie' => '2023-10-01', // Date de sortie
                'prets' => 'Pret1', // Description du prêt
                'reservation_ouvrage' => 'Ouvrage1', // Référence à la réservation
                'secteur' => 'SecteurA', // Secteur
                'sous_secteur' => 'SousSecteurA', // Sous-secteur
            ],
            [
                'n_prets' => 'PRET002',
                'matricule' => 'MAT002',
                'cote_exo' => 'COTE002',
                'date_sortie' => '2023-10-02',
                'prets' => 'Pret2',
                'reservation_ouvrage' => 'Ouvrage2',
                'secteur' => 'SecteurB',
                'sous_secteur' => 'SousSecteurB',
            ],
            [
                'n_prets' => 'PRET003',
                'matricule' => 'MAT003',
                'cote_exo' => 'COTE003',
                'date_sortie' => '2023-10-03',
                'prets' => 'Pret3',
                'reservation_ouvrage' => 'Ouvrage3',
                'secteur' => 'SecteurC',
                'sous_secteur' => 'SousSecteurC',
            ],
            // Ajoutez d'autres prêts ici...
        ];

        foreach ($prets as $pret) {
            Prets::create($pret);
        }
    }
}