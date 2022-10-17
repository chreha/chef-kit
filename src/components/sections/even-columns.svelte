<script>
  export let componentId;
  export let data;
</script>
<section class="section" id={componentId || null}>
    <div class="container">
      <div class="even-columns">
        <div>
          <picture>
            <source srcset="/about.avif" type="image/avif">
            <source srcset="/about.webp" type="image/webp">
            <img class="shift-up box-shadow-1" src="/about.jpg" alt="Meal">
          </picture>              
        </div>
        <div class="flow">
          <header class="section-header">
            <h2 class="fs-800 ff-accent clr-primary-500">{data.title}</h2>
            <p class="fs-600 uppercase"></p>
          </header>
          <p class="lead">It's ready to go</p>
          <p>Whether it's for a romantic evening with your significant other or if you're hosting a large party and need food for a big group, we're here to help!</p>
          <p> We can cater to whatever your needs are, and ensure that our delicious food is delivered at the perfect moment, fresh, hot, and ready to eat exactly when you need it to be there.</p>
        </div>
      </div>
    </div>
  </section>
 
  