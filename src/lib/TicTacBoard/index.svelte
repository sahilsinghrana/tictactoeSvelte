<script lang="ts">
  import Tictactoe from "@sahilsinghrana/tictactoe.js";
  import { getPlayerLabel } from "../utils";

  import BoardNode from "./BoardNode.svelte";

  let game = new Tictactoe();

  const play = new Proxy(game.play, {
    apply(target, thisArgs, args: [number, number]) {
      target.apply(game, args);
      game = game;
    },
  });

  const restart = () => {
    game = new Tictactoe();
  };
</script>

<div>
  {#if game.gameStatus === 1}
    {#if game.winner > -1}
      <h1>Game Won by {getPlayerLabel(game.winner)}</h1>
    {:else}
      <h1>No one won</h1>
    {/if}
    <button class="restartBtn" on:click={restart}>Restart</button>
  {:else if game.winner < 0}
    <h1>Turn - {getPlayerLabel(game.currentPlayer)}</h1>
  {/if}
  {#each game.board as row, rowIdx}
    <div class="boardRow">
      {#each row as col, colIdx}
        <BoardNode val={col} on:click={() => play(rowIdx, colIdx)} />
      {/each}
    </div>
  {/each}
</div>

<style>
  .restartBtn {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
</style>
