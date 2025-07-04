<script setup></script>

<template>
  <div class="header-wrapper">
    <div class="logo">
      <img src="../assets/logo.svg" alt="Logo" width="40px">
      <h1 class="app-name">Characte Counter</h1>
    </div>


    <button class="theme-toggle-button">
      <i class="pi pi-sun"></i>
    </button>
  </div>
</template>

<style scoped>
  .header-wrapper {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--section-padding);
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .app-name {
    font-weight: 600;
  }

  .theme-toggle-button{
    width: 40px;
    height: 40px;
    background: var(--surface);
    color: var(--text);
    border: none;
    outline: none;
    border-radius: 0.5rem;
  }

  .theme-toggle-button:hover {
    opacity: 0.8;
    cursor: pointer;
  }
</style>