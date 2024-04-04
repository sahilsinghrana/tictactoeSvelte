<script lang="ts">
  import { getPlayerLabel } from "../utils";

  export let val: number;
  let btn;
</script>

<button
  class={`boardBtn player${getPlayerLabel(val)}`}
  bind:this={btn}
  on:click
  disabled={val >= 0}
>
  {getPlayerLabel(val)}
</button>
