<template>
  <div class="swiper-slide py-8 px-6 bg-white font-bold">
    <div class="head border-b border-gray-dark flex items-center pb-6 px-4">
      <div
        class="
          icon
          w-20
          h-20
          flex
          items-center
          justify-center
          bg-orange
          text-white
          mr-6
        "
      >
        <img :src="iconUrl" class="invert" />
      </div>
      <h3 class="uppercase">{{ type }} Coins</h3>
    </div>
    <div class="coins">
      <div class="coin flex items-center py-6">
        <div class="icon px-4">
          <img src="~/assets/icons/fallback.svg" />
        </div>
        <div class="title flex flex-col px-4 flex-1">
          <span class="full capitalize">{{ tokenArray.Token }}</span>
        </div>
        <div class="val flex flex-col px-4 text-right">
          <span class="actual text-3xl">{{ tokenArray.Price }}</span>
          <span class="move text-lg text-green">{{
            tokenArray.TwentyFourhr
          }}</span>
        </div>
      </div>
      <div class="coin flex items-center py-6">
        <div class="icon px-4">
          <img src="~/assets/icons/fallback.svg" />
        </div>
        <div class="title flex flex-col px-4 flex-1">
          <span class="full capitalize">{{ tokenArray1.Token }}</span>
        </div>
        <div class="val flex flex-col px-4 text-right">
          <span class="actual text-3xl">{{ tokenArray1.Price }}</span>
          <span class="move text-lg text-red">{{
            tokenArray1.TwentyFourhr
          }}</span>
        </div>
      </div>
      <div class="coin flex items-center py-6">
        <div class="icon px-4">
          <img src="~/assets/icons/fallback.svg" />
        </div>
        <div class="title flex flex-col px-4 flex-1">
          <span class="full capitalize">{{ tokenArray2.Token }}</span>
        </div>
        <div class="val flex flex-col px-4 text-right">
          <span class="actual text-3xl">{{ tokenArray2.Price }}</span>
          <span class="move text-lg text-green">{{
            tokenArray2.TwentyFourhr
          }}</span>
        </div>
      </div>
      <div class="coin flex items-center py-6">
        <div class="icon px-4">
          <img src="~/assets/icons/fallback.svg" />
        </div>
        <div class="title flex flex-col px-4 flex-1">
          <span class="full capitalize">{{ tokenArray3.Token }}</span>
        </div>
        <div class="val flex flex-col px-4 text-right">
          <span class="actual text-3xl">{{ tokenArray3.Price }}</span>
          <span class="move text-lg text-red">{{
            tokenArray3.TwentyFourhr
          }}</span>
        </div>
      </div>
      <div class="coin flex items-center py-6">
        <div class="icon px-4">
          <img src="~/assets/icons/fallback.svg" />
        </div>
        <div class="title flex flex-col px-4 flex-1">
          <span class="full capitalize">{{ tokenArray4.Token }}</span>
        </div>
        <div class="val flex flex-col px-4 text-right">
          <span class="actual text-3xl">{{ tokenArray4.Price }}</span>
          <span class="move text-lg text-green">{{
            tokenArray4.TwentyFourhr
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tokenArray: '',
      tokenArray1: '',
      tokenArray2: '',
      tokenArray3: '',
      tokenArray4: '',
    }
  },
  async created() {
    const responce = await fetch('API URL')
    const data = await responce.json()
    this.tokenArray = data[0]
    this.tokenArray1 = data[1]
    this.tokenArray2 = data[2]
    this.tokenArray3 = data[3]
    this.tokenArray4 = data[4]
  },
  props: {
    type: {
      type: String,
      default: 'nft',
    },
    token: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    iconUrl() {
      try {
        return require(`~/assets/icons/${this.type}.svg`)
      } catch (e) {
        return require(`~/assets/icons/fallback.svg`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.head {
  .icon {
    img {
      max-width: 3.3rem;
      max-height: 3.3rem;
      object-fit: contain;
    }
  }
}

.coin {
  &:not(:last-child) {
    border-bottom: 1px solid #d6d5d5;
  }

  .icon {
    img {
      width: 4rem;
    }
  }
}
</style>
