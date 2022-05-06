<template>
  <section class="bg-gray-dark">
    <div class="container mx-auto flex flex-wrap items-center justify-center">
      <div class="logo">
        <NuxtLink class="inline-flex" to="/">
          <img src="~/assets/images/logo.png" alt="XT Live Logo" />
        </NuxtLink>
      </div>
      <nav class="text-white w-full lg:w-2/3">
        <ul class="flex justify-center">
          <li>
            <NuxtLink class="inline-flex p-10 hover:text-blue" to="/">
              Home
            </NuxtLink>
          </li>
          <li>
            <a class="inline-flex p-10 hover:text-blue" href="https://xtz.news"
              >Latest News</a
            >
          </li>
          <li>
            <a
              class="inline-flex p-10 hover:text-blue"
              href="https://xtz.news/timeline/"
              >Timeline</a
            >
          </li>
          <li>
            <a
              class="inline-flex p-10 hover:text-blue"
              href="https://xtz.news/contact/"
              >Contact</a
            >
          </li>
        </ul>
      </nav>
      <nav class="socials">
        <ul class="flex flex-wrap">
          <li>
            <a
              href="https://twitter.com/XTZNews"
              target="_blank"
              rel="noopener noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                /></svg
            ></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/XTZNews"
              target="_blank"
              rel="noopener noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                /></svg
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/73406620/"
              target="_blank"
              rel="noopener noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                /></svg
            ></a>
          </li>
          <!-- <li>
            <a
              href="https://telegram.com"
              target="_blank"
              rel="noopener noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                /></svg
            ></a>
          </li> -->
        </ul>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
a {
  font-size: 1.7rem;
  text-transform: capitalize;

  &.nuxt-link-exact-active {
    @apply text-blue;
  }
}

.logo {
  transform: translateY(3rem);

  a:hover {
    opacity: 0.6;
  }

  img {
    width: 13rem;
  }
}

.socials {
  li {
    margin-left: 1rem;

    a {
      @apply flex items-center justify-center;
      width: 4.9rem;
      height: 4.9rem;
      border: 1px solid #5e5b5b;

      svg {
        fill: #5e5b5b;
        width: 100%;
        max-width: 2.1rem;
        max-height: 2.1rem;
        transition: inherit;
      }

      &:hover {
        @apply border-blue-light bg-blue-light;

        svg {
          fill: #fff;
        }
      }
    }
  }
}
</style>
