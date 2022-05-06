<template>
  <section class="container mx-auto flex items-center justify-center">
    <nav class="text-blue-dark text-4xl">
      <ul class="flex justify-center">
        <li>
          <NuxtLink
            class="inline-flex p-10 hover:bg-blue hover:text-white"
            to="/"
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <a
            class="inline-flex p-10 hover:bg-blue hover:text-white"
            rel="noopener"
            href="#"
            >All Tokens</a
          >
        </li>
        <!-- <li>
          <a
            class="inline-flex p-10 hover:bg-blue hover:text-white"
            target="_blank"
            rel="noopener"
            href="#"
            >Farming</a
          >
        </li>
        <li>
          <a
            class="inline-flex p-10 hover:bg-blue hover:text-white"
            target="_blank"
            rel="noopener"
            href="#"
            >Exchanges</a
          >
        </li>
        <li>
          <a
            class="inline-flex p-10 hover:bg-blue hover:text-white"
            target="_blank"
            rel="noopener"
            href="#"
            >News</a
          >
        </li>
        <li>
          <a
            class="inline-flex p-10 hover:bg-blue hover:text-white"
            target="_blank"
            rel="noopener"
            href="#"
            >My Portfolio</a
          >
        </li> -->
      </ul>
    </nav>
    <button
      class="
        flex
        items-center
        justify-center
        border-gray border-solid
        dark:text-white dark:border-white
      "
      @click="toggleDark()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        class="fill-current transition-all"
      >
        <path
          d="M256 136c-66.3 0-120 53.7-120 120 0 66.27 53.72 120 120 120s120-53.73 120-120c0-66.3-53.7-120-120-120zm0 224c-57.35 0-104-46.65-104-104s46.7-104 104-104 104 46.7 104 104-46.7 104-104 104zm0-248c4.422 0 8-3.578 8-8V8c0-4.422-3.6-8-8-8s-8 3.578-8 8v96c0 4.4 3.6 8 8 8zm0 288c-4.422 0-8 3.578-8 8v96c0 4.4 3.6 8 8 8s8-3.578 8-8v-96c0-4.4-3.6-8-8-8zm248-152h-96c-4.422 0-8 3.578-8 8s3.578 8 8 8h96c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-392 8c0-4.422-3.578-8-8-8H8c-4.422 0-8 3.6-8 8s3.578 8 8 8h96c4.4 0 8-3.6 8-8zm251.5-99.5c2.047 0 4.094-.7813 5.656-2.344l52.52-52.52c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0l-52.52 52.52c-3.125 3.125-3.125 8.2 0 11.32 1.554 1.534 3.554 2.334 5.654 2.334zM142.9 357.8l-52.52 52.52c-3.125 3.125-3.125 8.188 0 11.31C91.91 423.2 93.95 424 96 424s4.094-.7813 5.656-2.344l52.52-52.52c3.125-3.125 3.125-8.2 0-11.33S145.1 354.7 142.9 357.8zm226.2 0c-3.125-3.125-8.188-3.138-11.31-.0125s-3.125 8.2 0 11.33l52.52 52.52C411.9 423.2 413.1 424 416 424s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L369.1 357.8zM142.9 154.2c1.562 1.562 3.609 2.344 5.656 2.344s4.044-.844 5.644-2.344c3.125-3.125 3.125-8.2 0-11.32l-52.5-52.54c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31l52.51 52.55z"
        />
      </svg>
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    toggleDark() {
      document.querySelector('main').classList.toggle('dark')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 1px;
    background: #dddcdc;
  }
}

a {
  font-size: 1.5rem;
  @apply dark:text-white;

  &.nuxt-link-exact-active {
    @apply bg-blue text-white;
  }
}
button {
  width: 4.4rem;
  height: 4.4rem;
  border-width: 1px;
}
svg {
  width: 2.3rem;
  height: 2.3rem;
}
</style>
