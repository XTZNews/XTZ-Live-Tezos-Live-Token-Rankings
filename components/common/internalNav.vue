<template>
  <nav class="text-white" :class="bg">
    <ul class="flex justify-center text-lg">
      <!-- <li>
        <NuxtLink class="inline-flex px-6 py-4 hover:text-white" to="/"
          >Privacy Policy</NuxtLink
        >
      </li>
      <li>
        <NuxtLink class="inline-flex px-6 py-4 hover:text-white" to="/"
          >Cookie Policy</NuxtLink
        >
      </li> -->
      <li>
        <!-- <NuxtLink
          class="inline-flex px-6 py-4 hover:text-white"
          to="https://xtz.news/disclaimer/"
          >Disclaimer</NuxtLink
        > -->
        <a
          class="inline-flex px-6 py-4 hover:text-white"
          href="https://xtz.news/disclaimer/"
          >Disclaimer</a
        >
      </li>
      <!-- <li>
        <NuxtLink class="inline-flex px-6 py-4 hover:text-white" to="/"
          >Terms & Conditions</NuxtLink
        >
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  props: { bg: { type: String, default: 'bg-black' } },
}
</script>

<style lang="scss" scoped>
a {
  opacity: 0.8;

  &:hover,
  &.nuxt-link-exact-active {
    opacity: 1;
  }
}
</style>
