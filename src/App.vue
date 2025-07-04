<script setup>
</script>

<template>
  <header>
    <div class="logo">
      <img src="./assets/logo.svg" alt="Logo" width="40px">
    </div>

    <button class="theme-toggle-button">
      <i class="pi pi-moon"></i>
    </button>
  </header>

  <main>
    <header>
      <h1>Analyze Your Text</h1>
      <h1>In real-time</h1>
    </header>

    <section class="">
      <textarea 
        name="text-area" 
        id="text-area" 
        placeholder="Start typing here .. or paste your text"
      ></textarea>

      <div class="text-options">
        <label for="">
          <input type="checkbox" >
          Enclude Spaces
        </label>

        <label for="">
          <input type="checkbox" >
          Set Character Limit
        </label>
      </div>
    </section>

    <section class="">
      <div class="counters">
        <div class="counter-item">
          <p class="counter-value">0</p>
          <p class="counter-title">Total Characters</p>
        </div>

        <div class="counter-item">
          <p class="counter-value">0</p>
          <p class="counter-title">Words Count</p>
        </div>

        <div class="counter-item">
          <p class="counter-value">0</p>
          <p class="counter-title">Sentence Count</p>
        </div>
      </div>
    </section>

    <section>
      <h3>Letter Density</h3>
      <div>
        Not characters found. Start typing to see letter density.
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>
