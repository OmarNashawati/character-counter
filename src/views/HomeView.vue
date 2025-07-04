<script setup>
  import { ref } from 'vue';
  import InputMain from '@/components/InputMain.vue';
  import Counters from '@/components/Counters.vue';
  import LetterDensity from '@/components/LetterDensity.vue';

  import { calculateCharacters, calculateWords, calculateSentence } from '@/utils/counter';

  const characters = ref(0);
  const words = ref(0);
  const sentence = ref(0);

  const calculate = (str, encludeSpaces) => {
    characters.value = calculateCharacters(str, encludeSpaces)
    words.value = calculateWords(str)
    sentence.value = calculateSentence(str)
  }


  const densityList = [
    {
      letter:'N',
      value:10
    },
    {
      letter:'L',
      value:15
    },
    {
      letter:'M',
      value:20
    }
  ]
  
  
</script>

<template>
  <div class="main-wrapper">

    <header class="header-wrapper">
      <h1 class="header-text">Analyze Your Text</h1>
      <h1 class="header-text">In real-time.</h1>
    </header>
  
    <section class="">
     
      <input-main 
        @on-text-change="(str, encludeSpaces) => calculate(str, encludeSpaces)"
        @on-enclode-spaces-checkbox-change="(str, encludeSpaces) => calculate(str, encludeSpaces)"
      />
  
    </section>
  
    <section class="">
      <counters :character="characters" :words="words" :sentence="sentence"/>
    </section>
  
    <section>
      <letter-density :density-list="densityList"/>
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