<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'numero_stagiaire',
        'nom',
        'prenom',
        'genre',
        'date_naissance',
        'adresse',
        'telephone',
        'email',
        'niveau_scolaire',
        'code_filiere',
        'filiere',
        'groupe',
        'annee_etude',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'date_naissance' => 'date',
    ];

    /**
     * Automatically hash the date_naissance when setting it as password
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }

    /**
     * Find the user by numero_stagiaire for authentication
     */
    public function findForPassport($username)
    {
        return $this->where('numero_stagiaire', $username)->first();
    }

    /**
     * Validate the password (date_naissance) for the user
     */
    public function validateForPassportPasswordGrant($password)
    {
        // Compare the input password (date_naissance) with the stored date
        $inputDate = \Carbon\Carbon::createFromFormat('Y-m-d', $password);
        $storedDate = $this->date_naissance;
        
        return $inputDate->format('Y-m-d') === $storedDate->format('Y-m-d');
    }

    /**
     * Get the name that should be shown in the UI
     */
    public function getFullNameAttribute()
    {
        return "{$this->prenom} {$this->nom}";
    }

    /**
     * Relationship with Prets (loans) if needed
     */
    public function prets()
    {
        return $this->hasMany(\App\Models\Prets::class, 'numero_stagiaire', 'numero_stagiaire');
    }

    /**
     * Relationship with Reservations if needed
     */
    public function reservations()
    {
        return $this->hasMany(\App\Models\Reservationouvrage::class, 'numero_stagiaire', 'numero_stagiaire');
    }
}