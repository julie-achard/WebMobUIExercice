<script setup>
import TheHeader from "./components/TheHeader.vue";
import { computed, ref, watchEffect } from "vue";
const baseKelvin = ref(0);
const celsius = computed(() => baseKelvin.value - 273.15);
const fahrenheit = computed(() => (baseKelvin.value * 9) / 5 - 459.67);

function updateBaseKelvin(event) {
  baseKelvin.value = event.target.value;
}
watchEffect(() => {
  console.log(
    `Kelvin: ${baseKelvin.value}K, Celsius: ${celsius.value}°C, Fahrenheit: ${fahrenheit.value}°F`
  );
});
</script>

<template>
  <TheHeader></TheHeader>
  <TheMainPage></TheMainPage>
  <label>Kelvin</label>
  <input type="number" :value="baseKelvin" @input="updateBaseKelvin($event)" />
  <label>Celsius</label>
  <input type="number" :value="celsius" @input="watchEffect" />
  <label>Fahrenheit</label>
  <input type="number" :value="fahrenheit" />
</template>

<style scoped>
* {
  display: block;
}
label {
  margin-top: 1rem;
}
</style>
