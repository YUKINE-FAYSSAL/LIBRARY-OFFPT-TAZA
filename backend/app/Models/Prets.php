<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Prets extends Model
{
    /**
     * Le nom de la table associée au modèle.
     *
     * @var string
     */
    protected $table = 'prets';

    /**
     * Les colonnes qui peuvent être remplies massivement.
     *
     * @var array
     */
    protected $fillable = [
        'n_prets',
        'matricule',
        'cote_exo',
        'date_sortie',
        'prets',
        'reservation_ouvrage',
        'secteur',
        'sous_secteur',
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
        'date_sortie' => 'date', // Convertit la colonne date_sortie en objet Carbon
    ];
}