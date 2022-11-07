/*
 * @Date: 2022-08-03 11:53:10
 * @LastEditors: kinfai
 * @Description: 常用时间
 * @LastEditTime: 2022-08-15 10:26:52
 * @FilePath: \neekde-merchants\src\hooks\curd\time.js
 */
import dayjs from "dayjs";

export default function useTime(format = "YYYY-MM-DD") {
  const todayData = dayjs().format(format);

  // 今天周期
  const totday = {
    start_date: todayData,
    end_date: todayData,
  };

  // 昨天周期
  const lastDay = {
    start_date: dayjs().subtract(1, "day").format(format),
    end_date: dayjs().subtract(1, "day").format(format),
  };

  // 七天周期
  const sevenDay = {
    start_date: dayjs().subtract(6, "day").format(format),
    end_date: todayData,
  };

  // 本月周期
  const monthTime = {
    start_date: dayjs().startOf("month").format(format),
    end_date: dayjs().endOf("month").format(format),
  };

  // 90天周期
  const ninetyTime = {
    start_date: dayjs().subtract(89, "day").format(format),
    end_date: todayData,
  };

  // 全部
  const allTime = {
    start_date: "2022/01/01",
    end_date: todayData,
  };

  const timeSheet = {
    0: allTime,
    1: totday,
    2: lastDay,
    3: monthTime,
    4: ninetyTime,
  };

  // 返回指定区间 - 格式
  const getRangeTime = (day = 30, fm = "YYYY-MM-DD") => {
    const result = [];
    for (let index = 0; index < day; index++) {
      result.unshift(dayjs().subtract(index, "day").format(fm));
    }

    return result;
  };

  return {
    totday,
    lastDay,
    sevenDay,
    monthTime,
    ninetyTime,
    allTime,
    timeSheet,
    getRangeTime,
  };
}
