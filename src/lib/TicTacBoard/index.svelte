<script lang="ts">
  import { getPlayerLabel } from "../utils";

  import BoardNode from "./BoardNode.svelte";
  import Tictactoe from "@sahilsinghrana/tictactoe.js";

  let game = new Tictactoe();

  const play = new Proxy(game.play, {
    apply(target, thisArgs, args: [number, number]) {
      target.apply(game, args);
      game = game;
    },
  });
</script>

<div>
  {#if game.gameStatus === 1}
    {#if game.winner > -1}
      <h1>Game Won by {getPlayerLabel(game.winner)}</h1>
    {:else}
      <h2>No one won</h2>
    {/if}
  {:else if game.winner < 0}
    <h2>Turn - {getPlayerLabel(game.currentPlayer)}</h2>
  {/if}
  {console.log({
    game,
  })}
  {#each game.board as row, rowIdx}
    <div class="boardRow">
      {#each row as col, colIdx}
        <BoardNode val={col} on:click={() => play(rowIdx, colIdx)} />
      {/each}
    </div>
  {/each}
</div>
