<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reported_user_id');
            $table->unsignedBigInteger('reporter_user_id')->nullable(); // той хто скаржиться
            $table->json('reason');
            $table->text('details');
            $table->timestamps();
        
            $table->foreign('reported_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('reporter_user_id')->references('id')->on('users')->onDelete('set null');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reports');
    }
};
