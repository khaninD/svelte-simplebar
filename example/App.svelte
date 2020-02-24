<style>
  .container {
    height: 300px;
  }
</style>

<script>
  import { SvelteSimplebar } from "../src/index";
  const data = Array.from({ length: 50 }).map((item, index) => ({
    text: `Line number: ${index + 1}`
  }));
</script>

<div class="container">
  <SvelteSimplebar {data}>
    <ul class="list">
      {#each data as { text }}
        <li class="list-item">{text}</li>
      {/each}
    </ul>
  </SvelteSimplebar>
</div>
