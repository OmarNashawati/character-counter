<script setup>
  const props = defineProps(['densityList']);
  
</script>

<template>
  <h2>Letter Density</h2>
  <div v-if="!densityList || densityList.length === 0 ">
    Not characters found. Start typing to see letter density.
  </div>

  <div v-else class="letter-density-list">
    <div v-for="d in densityList" class="density-item">
      <p class="item-letter">{{ d.letter }}</p>
      <div class="bar-base">
        <div class="bar-show" :style="{'width':`${d.value}%`}"></div>
      </div>
      <p class="percentage">{{d.value}}%</p>
    </div>
  </div>
</template>

<style scoped>

.density-item {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.bar-base{
  flex: 1 1 auto;
  background-color: var(--surface);
  border-radius: 25px;
  height: 10px;
}

.bar-show{
  height: 100%;
  border-radius: 50px;
  background-color: var(--primary);
}
</style>