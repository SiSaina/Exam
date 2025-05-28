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
        Schema::create('game_roster_stats', function (Blueprint $table) {
            $table->id();
            $table->foreignId('game_id')->constrained('games')->onDelete('cascade');
            $table->foreignId('roster_id')->constrained('rosters')->onDelete('cascade');
            $table->integer('minutes_played')->default(0);
            $table->integer('points')->default(0);
            $table->integer('assists')->default(0);
            $table->integer('rebounds')->default(0);
            $table->integer('steals')->default(0);
            $table->integer('blocks')->default(0);
            $table->integer('turnovers')->default(0);
            $table->integer('fouls')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('game_roster_stats');
    }
};
