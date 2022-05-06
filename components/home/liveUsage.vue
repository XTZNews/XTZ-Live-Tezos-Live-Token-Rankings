<template>
  <section class="my-24 px-6">
    <div class="flex justify-center dark:text-white">
      <div class="w-full lg:w-5/6">
        <h2 class="bar">Live tezos token usage</h2>
        <div
          class="desc-toggles flex flex-wrap items-center justify-between mt-8"
        >
          <div class="desc w-full lg:w-3/5 normal-case font-medium">
            <p>
              Check out the XTZ live buvf ranking. Which stand for balance,
              users, volume and fees.
            </p>
            <p>
              These metrics are sorted by users as default. But you can sort by
              each of buvf areas.
            </p>
          </div>
          <ul
            class="
              toggles
              time
              flex-1 flex
              items-center
              justify-end
              mt-8
              lg:mt-0
            "
          >
            <li class="active">24 Hours</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-wrap justify-center text-right mt-4 lg:mt-12">
      <div class="w-full lg:w-5/6">
        <div id="usageGrid"></div>
      </div>
      <div class="w-full lg:w-5/6 mt-2">
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
import Chartist from 'chartist'
import { Grid, html, h, createRef as gCreateRef } from 'gridjs'
import 'gridjs/dist/theme/mermaid.css'

export default {
  data() {
    return {
      tokenArray: '',
      usageGrid: '',
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
  async created() {
    const responce = await fetch('API URL')
    const data = await responce.json()
    this.tokenArray = data
    console.log('created2', this.tokenArray)
  },
  mounted() {
    this.usageGrid = new Grid({
      columns: [
        'Token',
        'Category',
        'Protocol',
        {
          name: 'Users',
          formatter: (cell) => {
            return h(
              'div',
              {
                style: {
                  color: cell > 0 ? '#27e4bb' : '#f3566b',
                },
              },
              html(`<span>$ ${cell}</span>${cell} %`)
            )
          },
        },
        {
          name: 'Volume',
          formatter: (cell) => `$ ${cell}`,
        },
        'Fees',
        {
          name: 'Activity',
          sort: false,
          formatter: (cell) => {
            const ref = gCreateRef()
            const chart = h('div', { ref })

            setTimeout(() => {
              ref.current &&
                new Chartist.Line(
                  ref.current,
                  {
                    series: [cell],
                  },
                  this.chartOpts
                )
            }, 0)

            return chart
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
        url: 'URL API',
        then: (data) =>
          data.map((card) => [
            card.Token,
            card.Category,
            card.Protocol,
            card.Price,
            card.Liquidity,
            card.Supply,
            card.LastSeven,
          ]),
        handle: (res) => {
          if (res.status === 404) return { data: [] }
          if (res.ok) return res.json()
          throw new Error('error')
        },
      },
    }).render(document.querySelector('#usageGrid'))
    this.updateUsage()
  },
  methods: {
    updateUsage() {
      setTimeout(() => {
        this.usageGrid
          .updateConfig({
            data: [
              [
                1,
                this.tokenArray[0].Token,
                this.tokenArray[0].Category,
                this.tokenArray[0].Protocol,
                this.tokenArray[0].Price,
                this.tokenArray[0].Supply,
                this.tokenArray[0].LastSeven,
              ],
              [
                2,
                this.tokenArray[1].Token,
                this.tokenArray[1].Category,
                this.tokenArray[1].Protocol,
                this.tokenArray[1].Price,
                this.tokenArray[1].Supply,
                this.tokenArray[1].LastSeven,
              ],
              [
                3,
                this.tokenArray[2].Token,
                this.tokenArray[2].Category,
                this.tokenArray[2].Potocol,
                this.tokenArray[2].Price,
                this.tokenArray[2].Supply,
                this.tokenArray[2].LastSeven,
              ],
              [
                4,
                this.tokenArray[3].Token,
                this.tokenArray[3].Category,
                this.tokenArray[3].Protocol,
                this.tokenArray[3].Price,
                this.tokenArray[3].Supply,
                this.tokenArray[3].LastSeven,
              ],
              [
                5,
                this.tokenArray[4].Token,
                this.tokenArray[4].Category,
                this.tokenArray[4].Protocol,
                this.tokenArray[4].Price,
                this.tokenArray[4].Supply,
                this.tokenArray[4].LastSeven,
              ],
            ],
          })
          .forceRender()
      }, 5000)
    },
  },
}
</script>

<style lang="scss">
.desc {
  font-family: Cera Pro, sans-serif;
}

[data-column-id='users'] {
  > div > span {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    font-size: 1.3rem;
    font-weight: 400;

    > span:first-child {
      display: inline-block;
      color: initial;
      font-size: initial;
      font-weight: 500;
      line-height: 0.9;
    }
  }
}

.toggles {
  &.time {
    li {
      @apply mx-8 cursor-pointer;

      &:after {
        content: '';
        display: block;
        width: 0;
        height: 1px;
        @apply bg-blue;
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
</style>
