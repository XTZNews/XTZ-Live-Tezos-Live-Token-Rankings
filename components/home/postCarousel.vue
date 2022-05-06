<template>
  <section class="my-24 px-6">
    <div class="post-carousel-nav relative w-full flex justify-center mb-8">
      <div
        class="
          w-full
          lg:w-5/6
          flex flex-wrap
          justify-between
          items-center
          dark:text-white
        "
      >
        <h2 class="bar">Latest Tezos Headlines</h2>
        <div class="nav flex">
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
    </div>
    <div
      class="
        post-carousel
        swiper-container
        text-white
        swiper-container-initialized
        swiper-container-horizontal
        swiper-container-pointer-event
      "
    >
      <div
        class="swiper-wrapper"
        style="transition-duration: 0ms; transform: translated: translate3d(-1003.2px, 0px, 0px);"
      >
        <div
          v-for="rssItem of rssItems"
          :key="rssItem.title"
          class="swiper-slide"
        >
          <a
            class="inner flex items-center justify-center"
            :href="rssItem.link"
            target="_blank"
          >
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488.85 291.4"
              >
                <path
                  d="M244.43 0C151 0 66.32 51.1 3.82 134.1a19.38 19.38 0 000 23.1C66.32 240.3 151 291.4 244.43 291.4S422.53 240.3 485 157.3a19.35 19.35 0 000-23.1C422.52 51.1 337.83 0 244.43 0zm6.7 248.3A102.89 102.89 0 01141.82 139c3.2-51.2 44.7-92.7 95.91-95.9A102.89 102.89 0 01347 152.4c-3.27 51.1-44.77 92.6-95.87 95.9zM248 200.9a55.36 55.36 0 1151.7-51.7 55.28 55.28 0 01-51.7 51.7z"
                />
              </svg>
            </div>
            <h4 class="bar">{{ rssItem.title }}</h4>
            <div class="label absolute top-0 right-0 bg-gray-dark text-xl flex">
              <div
                class="
                  i
                  bg-blue
                  hover:bg-white
                  w-12
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984.7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256s-.7 7.8-1.2 11.6l94.68 47.34C302.8 298.3 326.1 288 352 288c53 0 96 42.1 96 96z"
                  />
                </svg>
              </div>
              <span>Category</span>
            </div>
            <div class="image absolute top-0 left-0 w-full h-full z-0">
              <img src="~/assets/images/cat-item.jpg" />
            </div>
          </a>
        </div>
      </div>
      <!-- <div class="swiper-slide">
          <a
            class="inner flex items-center justify-center"
            href="https://xtz.news/category/latest-tezos-news/"
            target="_blank"
          >
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488.85 291.4"
              >
                <path
                  d="M244.43 0C151 0 66.32 51.1 3.82 134.1a19.38 19.38 0 000 23.1C66.32 240.3 151 291.4 244.43 291.4S422.53 240.3 485 157.3a19.35 19.35 0 000-23.1C422.52 51.1 337.83 0 244.43 0zm6.7 248.3A102.89 102.89 0 01141.82 139c3.2-51.2 44.7-92.7 95.91-95.9A102.89 102.89 0 01347 152.4c-3.27 51.1-44.77 92.6-95.87 95.9zM248 200.9a55.36 55.36 0 1151.7-51.7 55.28 55.28 0 01-51.7 51.7z"
                />
              </svg>
            </div>
            <h4 class="bar">Latest News</h4>
            <div class="label absolute top-0 right-0 bg-gray-dark text-xl flex">
              <div
                class="
                  i
                  bg-blue
                  hover:bg-white
                  w-12
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984.7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256s-.7 7.8-1.2 11.6l94.68 47.34C302.8 298.3 326.1 288 352 288c53 0 96 42.1 96 96z"
                  />
                </svg>
              </div>
              <span>Category</span>
            </div>
            <div class="image absolute top-0 left-0 w-full h-full z-0">
              <img src="~/assets/images/cat-item.jpg" />
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a
            class="inner flex items-center justify-center"
            href="https://xtz.news/category/adoption/"
            target="_blank"
          >
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488.85 291.4"
              >
                <path
                  d="M244.43 0C151 0 66.32 51.1 3.82 134.1a19.38 19.38 0 000 23.1C66.32 240.3 151 291.4 244.43 291.4S422.53 240.3 485 157.3a19.35 19.35 0 000-23.1C422.52 51.1 337.83 0 244.43 0zm6.7 248.3A102.89 102.89 0 01141.82 139c3.2-51.2 44.7-92.7 95.91-95.9A102.89 102.89 0 01347 152.4c-3.27 51.1-44.77 92.6-95.87 95.9zM248 200.9a55.36 55.36 0 1151.7-51.7 55.28 55.28 0 01-51.7 51.7z"
                />
              </svg>
            </div>
            <h4 class="bar">Adoption</h4>
            <div class="label absolute top-0 right-0 bg-gray-dark text-xl flex">
              <div
                class="
                  i
                  bg-blue
                  hover:bg-white
                  w-12
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984.7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256s-.7 7.8-1.2 11.6l94.68 47.34C302.8 298.3 326.1 288 352 288c53 0 96 42.1 96 96z"
                  />
                </svg>
              </div>
              <span>Category</span>
            </div>
            <div class="image absolute top-0 left-0 w-full h-full z-0">
              <img src="~/assets/images/cat-item.jpg" />
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a
            class="inner flex items-center justify-center"
            href="https://xtz.news/category/digital-securities-news/"
            target="_blank"
          >
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488.85 291.4"
              >
                <path
                  d="M244.43 0C151 0 66.32 51.1 3.82 134.1a19.38 19.38 0 000 23.1C66.32 240.3 151 291.4 244.43 291.4S422.53 240.3 485 157.3a19.35 19.35 0 000-23.1C422.52 51.1 337.83 0 244.43 0zm6.7 248.3A102.89 102.89 0 01141.82 139c3.2-51.2 44.7-92.7 95.91-95.9A102.89 102.89 0 01347 152.4c-3.27 51.1-44.77 92.6-95.87 95.9zM248 200.9a55.36 55.36 0 1151.7-51.7 55.28 55.28 0 01-51.7 51.7z"
                />
              </svg>
            </div>
            <h4 class="bar">Digital Securities</h4>
            <div class="label absolute top-0 right-0 bg-gray-dark text-xl flex">
              <div
                class="
                  i
                  bg-blue
                  hover:bg-white
                  w-12
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984.7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256s-.7 7.8-1.2 11.6l94.68 47.34C302.8 298.3 326.1 288 352 288c53 0 96 42.1 96 96z"
                  />
                </svg>
              </div>
              <span>Category</span>
            </div>
            <div class="image absolute top-0 left-0 w-full h-full z-0">
              <img src="~/assets/images/cat-item.jpg" />
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a
            class="inner flex items-center justify-center"
            href="https://xtz.news/category/governance-news/"
            target="_blank"
          >
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488.85 291.4"
              >
                <path
                  d="M244.43 0C151 0 66.32 51.1 3.82 134.1a19.38 19.38 0 000 23.1C66.32 240.3 151 291.4 244.43 291.4S422.53 240.3 485 157.3a19.35 19.35 0 000-23.1C422.52 51.1 337.83 0 244.43 0zm6.7 248.3A102.89 102.89 0 01141.82 139c3.2-51.2 44.7-92.7 95.91-95.9A102.89 102.89 0 01347 152.4c-3.27 51.1-44.77 92.6-95.87 95.9zM248 200.9a55.36 55.36 0 1151.7-51.7 55.28 55.28 0 01-51.7 51.7z"
                />
              </svg>
            </div>
            <h4 class="bar">Governance</h4>
            <div class="label absolute top-0 right-0 bg-gray-dark text-xl flex">
              <div
                class="
                  i
                  bg-blue
                  hover:bg-white
                  w-12
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984.7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256s-.7 7.8-1.2 11.6l94.68 47.34C302.8 298.3 326.1 288 352 288c53 0 96 42.1 96 96z"
                  />
                </svg>
              </div>
              <span>Category</span>
            </div>
            <div class="image absolute top-0 left-0 w-full h-full z-0">
              <img src="~/assets/images/cat-item.jpg" />
            </div>
          </a>
        </div>
        <div class="swiper-slide">
          <a
            class="inner flex items-center justify-center"
            href="https://xtz.news/category/opinion/"
            target="_blank"
          >
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488.85 291.4"
              >
                <path
                  d="M244.43 0C151 0 66.32 51.1 3.82 134.1a19.38 19.38 0 000 23.1C66.32 240.3 151 291.4 244.43 291.4S422.53 240.3 485 157.3a19.35 19.35 0 000-23.1C422.52 51.1 337.83 0 244.43 0zm6.7 248.3A102.89 102.89 0 01141.82 139c3.2-51.2 44.7-92.7 95.91-95.9A102.89 102.89 0 01347 152.4c-3.27 51.1-44.77 92.6-95.87 95.9zM248 200.9a55.36 55.36 0 1151.7-51.7 55.28 55.28 0 01-51.7 51.7z"
                />
              </svg>
            </div>
            <h4 class="bar">Opinion</h4>
            <div class="label absolute top-0 right-0 bg-gray-dark text-xl flex">
              <div
                class="
                  i
                  bg-blue
                  hover:bg-white
                  w-12
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    d="M448 384c0 53.02-42.98 96-96 96s-96-42.98-96-96c0-3.984.7012-7.776 1.174-11.63l-94.68-47.34C145.2 341.7 121.9 352 96 352c-53.02 0-96-42.98-96-96s42.98-96 96-96c25.86 0 49.23 10.34 66.5 26.97l94.68-47.34C256.7 135.8 256 131.1 256 128c0-53.02 42.98-96 96-96s96 42.98 96 96-42.98 96-96 96c-25.86 0-49.23-10.34-66.5-26.97l-94.68 47.34C191.3 248.2 192 252 192 256s-.7 7.8-1.2 11.6l94.68 47.34C302.8 298.3 326.1 288 352 288c53 0 96 42.1 96 96z"
                  />
                </svg>
              </div>
              <span>Category</span>
            </div>
            <div class="image absolute top-0 left-0 w-full h-full z-0">
              <img src="~/assets/images/cat-item.jpg" />
            </div>
          </a>
        </div>
      </div> -->
    </div>
    <div class="w-full flex justify-center text-right mt-12">
      <div class="w-full lg:w-5/6">
        <a class="btn btn-block" href="#">
          <span>View More</span>
          <div class="box">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.854 34.854">
              <path d="M.354 34.5l34-34" stroke-width="5" />
              <path d="M3.75.5h30.6v27.665" stroke-width="8" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation])

