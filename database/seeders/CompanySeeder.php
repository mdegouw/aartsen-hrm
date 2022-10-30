<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Company::factory()->create([
            'name' => 'Aartsen Breda',
        ]);

        \App\Models\Company::factory()->create([
            'name' => 'Aartsen Venlo',
        ]);

        \App\Models\Company::factory()->create([
            'name' => 'Aartsen NV',
        ]);
    }
}
