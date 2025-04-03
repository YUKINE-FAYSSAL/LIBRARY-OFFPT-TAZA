<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Inventaire_Ouvrage extends Model
{
    /**
     * Le nom de la table associée au modèle.
     *
     * @var string
     */
    protected $table = 'inventaire_ouvrages';

    /**
     * Les colonnes qui peuvent être remplies massivement.
     *
     * @var array
     */
    protected $fillable = [
        'cote',
        'num_enreg',
        'num_l_j',
        'titre_ouvrage',
        'auteur',
        'edition_date',
        'support_accomp',
        'quantite',
        'recu_le',
        'origine',
        'libelle',
        'code_secteur',
        'observations',
        'image_path',
        'file_path',
    ];

    /**
     * Les colonnes qui doivent être cachées lors de la sérialisation.
     *
     * @var array
     */
    protected $hidden = [
        // Ajoutez ici les colonnes que vous ne souhaitez pas exposer (par exemple, les mots de passe)
    ];

    /**
     * Les colonnes qui doivent être converties en types natifs.
     *
     * @var array
     */
    protected $casts = [
        'recu_le' => 'datetime', // Convertit la colonne recu_le en objet Carbon
        'quantite' => 'integer', // Convertit la colonne quantite en entier
    ];
}