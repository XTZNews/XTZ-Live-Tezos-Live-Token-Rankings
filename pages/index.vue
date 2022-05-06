<template>
  <section>
    <!-- <graphViews /> -->
    <liveRanking />
    <!-- <liveCategories /> -->
    <!-- <liveUsage /> -->
    <!-- <postCarousel /> -->
  </section>
</template>

<script>
// import graphViews from '~/components/home/graphViews'
import liveRanking from '~/components/home/liveRanking'
// import liveCategories from '~/components/home/liveCategories'
// import liveUsage from '~/components/home/liveUsage'
// import postCarousel from '~/components/home/postCarousel'

export default {
  components: {
    // graphViews,
    liveRanking,
    // liveCategories,
    // liveUsage,
    // postCarousel,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
