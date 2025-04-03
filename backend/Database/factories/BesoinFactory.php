<?php

namespace Database\Factories;

use App\Models\Besoin;
use Illuminate\Database\Eloquent\Factories\Factory;

class BesoinFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Besoin::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'Titre_Ouvrag' => $this->faker->sentence, // Génère un titre aléatoire
            'Auteur' => $this->faker->name, // Génère un nom d'auteur aléatoire
            'Edition_Date' => $this->faker->date, // Génère une date aléatoire
            'Quantite' => $this->faker->numberBetween(1, 100), // Génère une quantité entre 1 et 100
            'Matricule' => $this->faker->unique()->bothify('??##??##'), // Génère un matricule unique
        ];
    }
}