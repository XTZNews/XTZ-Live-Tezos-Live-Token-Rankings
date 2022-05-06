<template>
  <section class="categories my-24 pt-32 pb-48 px-6">
    <div class="flex justify-center">
      <div class="w-full lg:w-5/6">
        <div class="head mb-12 text-white flex flex-wrap items-center">
          <h2 class="bar">Live Token Categories</h2>
          <ul class="tabs time flex-1 flex items-center ml-8 mt-8 lg:mt-0">
            <li class="active">24 Hours</li>
          </ul>
          <div class="nav flex mt-8 lg:mt-0">
            <div class="prev">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                />
              </svg>
            </div>
            <div class="next">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375-12.5-12.5-12.5-32.75 0-45.25L242.8 256 73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="category-carousel swiper-container">
          <div class="swiper-wrapper">
            <categoryCard type="nft" v-bind:style="token" />
            <categoryCard type="farming" v-bind:style="token" />
            <categoryCard type="game" v-bind:style="token" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.css'
import categoryCard from '~/components/variable/categoryCard'

SwiperCore.use([Navigation])

export default {
  components: {
    categoryCard,
  },
  data() {
    return {
      token: [],
    }
  },
  async created() {
    const responce = await fetch('API URL')
    const data = await responce.json()
    this.token[0] = data
    console.log('created', this.token[0])
  },
  mounted() {
    this.swiper = new SwiperCore('.category-carousel', {
      loop: false,
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: '.categories .nav .next',
        prevEl: '.categories .nav .prev',
      },
      breakpoints: {
        540: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    })
  },
}
</script>

<style lang="scss" scoped>
section {
  background: rgb(18, 50, 98);
  background: linear-gradient(
    0deg,
    rgba(18, 50, 98, 1) 0%,
    rgba(44, 125, 247, 1) 100%
  );
}

.head {
  h2 {
    &.bar {
      &:before {
        @apply bg-blue-light;
      }
    }
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 0.5rem;
      @apply bg-blue-light mt-2;
    }
  }
}

.tabs {
  &.time {
    li {
      @apply mx-8 cursor-pointer;

      &:after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        @apply bg-white;
        transition: 0.4s all;
      }

      &:hover,
      &.active {
        &:after {
          width: 100%;
        }
      }
    }
  }
}

.nav {
  .prev,
  .next {
    color: #fff;
    height: 2.4em;
    padding: 2.4rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;

    svg {
      width: 1rem;
      fill: #fff;
      transition: 0.3s all;
    }

    &:hover {
      @apply bg-blue-light;
    }
  }

  .prev {
    justify-content: flex-end;
  }
}
</style>
