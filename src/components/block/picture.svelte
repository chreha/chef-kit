<script>
    export let imageData;
</script>
<picture>    
    <source srcset="/testimonial-01.webp" type="image/webp">            
    <source srcset="/testimonial-01.avif" type="image/avif">                                    
    <img src="/testimonial-01.jpg" alt="{imageData.alt}">
</picture>