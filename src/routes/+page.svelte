<script>
    import Hero from '../components/sections/hero.svelte';  
    import EvenColumns from '../components/sections/even-columns.svelte';        
    import AutoFit from '../components/sections/auto-fit-columns.svelte';
    import Meals from '../components/sections/interactive-figure.svelte';
    import Testimonials from '../components/sections/testimonials.svelte';      
    export let data;        
    console.log(data);
    const getSectionData = (id) => {
        return data.sections.filter((el) => {return el.uid == id})[0];
    }
</script>
<svelte:head>
   <title>Home</title>
</svelte:head>
<Hero data = {getSectionData("hero")} />
<EvenColumns componentId = "about" data = {getSectionData("about")} />
<AutoFit data = {getSectionData("great-food")} />
<Meals componentId = "meals" data = {getSectionData("meals")} />
<Testimonials componentId = "testimonials" data = {getSectionData("testimonials")} />