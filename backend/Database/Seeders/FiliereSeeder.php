<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Filiere;

class FiliereSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $filieres = [
            ['CodeFil' => 'ATV', 'LibelleFil' => null],
            ['CodeFil' => 'ESA', 'LibelleFil' => null],
            ['CodeFil' => 'kik', 'LibelleFil' => 'kiki'],
            ['CodeFil' => 'mpm', 'LibelleFil' => 'mpm'],
            ['CodeFil' => 'nhg', 'LibelleFil' => 'bhg'],
            ['CodeFil' => 'TCE', 'LibelleFil' => null],
            ['CodeFil' => 'TDI', 'LibelleFil' => 'Techniques de Developpement Informatique'],
            ['CodeFil' => 'TE', 'LibelleFil' => null],
            ['CodeFil' => 'TRI', 'LibelleFil' => 'Techniques de Réseaux Informatiques'],
            ['CodeFil' => 'TSB', 'LibelleFil' => null],
            ['CodeFil' => 'TSGE', 'LibelleFil' => null],
            ['CodeFil' => 'TSGO', 'LibelleFil' => null],
            ['CodeFil' => 'TSSD', 'LibelleFil' => null],
        ];

        foreach ($filieres as $filiere) {
            Filiere::create($filiere);
        }
    }
}