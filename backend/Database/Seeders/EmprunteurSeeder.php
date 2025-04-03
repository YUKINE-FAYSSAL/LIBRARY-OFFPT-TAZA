<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmprunteurSeeder extends Seeder
{
    public function run()
    {
        DB::table('emprunteurs')->insert([
            [
                'Mat' => '1522',
                'Nom' => 'TAIS',
                'Prenom' => 'AD',
                'CodeFil' => 'TDI',
                'Niveau' => '2 B',
                'Groupe' => 'Formateur',
                'TypeEmploy' => 146522,
                'Motpass' => '06988',
                'Tel' => '123456',
                'Email' => 'gth@yahoo.fr',
            ],
            [
                'Mat' => '9999',
                'Nom' => 'salhi',
                'Prenom' => 'fouad',
                'CodeFil' => 'TRI',
                'Niveau' => '1 A',
                'Groupe' => 'Surveillant',
                'TypeEmploy' => 1111,
                'Motpass' => '06255',
                'Tel' => null,
                'Email' => 'ta@yahoo.fr',
            ],
            [
                'Mat' => 'D1111',
                'Nom' => 'talb',
                'Prenom' => 'said',
                'CodeFil' => 'TDI',
                'Niveau' => '1 A',
                'Groupe' => 'Gestionnaire stagiaire',
                'TypeEmploy' => 1111,
                'Motpass' => '06253',
                'Tel' => null,
                'Email' => 'ta@live.fr',
            ],
            [
                'Mat' => 'D2222',
                'Nom' => 'fadili',
                'Prenom' => 'kamal',
                'CodeFil' => 'ATV',
                'Niveau' => '2 B',
                'Groupe' => 'Directeur',
                'TypeEmploy' => 2222,
                'Motpass' => '06237',
                'Tel' => null,
                'Email' => 'hyoo@gmail.fr',
            ],
            [
                'Mat' => 'Z3666',
                'Nom' => 'administreur',
                'Prenom' => 'admin',
                'CodeFil' => 'TDI',
                'Niveau' => '0',
                'Groupe' => 'F',
                'TypeEmploy' => 25633,
                'Motpass' => '06322',
                'Tel' => null,
                'Email' => 'gth@yahoo.fr',
            ],
        ]);
    }
}