<template>
  <div class="flex flex-col items-center bg-white-500 dark:bg-black h-screen">
    <switch-theme class="switch" />
    <header class="mt-8">
      <span class="text-2xl text-black-500 dark:text-white"
        >Welcome to page rivers</span
      >
    </header>
    <main class="flex flex-col items-center mt-10">
      <primary-button @click="handleShowRiver">Discover the rivers</primary-button>
      <slide v-if="showRivers" class="w-1/3 mt-10" :rivers="riversSorted" />
    </main>
  </div>
</template>

<script>
import riverDAO from '@/DAO/Rivers'
import { quilometerToMeter } from '@/utils/converters'
import Slide from '@/components/Slide.vue'

export default {
  components: {
    Slide
  },
  data() {
    return {
      showRivers: false,
      riversSorted: [],
    }
  },
  methods: {
    async handleShowRiver() {
      await this.getRivers()
      this.showRivers = true
    },
    async getRivers() {
      const response = await riverDAO.getAll()
      if (!response.error) {
        this.sortRivers(response.data)
      }
    },
    sortRivers(rivers) {
      const riversSorted = rivers.sort(
        (current, next) => quilometerToMeter(next.length) - quilometerToMeter(current.length)
      )

      Object.assign(this, { riversSorted })
    },
  },
}
</script>

<style>
.switch {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