export default {
  data() {
    return {
      rssItems: [],
    }
  },
  mounted() {
    this.getRSS()
    this.createSwiper()
    console.log('mounted', this.rssItems)
    this.updateSwiper()
  },
  methods: {
    async getRSS() {
      console.log('RSS')
      const self = this
      const RSS_URL =
        // 'https://cors-anywhere.herokuapp.com/https://xtz.news/feed/'
        'https://xtz.news/feed/'
      const res = await fetch(RSS_URL)
      const content = await res.text()
      const parser = new DOMParser()
      const xml = parser.parseFromString(content, 'application/xml')
      let items = xml.querySelectorAll('item')
      items = [...items].map((el) => ({
        title: el.querySelector('title').innerHTML,
        link: el.querySelector('link').innerHTML,
      }))
      self.rssItems = items
      console.log('methods', self.rssItems)
      this.updateSwiper()
      setTimeout(this.updateSwiper(), 1000)
    },
    updateSwiper() {
      this.swiper.update()
      console.log('updated')
    },
    createSwiper() {
      this.swiper = new SwiperCore('.post-carousel', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 22,
        centeredSlides: true,
        navigation: {
          nextEl: '.post-carousel-nav .next',
          prevEl: '.post-carousel-nav .prev',
        },
        breakpoints: {
          540: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper-slide {
  .inner {
    @apply relative bg-gray;
    padding-bottom: 100%;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      @apply bg-blue;
      z-index: 2;
      transition: 0.3s all;
      opacity: 0;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgb(25, 20, 20);
      background: linear-gradient(
        0deg,
        rgba(25, 20, 20, 0.9) 0%,
        rgba(25, 20, 20, 0) 70%
      );
      z-index: 1;
      transition: 0.3s all;
    }

    img {
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      &:before {
        opacity: 0.7;
      }

      .icon {
        &:before,
        &:after {
          transform: scale(1, 1);
        }
        svg {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
  }
}

.icon {
  width: 6.4rem;
  height: 6.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.5s;
  }

  &:before {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    transform: scale(1, 0);
  }

  &:after {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: scale(0, 1);
  }

  svg {
    fill: #fff;
    width: 3.8rem;
    transform: scale(0.8);
    opacity: 0;
    transition: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) all;
  }
}

h4 {
  position: absolute;
  bottom: 1rem;
  left: 3rem;
  z-index: 3;
}

.label {
  z-index: 3;
  span {
    padding: 0.4rem 1.2rem;
  }

  .i {
    transition: 0.3s all;
    padding: 0.4rem;
    svg {
      fill: #fff;
      transition: 0.3s all;
      width: 1.3rem;
    }
    &:hover {
      svg {
        fill: #2c7df7;
      }
    }
  }
}

.post-carousel-nav {
  .prev,
  .next {
    color: #fff;
    height: 2.4em;
    padding: 2.4rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    @apply dark:bg-blue;

    svg {
      width: 1rem;
      fill: #191414;
      transition: 0.3s all;
      @apply dark:fill-current;
    }

    &:hover {
      @apply bg-blue dark:bg-white dark:text-blue;
      svg {
        fill: #fff;
        @apply dark:fill-current;
      }
    }
  }

  .prev {
    justify-content: flex-end;
  }
}
</style>
