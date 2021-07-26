<template>
  <div
    class="slide rounded-md border dark:bg-gray-900 dark:text-white dark:border-gray-700"
  >
    <button
      class="slide__buttonLeft"
      @click="handlePreview"
    >
      <svg class="fill-current  text-white" style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" />
      </svg>
    </button>
    <button
      class="slide__buttonRight"
      @click="handleNext"
    >
      <svg  class="fill-current  text-white" style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,13H14L10.5,16.5L11.92,17.92L17.84,12L11.92,6.08L10.5,7.5L14,11H6V13Z" />
      </svg>
    </button>
    <div class="rounded-md">
        <img class="slide__image" :src="riverCurrent.image" alt="riverImage">
      <span class="ml-2 lg:prose-lg">{{riverCurrent.title}} - {{riverCurrent.length}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rivers: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      riverCurrent: {
        description:"The Nile has two major tributaries – the White Nile and the Blue Nile. The White Nile is considered to be the headwaters and primary stream of the Nile itself. The Blue Nile, however, is the source of most of the water, containing 80% of the water and silt. The White Nile is longer and rises in the Great Lakes region of central Africa, with the most distant source still undetermined but located in either Rwanda or Burundi. It flows north through Tanzania, Lake Victoria, Uganda and South Sudan. The Blue Nile begins at Lake Tana in Ethiopia[13] and flows into Sudan from the southeast. The two rivers meet just north of the Sudanese capital of Khartoum.[14]",
        dir:"/rivers",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Evening%2C_Nile_River%2C_Uganda.jpg/520px-Evening%2C_Nile_River%2C_Uganda.jpg",
        length:"6650 km",
        path:"/rivers/nile",
        slug:"nile",
        title:"Nile"
      },
      currentIndex: 0
    }
  },
  mounted() {
    if (this.rivers.length) {
      this.riverCurrent = this.rivers[0]
    }
  },
  methods: {
    handlePreview () {
      const position = this.currentIndex - 1

      if (position > 0) {
        this.riverCurrent = this.rivers[position]
        this.currentIndex = position
      }
    },
     handleNext () {
       const position = this.currentIndex + 1

      if (this.rivers.length > position) {
        this.riverCurrent = this.rivers[position]
        this.currentIndex = position
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.slide {
  position: relative;

    &__image {
    width: 1200px;
    height: 88px;
  }

  &__buttonLeft {
    position: absolute;
    left: 8px;
    top: 40%;
  }

   &__buttonRight {
    position: absolute;
    right: 8px;
    top: 40%;
  }
}

@media (min-width: 640px) {
  .slide {
  position: relative;

    &__image {
      width: 1200px;
      height: 280px;
    }
  }
}
</style>
