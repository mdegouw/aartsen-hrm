<script setup>
  import { ref } from 'vue'

  const enabled = ref(false)

defineProps({
    name: String,
})
</script>





<template>
  <h1>Hello, {{ name }}</h1>

  <div class="flex flex-col">
    <div class="form-control w-52">
      <label class="cursor-pointer label">
        <span class="label-text">Remember me</span> 
        <input type="checkbox" class="toggle toggle-primary" checked />
      </label>
    </div>
    <div class="form-control w-52">
      <label class="cursor-pointer label">
        <span class="label-text">Remember me</span> 
        <input type="checkbox" class="toggle toggle-secondary" checked />
      </label>
    </div>
    <div class="form-control w-52">
      <label class="cursor-pointer label">
        <span class="label-text">Remember me</span> 
        <input type="checkbox" class="toggle toggle-accent" checked />
      </label>
    </div>
  </div>

  <input type="checkbox" class="toggle toggle-primary" checked />
<input type="checkbox" class="toggle toggle-secondary" checked />
<input type="checkbox" class="toggle toggle-accent" checked />
<input type="checkbox" class="toggle toggle-info" checked />


</template>
