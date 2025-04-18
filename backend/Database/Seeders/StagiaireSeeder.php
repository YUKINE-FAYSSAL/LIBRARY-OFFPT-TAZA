<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class StagiaireSeeder extends Seeder
{
    public function run()
    {
        // Check if the file exists
        if (!Storage::exists('data/stagiaires.json')) {
            $this->command->error('The file stagiaires.json does not exist in storage/app/data/');
            return;
        }

        try {
            $json = Storage::get('data/stagiaires.json');
            $stagiaires = json_decode($json, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception('Invalid JSON format: ' . json_last_error_msg());
            }

            $inserted = 0;
            
            foreach ($stagiaires as $stagiaire) {
                // Skip if required fields are missing
                if (empty($stagiaire['Numéro stagiaire']) || empty($stagiaire['Date naissance'])) {
                    continue;
                }

                try {
                    DB::table('users')->insert([
                        'numero_stagiaire' => $stagiaire['Numéro stagiaire'],
                        'nom' => $stagiaire['Nom'] ?? '',
                        'prenom' => $stagiaire['Prénom'] ?? '',
                        'genre' => $stagiaire['Genre'] ?? 'U', // U for unknown if not provided
                        'date_naissance' => $this->parseDate($stagiaire['Date naissance']),
                        'adresse' => $stagiaire['Adresse'] ?? null,
                        'telephone' => $stagiaire['Numéro téléphone'] ?? null,
                        'email' => $this->cleanEmail($stagiaire['Email'] ?? null),
                        'niveau_scolaire' => $stagiaire['Niveau scolaire'] ?? null,
                        'code_filiere' => $stagiaire['Code Filière'] ?? '',
                        'filiere' => $stagiaire['Filière'] ?? '',
                        'groupe' => $stagiaire['Groupe'] ?? '',
                        'annee_etude' => $stagiaire['Année etude'] ?? '',
                        'password' => Hash::make($this->parseDate($stagiaire['Date naissance'])),
                        'created_at' => Carbon::now(),
                        'updated_at' => Carbon::now(),
                    ]);
                    $inserted++;
                } catch (\Exception $e) {
                    $this->command->error('Error inserting stagiaire '.$stagiaire['Numéro stagiaire'].': '.$e->getMessage());
                }
            }

            $this->command->info("Successfully inserted {$inserted} stagiaires.");
            
        } catch (\Exception $e) {
            $this->command->error('Seeder error: ' . $e->getMessage());
        }
    }

    protected function parseDate($dateStr)
    {
        try {
            // Handle different date formats (like "5/25/96" or "25/5/1996")
            $dateParts = preg_split('/[\/\-\.]/', $dateStr);
            
            if (count($dateParts) === 3) {
                // If year is 2 digits
                if (strlen($dateParts[2]) === 2) {
                    $year = ($dateParts[2] > 20) ? '19'.$dateParts[2] : '20'.$dateParts[2];
                } else {
                    $year = $dateParts[2];
                }
                
                // Determine day/month order (try both possibilities)
                if ((int)$dateParts[0] > 12) { // First part is day
                    $day = $dateParts[0];
                    $month = $dateParts[1];
                } else { // First part is month
                    $month = $dateParts[0];
                    $day = $dateParts[1];
                }
                
                return Carbon::createFromDate($year, $month, $day)->format('Y-m-d');
            }
            
            throw new \Exception("Invalid date format: {$dateStr}");
            
        } catch (\Exception $e) {
            $this->command->error("Date parsing error for '{$dateStr}': ".$e->getMessage());
            return '2000-01-01'; // Default date if parsing fails
        }
    }

    protected function cleanEmail($email)
    {
        if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return null;
        }
        return strtolower(trim($email));
    }
}