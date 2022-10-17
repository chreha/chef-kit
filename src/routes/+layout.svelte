<script>
  import '../scss/main.scss';
  import Nav from '../components/navigations/nav.svelte';    
  import Footer from '../components/footers/footer.svelte';
</script>
<Nav />
<main>
  <slot></slot>
</main>
<Footer />
