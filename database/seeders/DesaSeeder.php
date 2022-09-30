<?php

namespace Database\Seeders;

use App\Models\Desa;
use Illuminate\Database\Seeder;

class DesaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Desa::create([
            'id_kecamatan' => 1,
            'nama_desa' => 'Jumrah'
        ]);

        Desa::create([
            'id_kecamatan' => 1,
            'nama_desa' => 'Telukpulau Hulu'
        ]);

        Desa::create([
            'id_kecamatan' => 1,
            'nama_desa' => 'Pematang Botam'
        ]);

        //
        Desa::create([
            'id_kecamatan' => 2,
            'nama_desa' => 'Pelita'
        ]);

        Desa::create([
            'id_kecamatan' => 2,
            'nama_desa' => 'Gelora'
        ]);

        Desa::create([
            'id_kecamatan' => 2,
            'nama_desa' => 'Suka Maju'
        ]);
    }
}
