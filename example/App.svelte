<script>
  import { SvelteSimplebar } from '../src/index'
  const data = Array.from({ length: 50 }).map((item, index) => ({ text: `Line number: ${index + 1}`}))
</script>

<style>
  .container {
    height: 300px;
  }
</style>

<div class="container">
  <SvelteSimplebar>
    <ul class="list">
      {#each data as { text }}
        <li class="list-item">{text}</li>
      {/each}
    </ul>
  </SvelteSimplebar>
</div>