<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $admin = User::create([
            'name' => 'Admin SIAGA',
            'email' => 'admin@rohilkab.go.id',
            'password' => bcrypt('password')
        ]);

        $admin->assignRole('admin');

        $petugas = User::create([
            'name' => 'Petugas SIAGA',
            'email' => 'petugas@rohilkab.go.id',
            'password' => bcrypt('password')
        ]);

        $petugas->assignRole('petugas');
    }
}
