<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReservationOuvrage extends Model
{
    /**
     * Le nom de la table associée au modèle.
     *
     * @var string
     */
    protected $table = 'reservation_ouvrage';

    /**
     * Les colonnes qui peuvent être remplies massivement.
     *
     * @var array
     */
    protected $fillable = [
        'mat',
        'coteEXO',
        'dateReserv',
    ];

    /**
     * Les colonnes qui doivent être cachées lors de la sérialisation.
     *
     * @var array
     */
    protected $hidden = [
        // Ajoutez ici les colonnes que vous ne souhaitez pas exposer
    ];

    /**
     * Les colonnes qui doivent être converties en types natifs.
     *
     * @var array
     */
    protected $casts = [
        'dateReserv' => 'date', // Convertit la colonne dateReserv en objet Carbon
    ];
}