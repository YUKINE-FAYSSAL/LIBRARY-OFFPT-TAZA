<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SousSecteur;

class SousSecteurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sousSecteurs = [
            ['libelless' => 1, 'code_sectet' => 'B', 'sujet' => 'BATIMENT'],
            ['libelless' => 1, 'code_sectet' => 'C', 'sujet' => 'Commerce'],
            ['libelless' => 1, 'code_sectet' => 'D', 'sujet' => 'Divers'],
            ['libelless' => 1, 'code_sectet' => 'I', 'sujet' => 'Electronique'],
            ['libelless' => 2, 'code_sectet' => 'C', 'sujet' => 'Comptabilité'],
            ['libelless' => 2, 'code_sectet' => 'I', 'sujet' => 'Electricité'],
            ['libelless' => 3, 'code_sectet' => 'C', 'sujet' => 'Gestion d\'entreprise'],
            ['libelless' => 3, 'code_sectet' => 'I', 'sujet' => 'CONSTRUCTION METALIQUE'],
            ['libelless' => 4, 'code_sectet' => 'C', 'sujet' => 'Droit'],
            ['libelless' => 4, 'code_sectet' => 'I', 'sujet' => 'MECANIQUE AUTO'],
            ['libelless' => 5, 'code_sectet' => 'C', 'sujet' => 'Ecosujetie'],
            ['libelless' => 7, 'code_sectet' => 'C', 'sujet' => 'Qualité'],
            ['libelless' => 8, 'code_sectet' => 'C', 'sujet' => 'Secrétariat'],
            ['libelless' => 9, 'code_sectet' => 'C', 'sujet' => 'Informatique'],
            ['libelless' => 10, 'code_sectet' => 'C', 'sujet' => 'NTIC'],
            ['libelless' => 11, 'code_sectet' => 'C', 'sujet' => 'Communication'],
            ['libelless' => 12, 'code_sectet' => 'C', 'sujet' => 'PEDAGOGIQUE'],
            ['libelless' => 13, 'code_sectet' => 'C', 'sujet' => 'MATH'],
            ['libelless' => 14, 'code_sectet' => 'C', 'sujet' => 'Administration'],
            ['libelless' => 15, 'code_sectet' => 'I', 'sujet' => 'Textile'],
            ['libelless' => 16, 'code_sectet' => 'I', 'sujet' => 'Hydraulique'],
            ['libelless' => 17, 'code_sectet' => 'I', 'sujet' => 'Pneumatique'],
        ];
foreach ($sousSecteurs as $sousSecteur) {
            SousSecteur::create($sousSecteur);
        }
    }
}