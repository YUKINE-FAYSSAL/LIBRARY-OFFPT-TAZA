<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emprunteur extends Model
{
    use HasFactory;

    protected $table = 'emprunteurs';
    protected $primaryKey = 'Mat';
    public $incrementing = false; // Car la clé primaire est une chaîne (Mat)
    protected $keyType = 'string';

    protected $fillable = [
        
        'Nom',
        'Prenom',
        'CodeFil',
        'Niveau',
        'Groupe',
        'TypeEmploy',
        'Motpass',
        'Tel',
        'Email',
    ];
}
  