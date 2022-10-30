<script setup>
defineProps ({ companies: Object})


</script>


<template>
    <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>Name</th>
              <th>Favorite Color</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="company in companies.data" :key="company.id">
                <th>{{ company.id }}</th>
                <td>{{ company.name }}</td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
