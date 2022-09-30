<?php

namespace Database\Seeders;

use App\Models\Kecamatan;
use Illuminate\Database\Seeder;

class KecamatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Kecamatan::create([
            'nama_kecamatan' => 'Rimba Melintang'
        ]);

        Kecamatan::create([
            'nama_kecamatan' => 'Bagan Sinembah'
        ]);

        Kecamatan::create([
            'nama_kecamatan' => 'Sinaboi'
        ]);
    }
}
