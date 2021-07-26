<template>
  <button class="bg-blue-500 hover:bg-blue-700 text-white dark:bg-white dark:hover:bg-black-100 dark:text-black font-bold py-2 px-4 rounded-md"
    v-on="$listeners"
    >
      <slot/>
  </button>
</template>
