<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        for ($i = 0; $i <= 5; $i++) {
            $user = new App\User();
            $user->name = "user " . $i;
            $user->email = "user" . $i . "@domaine.com";
            $user->email_verified_at = null;
            $user->password = "$2y$12$2f.nCd73xGgnxusksxSh4ebTQqqt36C9VHylGrt.KGPZAOcx5VC/a";
            $user->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
