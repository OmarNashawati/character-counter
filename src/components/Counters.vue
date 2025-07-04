<script setup>

  const props = defineProps({
    character:{
      type: Number,
      default:0
    },
    words:{
      type: Number,
      default:0
    },
    sentence:{
      type: Number,
      default:0
    }
  })
</script>

<template>
  <div class="counters">
    <div class="counter-item item--primary">
      <p class="counter-value">{{ character }}</p>
      <p class="counter-title">Total Characters</p>
    </div>

    <div class="counter-item item--accent1">
      <p class="counter-value">{{ words }}</p>
      <p class="counter-title">Words Count</p>
    </div>

    <div class="counter-item item--accent2">
      <p class="counter-value">{{ sentence }}</p>
      <p class="counter-title">Sentence Count</p>
    </div>
  </div>
</template>

<style scoped>
  .counters {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 2rem 0;
    color: var(--background);
  }
  
  .counter-item {
    padding: 0.5rem 1rem ;
    border-radius: 0.5rem;
  }

  .counter-value{
    font-size: 2rem;
    font-weight: bold;
  }

  .counter-title{

  }


  .item--primary {
    background-color: var(--primary);
  }
  .item--accent1 {
    background-color: var(--accent-1);
  }
  .item--accent2{
    background-color: var(--accent-2);
  }

  @media(max-width:576px) {
    .counters {
    grid-template-columns: 1fr;
  }
  }
</style>