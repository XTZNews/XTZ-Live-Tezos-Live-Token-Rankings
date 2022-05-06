<template>
  <div class="swiper-slide">
    {{ coin }} - <span class="price">$6.68 (+0.02%)</span>
  </div>
</template>

<script>
export default {
  props: { coin: { type: String, default: 'xtz' } },
}
</script>
