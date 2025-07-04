<script setup>
  import InputMain from '@/components/InputMain.vue';
  import Counters from '@/components/Counters.vue';
  import LetterDensity from '@/components/LetterDensity.vue';

  InputMain
</script>

<template>
  <div class="main-wrapper">

    <header class="header-wrapper">
      <h1 class="header-text">Analyze Your Text</h1>
      <h1 class="header-text">In real-time.</h1>
    </header>
  
    <section class="">
     
      <input-main />
  
    </section>
  
    <section class="">
      <counters />
    </section>
  
    <section>
      <letter-density />
    </section>
  </div>
</template>

<style scoped>
  .main-wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: var(--section-padding);
  }

  .header-wrapper {
    padding-bottom: 2rem ;
    text-align: center;
  }

  .header-text{
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 2.5rem;
  }
</style>