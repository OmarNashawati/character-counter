<script setup>
import { ref, useTemplateRef } from 'vue';

  const emit = defineEmits(['onTextChange','onEnclodeSpacesCheckboxChange']);
  const inputEle = useTemplateRef('text-area-ref');
  const encludeSpacesCheckbox = useTemplateRef('enclude-spaces-checkbox')

</script>

<template>
  <textarea 
    ref="text-area-ref"
    name="text-area" 
    id="main-text-area" 
    @input="emit('onTextChange',inputEle.value, encludeSpacesCheckbox.checked)"
    placeholder="Start typing here .. or paste your text"
  ></textarea>

  <div class="text-options">
    <label for="">
      <input 
      ref="enclude-spaces-checkbox"
      type="checkbox"
      @change="emit('onEnclodeSpacesCheckboxChange',inputEle.value, encludeSpacesCheckbox.checked)"
      >
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
    color: var(--text);
  }
</style>