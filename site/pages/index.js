import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

export const getStaticProps = async () => {
  const data = {
    today: [1, 4, 2],
    week: [1, 4, 2],
    month: [1, 4, 2]
  }

  return {
    props: {
      data
    },
    revalidate: 300
  }
}

export default function Home ({ data }) {
  const chartRef = useRef()

  useEffect(() => {
    const myChart = echarts.init(chartRef.current)

    const option = {
      title: {
        text: 'ECharts entry example'
      },
      tooltip: {},
      legend: {
        data: ['Sales']
      },
      xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
      },
      yAxis: {},
      series: [{
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }

    // use configuration item and data specified to show chart
    myChart.setOption(option)
  })

  return (
    <main>
      {
        Object.keys(data).map(function (key) {
          return (<li key={key}>{key}</li>)
        })
      }
      <br />
      <div ref={chartRef} style={{ width: 600, height: 400 }} />
    </main>
  )
}
