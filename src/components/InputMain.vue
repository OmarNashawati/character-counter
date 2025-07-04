<script setup></script>

<template>
  <textarea 
    name="text-area" 
    id="main-text-area" 
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
</template>

<style scoped>
  #main-text-area {
    width: 100%;
    height: 120px;
    background-color: var(--surface);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
  }
</style>