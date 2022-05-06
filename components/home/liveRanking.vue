<template>
  <section class="my-24 px-6">
    <div class="flex justify-center text-center dark:text-white">
      <div class="w-full lg:w-5/6">
        <h2 class="bar">Live tezos token ranking</h2>
      </div>
    </div>
    <div class="w-full flex flex-wrap justify-center text-right mt-12">
      <div class="w-full lg:w-5/6">
        <div id="rankingGrid"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { Grid, h } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'

export default {
  data() {
    return {
      tokenArray: '',
      rankingGrid: '',
      chartOpts: {
        height: '5.2rem',
        showPoint: true,
        fullWidth: true,
        chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        axisX: { showGrid: false, showLabel: false, offset: 0 },
        axisY: { showGrid: false, showLabel: false, offset: 0 },
      },
    }
  },
  mounted() {
    this.rankingGrid = new Grid({
      columns: [
        'Rank',
        'Name',
        'Token',
        {
          name: 'Price',
          formatter: (cell) => `$ ${cell}`,
        },
        {
          name: '24hr',
          formatter: (cell) => {
            return h(
              'div',
              {
                style: {
                  color: cell > 0 ? '#27e4bb' : '#f3566b',
                },
              },
              `${cell} %`
            )
          },
        },
        {
          name: '7 day',
          formatter: (cell) => {
            return h(
              'b',
              {
                style: {
                  color: cell > 0 ? '#27e4bb' : '#f3566b',
                },
              },
              `${cell} %`
            )
          },
        },
        {
          name: '30 day',
          formatter: (cell) => {
            return h(
              'b',
              {
                style: {
                  color: cell > 0 ? '#27e4bb' : '#f3566b',
                },
              },
              `${cell} %`
            )
          },
        },
        {
          name: 'Fully Diluted Value (FDV)',
          formatter: (cell) => {
            const nf = new Intl.NumberFormat('en-US')
            if (cell > 1000000 && cell < 1000000000) {
              const value = (cell / 1000000).toFixed(1)
              return '$' + nf.format(value) + 'M'
            } else if (cell > 1000000000) {
              const value = (cell / 1000000000).toFixed(0)
              return '$' + nf.format(value) + 'B'
            } else {
              const value = cell.toFixed(0)
              return '$' + nf.format(value)
            }
          },
        },
        {
          name: 'Liquidity',
          formatter: (cell) => {
            const stringy = cell.toFixed(0)
            const nf = new Intl.NumberFormat('en-US')
            return '$' + nf.format(stringy)
          },
        },
      ],
      sort: true,
      fixedHeader: true,
      style: {
        table: {
          width: '100%',
          whiteSpace: 'nowrap',
          fontFamily: 'Cera Pro, sans-serif',
          fontWeight: '500',
          textTransform: 'capitalize',
          textAlign: 'center',
        },
        th: {
          background: '#2c7df7',
          color: '#fff',
          padding: '0.6rem 1.5rem',
          border: 'none',
        },
        td: {
          border: 'none',
          padding: '1rem 1.5rem',
          background: 'transparent',
        },
      },
      server: {
        url: 'API URL',
        then: (data) =>
          data.map((card, index) => [
            index + 1,
            card.Name,
            card.Token,
            card.Price,
            card.TwentyFourHr,
            card.SevenDays,
            card.MonthClose,
            card.Market,
            card.Liquidity,
          ]),
        handle: (res) => {
          if (res.status === 404) return { data: [] }
          if (res.ok) return res.json()
          throw new Error('error')
        },
      },
    }).render(document.querySelector('#rankingGrid'))
  },
  methods: {
    updateRankings() {
      setTimeout(() => {
        document.querySelector('#rankingGrid .gridjs').style.height =
          document.querySelector('#rankingGrid .gridjs').offsetHeight + 'px'
      }, 100)
      setTimeout(() => {
        this.rankingGrid
          .updateConfig({
            data: [
              [
                1,
                this.tokenArray[0].Token,
                this.tokenArray[0].Price,
                this.tokenArray[0].TwentyFourhr,
                this.tokenArray[0].SevenDays,
                this.tokenArray[0].Market,
                this.tokenArray[0].Liquidity,
                this.tokenArray[0].LastSeven,
              ],
              [
                2,
                this.tokenArray[1].Token,
                this.tokenArray[1].Price,
                this.tokenArray[1].TwentyFourhr,
                this.tokenArray[1].SevenDays,
                this.tokenArray[1].Market,
                this.tokenArray[1].Liquidity,
                this.tokenArray[1].LastSeven,
              ],
              [
                3,
                this.tokenArray[2].Token,
                this.tokenArray[2].Price,
                this.tokenArray[2].TwentyFourhr,
                this.tokenArray[2].SevenDays,
                this.tokenArray[2].Market,
                this.tokenArray[2].Liquidity,
                this.tokenArray[2].LastSeven,
              ],
              [
                4,
                this.tokenArray[3].Token,
                this.tokenArray[3].Price,
                this.tokenArray[3].TwentyFourhr,
                this.tokenArray[3].SevenDays,
                this.tokenArray[3].Market,
                this.tokenArray[3].Liquidity,
                this.tokenArray[3].LastSeven,
              ],
              [
                5,
                this.tokenArray[4].Token,
                this.tokenArray[4].Price,
                this.tokenArray[4].TwentyFourhr,
                this.tokenArray[4].SevenDays,
                this.tokenArray[4].Market,
                this.tokenArray[4].Liquidity,
                this.tokenArray[4].LastSeven,
              ],
            ],
          })
          .forceRender()
      }, 3000)
    },
    newGrid() {
      console.log('clicked')
      console.log(this.tokenArray[5].Token)
      this.rankingGrid
        .updateConfig({
          data: [
            [
              this.tokenArray[0].Token,
              this.tokenArray[0].Price,
              this.tokenArray[0].TwentyFourhr,
              this.tokenArray[0].SevenDays,
              this.tokenArray[0].Market,
              this.tokenArray[0].Liquidity,
              this.tokenArray[0].Supply,
              this.tokenArray[0].LastSeven,
            ],
            [
              this.tokenArray[1].Token,
              this.tokenArray[1].Price,
              this.tokenArray[1].TwentyFourhr,
              this.tokenArray[1].SevenDays,
              this.tokenArray[1].Market,
              this.tokenArray[1].Liquidity,
              this.tokenArray[1].Supply,
              this.tokenArray[1].LastSeven,
            ],
            [
              this.tokenArray[2].Token,
              this.tokenArray[2].Price,
              this.tokenArray[2].TwentyFourhr,
              this.tokenArray[2].SevenDays,
              this.tokenArray[2].Market,
              this.tokenArray[2].Liquidity,
              this.tokenArray[2].Supply,
              this.tokenArray[2].LastSeven,
            ],
            [
              this.tokenArray[3].Token,
              this.tokenArray[3].Price,
              this.tokenArray[3].TwentyFourhr,
              this.tokenArray[3].SevenDays,
              this.tokenArray[3].Market,
              this.tokenArray[3].Liquidity,
              this.tokenArray[3].Supply,
              this.tokenArray[3].LastSeven,
            ],
            [
              this.tokenArray[4].Token,
              this.tokenArray[4].Price,
              this.tokenArray[4].TwentyFourhr,
              this.tokenArray[4].SevenDays,
              this.tokenArray[4].Market,
              this.tokenArray[4].Liquidity,
              this.tokenArray[4].Supply,
              this.tokenArray[4].LastSeven,
            ],
            [
              this.tokenArray[5].Token,
              this.tokenArray[5].Price,
              this.tokenArray[5].TwentyFourhr,
              this.tokenArray[5].SevenDays,
              this.tokenArray[5].Market,
              this.tokenArray[5].Liquidity,
              this.tokenArray[5].Supply,
              this.tokenArray[5].LastSeven,
            ],
          ],
        })
        .forceRender()
    },
  },
}
</script>
