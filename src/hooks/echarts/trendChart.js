/*
 * @Date: 2022-05-31 18:09:09
 * @LastEditors: kinfai
 * @Description: 询盘/访客趋势
 * @LastEditTime: 2022-06-01 10:40:00
 * @FilePath: \neekde-merchants\src\hooks\echarts\trendChart.js
 */
import { reactive } from "vue";
import * as echarts from "echarts";

export default function useTrendChart(chartId = "g-trend-chart") {
  const option = reactive({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["询盘", "访客"],
    },
    grid: {
      left: "1%",
      right: "4%",
      bottom: "0",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "五月1日",
        "五月2日",
        "五月3日",
        "五月4日",
        "五月5日",
        "五月6日",
        "五月7日",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "询盘",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "访客",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
      },
    ],
  });

  const initBrokenLine = () => {
    const myChart = echarts.init(document.getElementById(chartId));
    myChart.setOption(option);

    window.onresize = function () {
      myChart.resize();
      console.log("页面发生变化");
    };
  };

  return {
    initBrokenLine,
    option,
  };
}
