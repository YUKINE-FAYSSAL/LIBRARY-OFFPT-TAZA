<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Filiere extends Model
{
    protected $primaryKey = 'CodeFil'; // Définir la clé primaire
    public $incrementing = false; // Désactiver l'auto-incrémentation
    protected $keyType = 'string'; // Type de la clé primaire

    protected $fillable = [
        'CodeFil', // Colonne CodeFil
        'LibelleFil', // Colonne LibelleFil
    ];
}