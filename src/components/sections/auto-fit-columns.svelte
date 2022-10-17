<script>
  export let componentId;
  export let data;
</script>
<section class="section | bg-neutral-200 text-center" id={componentId || null}>
    <div class="container" data-type="wide">
      <header class="section-header" data-type="decorated">
        <h2 class="fs-800 clr-primary-500 ff-accent">{data.title}</h2>
        <p class="fs-600 uppercase">{data.subtitle}</p>
      </header>
      <div class="grid-auto-fit">
        {#each data.cards as card}
        <div>
          <h3 class="fs-500 fw-bold clr-neutral-900 uppercase">{card.title}</h3>
          <p>{card.content}</p>
        </div>
        {/each}        
    </div>
  </section>