<script>
  import Picture from '../block/picture.svelte';

  export let componentId;
  export let data;
</script>
<section class="section | text-center" id={componentId || null}>
    <div class="container" data-type="wide">
      <header class="section-header">
        <h2 class="fs-800 clr-primary-500 ff-accent">{data.title}</h2>
      </header>          
      <div  class="even-columns">
        <!-- {#each data.cards as card}
        <div class="card | box-shadow-1" data-type="testimonial">
          <Picture imageData = {card} />
          <div class="card-body">
            <p>{card.content}</p>
          </div>
          <div class="padding-16 bg-neutral-200">
            <p class="fs-500 clr-primary-500">{card.author}</p>
            <p class="fs-300">{card['author-title']}</p>
          </div>                
        </div>
        {/each} -->
      </div>
    </div>
  </section>