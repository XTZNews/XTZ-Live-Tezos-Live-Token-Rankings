<template>
  <main>
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        smooth: true,
        direction: 'vertical',
        // Other options
      }"
    >
      <div data-scroll-section class="dark:bg-gray-dark">
        <externalNav />
        <mainNav />
        <priceTicker />
        <Nuxt />
        <!-- <newsletter /> -->
        <footerNav />
        <internalNav />
      </div>
    </LocomotiveScroll>
    <scrollTop @scrollTop="$refs.scroller.locomotive.scrollTo(0)" />
  </main>
</template>

<script>
import externalNav from '~/components/common/externalNav'
import internalNav from '~/components/common/internalNav'
import mainNav from '~/components/common/mainNav'
import footerNav from '~/components/common/footerNav'
// import newsletter from '~/components/common/newsletter'
import priceTicker from '~/components/common/priceTicker'
import scrollTop from '~/components/common/scrollTop'

export default {
  components: {
    externalNav,
    internalNav,
    mainNav,
    footerNav,
    // newsletter,
    priceTicker,
    scrollTop,
  },
}
</script>

<style></style>
