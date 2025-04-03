<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ReservationOuvrage;

class ReservationOuvrageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $reservations = [
            [
                'mat' => 'MAT001', // Matricule de l'emprunteur
                'coteEXO' => 'COTE001', // Cote de l'exemplaire
                'dateReserv' => '2023-10-01', // Date de réservation
            ],
            [
                'mat' => 'MAT002',
                'coteEXO' => 'COTE002',
                'dateReserv' => '2023-10-02',
            ],
            // Ajoutez d'autres réservations ici...
        ];

        foreach ($reservations as $reservation) {
            ReservationOuvrage::create($reservation);
        }
    }
}