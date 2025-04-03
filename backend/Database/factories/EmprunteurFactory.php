<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Emprunteur;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Emprunteur>
 */
class EmprunteurFactory extends Factory
{
    protected $model = Emprunteur::class;

    public function definition(): array
    {
        return [
            'mat' => Str::random(6), // Matricule unique
            'nom' => $this->faker->lastName(),
            'prenom' => $this->faker->firstName(),
            'codeFil' => 'INFO', // Par défaut, une filière
            'niveau' => $this->faker->numberBetween(1, 5),
            'groupe' => $this->faker->randomElement(['A', 'B', 'C']),
            'typeEmploy' => $this->faker->randomElement(['Étudiant', 'Professeur']),
            'motpass' => bcrypt('password'), // Mot de passe crypté
            'tel' => $this->faker->phoneNumber(),
            'email' => $this->faker->unique()->safeEmail(),
        ];
    }
}
