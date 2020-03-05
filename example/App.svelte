<style>
  .container {
    height: 300px;
    width: 500px;
  }
</style>

<script>
  import { SvelteSimplebar } from "../src/index";
  import { onMount } from 'svelte'
  const data = Array.from({ length: 50 }).map((item, index) => ({
    text: `Line number: ${index + 1}`
  }));
  let svelteBar
  const initBar = bar => console.log('svelteBar', bar)
</script>

<div class="container">
  <SvelteSimplebar init={initBar}>
    <ul class="list">
      {#each data as { text }}
        <li class="list-item">{text}</li>
      {/each}
    </ul>
  </SvelteSimplebar>
</div>
