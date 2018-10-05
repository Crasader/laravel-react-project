<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments("id");
            $table->string("title");
            $table->text("body");
            $table->timestamps();
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')
                ->references('id')
                ->on('users');
        });

        for ($i = 0; $i <= 5; $i++) {
            $posts = new App\Post();
            $posts->title = "A simple title " . $i;
            $posts->body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
            $posts->user_id = 2;
            $posts->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
