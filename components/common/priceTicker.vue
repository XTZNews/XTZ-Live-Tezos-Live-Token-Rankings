<template>
  <section
    class="
      s-ticker
      py-8
      px-6
      flex
      justify-center
      dark:bg-gray-dark dark:text-white
      overflow-hidden
      pointer-events-none
    "
  >
    <div class="relative w-full lg:w-5/6 flex items-end header">
      <div class="logo flex flex-none pointer-events-auto">
        <NuxtLink class="inline-flex" to="/">
          <img src="~/assets/images/logo.png" alt="XT Live Logo" />
        </NuxtLink>
      </div>
      <div class="ticker ml-6 lg:ml-20 font-extrabold flex-1 flex items-center">
        <div
          class="
            title
            hidden
            md:block
            text-3xl text-blue-dark
            dark:text-white
            pr-16
          "
        >
          Live Token Prices
        </div>
        <div class="ticker-holder h-8 w-full flex-1">
          <div class="ticker-items whitespace-nowrap flex flex-wrap text-xl">
            <div v-for="livePrice of livePrices" :key="livePrice.symbol">
              <div>
                {{ livePrice.symbol }}
                -
                <span class="price">
                  ${{ livePrice.price }} ({{ livePrice.twenty }})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore from 'swiper/core'
import 'swiper/swiper-bundle.css'

export default {
  data() {
    return {
      livePrices: '',
      livePriceArrays: '',
    }
  },
  created() {
    this.fetchLivePrices()
  },
  mounted() {
    this.swiper = new SwiperCore('.ticker-carousel', {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 15,
      breakpoints: {
        540: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
        1800: {
          slidesPerView: 6,
        },
      },
    })
  },
  methods: {
    async fetchLivePrices() {
      const livePrices = await fetch(
        'API URL'
      ).then((res) => res.json())
      this.livePrices = await livePrices
      console.log(livePrices)
    },
  },
}
</script>

<style lang="scss" scoped>
.s-ticker {
  @screen lg {
    margin-top: -7rem;
  }
}
.logo {
  a:hover {
    opacity: 0.6;
  }

  img {
    width: 13rem;
  }
}

@screen sm {
  @keyframes move {
    0% {
      top: 0px;
    }
    20% {
      top: -2rem;
    }
    40% {
      top: -4rem;
    }
    60% {
      top: -6rem;
    }
    80% {
      top: -8rem;
    }
  }
}

.ticker-items {
  position: relative;
  top: 0;
  left: 0;

  > div {
    margin: 0 1.5rem;
    width: calc(100% - 3rem);

    @screen sm {
      width: calc(50% - 3rem);
    }

    @screen md {
      width: calc(100% / 3 - 3rem);
    }

    @screen lg {
      width: calc(100% / 4 - 3rem);
    }

    @screen 2xl {
      width: calc(100% / 4 - 3rem);
    }
  }
}

.price {
  @apply font-normal;
}
</style>
