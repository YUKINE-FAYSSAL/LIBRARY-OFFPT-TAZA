<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Inventaire_Ouvrage;

class InventaireOuvrageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $ouvrages = [
            [
                'cote' => 'B-1-1',
                'num_enreg' => '426//95',
                'num_l_j' => null,
                'titre_ouvrage' => 'Initiation aux techniques industrielles',
                'auteur' => 'Auteur inconnu',
                'edition_date' => '2008',
                'support_accomp' => null,
                'quantite' => 1,
                'recu_le' => now(), // Date actuelle
                'origine' => 'Donation',
                'libelle' => null,
                'code_secteur' => 'B',
                'observations' => 'Ouvrage en bon état',
                'image_path' => null,
                'file_path' => null,
            ],
            [
                'cote' => 'B-1-10',
                'num_enreg' => '1608/85',
                'num_l_j' => null,
                'titre_ouvrage' => 'Dossier de technologie de construction',
                'auteur' => 'Auteur inconnu',
                'edition_date' => '2010',
                'support_accomp' => null,
                'quantite' => 1,
                'recu_le' => now(),
                'origine' => 'Achat',
                'libelle' => null,
                'code_secteur' => 'B',
                'observations' => 'Ouvrage légèrement usé',
                'image_path' => null,
                'file_path' => null,
            ],
            [
                'cote' => 'B-1-11',
                'num_enreg' => '6682/91',
                'num_l_j' => null,
                'titre_ouvrage' => 'Bâtiment élément de construction',
                'auteur' => 'Auteur inconnu',
                'edition_date' => '2012',
                'support_accomp' => null,
                'quantite' => 1,
                'recu_le' => now(),
                'origine' => 'Donation',
                'libelle' => null,
                'code_secteur' => 'B',
                'observations' => 'Ouvrage en excellent état',
                'image_path' => null,
                'file_path' => null,
            ],
            // Ajoutez d'autres ouvrages ici...
        ];

        foreach ($ouvrages as $ouvrage) {
            Inventaire_Ouvrage::create($ouvrage);
        }
    }
}