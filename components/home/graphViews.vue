<template>
  <section class="flex flex-wrap px-6">
    <div class="w-full flex flex-col">
      <div class="bg-blue text-white text-center px-8 py-6 mb-3">
        <h1>XTZ Live - The Tezos Defi Tokenomics Hub</h1>
      </div>
      <div class="graph-tabs flex flex-wrap flex-1">
        <ul class="tabs font-bold w-full lg:w-1/4 flex flex-col">
          <li
            class="tab flex flex-col items-center justify-center my-3 flex-1"
            :class="[
              active == 1
                ? 'bg-blue text-white'
                : 'bg-gray-light dark:bg-blue-dark dark:text-white',
            ]"
            @click="active = 1"
          >
            <div class="inner">
              <span>Tezos Price (USD)</span>
              <div class="num bar">$ {{ parseFloat(xtzPrice).toFixed(2) }}</div>
            </div>
          </li>
          <li
            class="tab flex flex-col items-center justify-center my-3 flex-1"
            :class="[
              active == 2
                ? 'bg-blue text-white'
                : 'bg-gray-light dark:bg-blue-dark dark:text-white',
            ]"
          >
            <div class="inner">
              <span>Total Value</span>
              <div class="num bar">$ {{ xtzVolume }} K</div>
            </div>
          </li>
          <li
            class="tab flex flex-col items-center justify-center my-3 flex-1"
            :class="[
              active == 3
                ? 'bg-blue text-white'
                : 'bg-gray-light dark:bg-blue-dark dark:text-white',
            ]"
          >
            <div class="inner">
              <span>Total Tezos Token Market Cap</span>
              <div class="num bar">$ {{ xtzMarketCap }} M</div>
            </div>
          </li>
        </ul>
        <div
          class="
            graph-container
            relative
            w-full
            lg:w-3/4 lg:ml-6
            my-3
            px-12
            py-10
            flex-1
            bg-gray-light
            dark:bg-blue-dark
          "
        >
          <div
            class="graph absolute top-0 left-0 h-full w-full flex flex-col"
            :class="[
              active == 1 ? 'opacity-100 visible' : 'opacity-0 invisible',
            ]"
          >
            <div
              class="
                title
                flex flex-wrap
                items-center
                justify-between
                dark:text-white
              "
            >
              <h5>Tezos Price (USD)</h5>
              <ul class="time flex items-center ml-8 mt-8 lg:mt-0">
                <li
                  :class="[
                    activeTime == '24h'
                      ? 'text-blue dark:text-white dark:underline'
                      : 'dark:text-white',
                  ]"
                  @click="zoomGraph('24h')"
                >
                  24h
                </li>
              </ul>
            </div>
            <div class="chart flex-1 pt-3">
              <no-ssr>
                <ApexChart
                  ref="tvl"
                  width="100%"
                  height="100%"
                  type="candlestick"
                  :options="chartOptions"
                  :series="[{ data: xtzPriceArray }]"
                ></ApexChart>
              </no-ssr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      xtzPriceArray: '',
      xtzPrice: '',
      xtzMarketCap: '',
      xtzVolume: '',
      timer: '',
      active: 1,
      activeFive: 1,
      activeTime: 'all',
      chartOptions: {
        chart: {
          id: 'tvl',
          fontFamily: 'Cera Pro, sans-serif',
          foreColor: '#000',
          toolbar: {
            tools: {
              download: false,
              selection: false,
              zoom: false,
              pan: false,
              reset: false,
            },
          },
        },
        title: {
          text: 'Tezos Price',
          offsetY: 14,
          margin: 0,
          style: {
            fontSize: '1.3rem',
            fontWeight: 'regular',
            color: '#000',
          },
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            show: false,
          },
          labels: {
            rotate: 0,
            style: {
              fontSize: '1rem',
            },
            datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM.',
              hour: 'HH:mm',
            },
          },
          tooltip: {
            style: {
              fontSize: '1rem',
            },
          },
          crosshairs: {
            stroke: {
              dashArray: 7,
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          crosshairs: {
            stroke: {
              dashArray: 7,
            },
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#27e4bb',
              downward: '#f3566b',
            },
          },
        },
        grid: {
          borderColor: '#c8c8c8',
          strokeWidth: '2',
          strokeDashArray: 14,
          xaxis: {
            lines: {
              show: true,
            },
          },
        },
        tooltip: {
          enabled: true,
          theme: 'dark',
        },
      },
      series: [
        {
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
          ],
        },
      ],
    }
  },
  created() {
    this.fetchXtzPrice()
    this.timer = setInterval(this.fetchXtzPrice, 600000)
    this.fetchCandleData()
    console.log('graph', this.xtzPriceArray)
  },
  methods: {
    async fetchCandleData() {
      const xtzPriceArray = await fetch(
        `API URL`
      ).then((res) => res.json())
      this.xtzPriceArray = await xtzPriceArray
      this.xtzPriceArray = eval(
        JSON.stringify(this.xtzPriceArray).replace(/['"]+/g, '')
      )
      console.log(this.xtzPriceArray)
    },
    async fetchXtzPrice() {
      const xtzPrice = await fetch(
        `https://api.teztools.io/token/xtz-price`
      ).then((res) => res.json())
      this.xtzPrice = await xtzPrice.price
      this.xtzMarketCap = await xtzPrice.marketCap
      const twoStr = String(this.xtzMarketCap).slice(0, 2)
      this.xtzMarketCap = twoStr
      this.xtzVolume = await xtzPrice.volume
      const threeStr = String(this.xtzVolume).slice(0, 2)
      this.xtzVolume = threeStr
    },
    zoomGraph(time) {
      this.activeTime = time
      return time === '24h'
        ? this.$refs.tvl.zoomX(
            new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).getTime(),
            new Date().getTime()
          )
        : time === '7d'
        ? this.$refs.tvl.zoomX(
            new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getTime(),
            new Date().getTime()
          )
        : time === '30d'
        ? this.$refs.tvl.zoomX(
            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).getTime(),
            new Date().getTime()
          )
        : time === '1y'
        ? this.$refs.tvl.zoomX(
            new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).getTime(),
            new Date().getTime()
          )
        : this.$refs.tvl.resetSeries()
    },
  },
}
</script>
<style lang="scss" scoped>
h2 {
  font-size: 2.4rem;
}
.time {
  font-size: 1.3rem;
  li {
    transition: 0.3s all;
    @apply p-3 cursor-pointer hover:text-blue-light;
  }
}
.tabs {
  .tab {
    height: 20vh;
    cursor: pointer;
    transition: 0.3s all;
    &:hover {
      @apply bg-blue-light text-white;
      .bar {
        &:before {
          @apply bg-white;
        }
      }
    }
    &.bg-blue {
      .bar {
        &:before {
          @apply bg-white;
        }
      }
    }
    span {
      @apply block capitalize;
    }
    .num {
      font-family: Cera Pro, sans-serif;
      font-size: 3.4rem;
      font-weight: bold;
      @screen lg {
        font-size: 5.4rem;
      }
    }
  }
}
.graph-container {
  .graph {
    transition: 0.3s all;
    padding: inherit;
  }
}
.graph-tabs {
  .graph-container {
    min-height: 64.2rem;
  }
}
.top-5-tabs {
  .graph-container {
    min-height: 28rem;
  }
  .tab {
    height: auto;
    position: relative;
    .abb {
      @apply uppercase;
    }
    &:not(:last-child) {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 2.5rem;
        width: calc(100% - 5rem);
        height: 1px;
        background: #d6d5d5;
      }
    }
    &.bg-blue {
      &:after {
        @apply bg-blue;
      }
    }
    .icon {
      img {
        width: 4rem;
      }
    }
  }
}
</style>
