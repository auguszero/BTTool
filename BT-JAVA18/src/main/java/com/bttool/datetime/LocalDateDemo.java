package com.bttool.datetime;

import java.time.LocalDate;
import java.time.Month;
import java.time.format.DateTimeFormatter;

public class LocalDateDemo {

    public static void main(String[] args) {
        //===============================================================================
        // 1、获取当前日期
        //===============================================================================
        LocalDate localDate = LocalDate.now();
        System.out.println(localDate); // 2018-07-23

        //===============================================================================
        // 2、构造LocalDate
        //===============================================================================
        CharSequence text = "2010-10-10";
        System.out.println(LocalDate.parse(text)); // 2010-10-10
        CharSequence date = "20101010";
        System.out.println(LocalDate.parse(date,DateTimeFormatter.BASIC_ISO_DATE));// 2010-10-10
        // 自定义对应格式的转换，JDK1.8给出了预定义的格式化 DateTimeFormatter.BASIC_ISO_DATE 就是其中之一
        CharSequence myDate = "2010年10月10日";
        System.out.println(LocalDate.parse(myDate,DateTimeFormatter.ofPattern("yyyy年MM月dd日"))); // 2010-10-10
        // 预定义格式没有的情况，也可以自定义
        System.out.println(LocalDate.of(2010, 10, 10));// 2010-10-10
        // 给出int类型对应的 年月日，亦可构造出LocalDate对象
        System.out.println(LocalDate.of(2010, Month.JULY, 10));// 2010-07-10
        // 月份亦可给出对应 Mouth 枚举
        System.out.println(LocalDate.ofEpochDay(123)); // 1970-05-04
        // 给出日子，计算出 从 1970-01-01 对应日子后的日期
        System.out.println(LocalDate.ofYearDay(2010, 163)); //2010-06-12
        // 传入 年，日数，计算出 对应该年份 对应日子后的日期

        //===============================================================================
        // 3、获取，年，月，日
        //===============================================================================
        System.out.println(localDate.getMonth()); // JULY  返回英文月份，对应 Mouth 枚举
        System.out.println(localDate.getMonthValue()); // 7  返回数字月份
        System.out.println(localDate.getYear()); // 2018  返回对应年
        System.out.println(localDate.getDayOfMonth()); // 23  返回对应月份中的日子
        System.out.println(localDate.getDayOfWeek()); // MONDAY  返回对应星期，对应 DayOfWeek 枚举
        System.out.println(localDate.getDayOfYear()); // 204 返回对应年份中的日子
        System.out.println(localDate.lengthOfMonth()); // 31 对应该月份有多少天
        System.out.println(LocalDate.parse("2004-02-10").lengthOfMonth());
        // 29 证明可以自动判断是否为闰年！！！
        System.out.println(localDate.lengthOfYear()); // 365 对应年份有多少天
        System.out.println(LocalDate.parse("2004-02-10").lengthOfYear());
        // 366 证明可以自动判断是否为闰年！！！

        //===============================================================================
        // 4、判断大于小于，排序，判断是否闰年
        //===============================================================================
        System.out.println(localDate.compareTo(LocalDate.parse("2000-01-01"))); // 18
        // 这里的 compareTo 方法为什么返回 18 请看下面详解！！！
        System.out.println(localDate.isAfter(LocalDate.parse("2000-01-01"))); // true
        System.out.println(localDate.isBefore(LocalDate.parse("2000-01-01"))); // false
        System.out.println(localDate.isEqual(LocalDate.parse("2000-01-01"))); // false
        System.out.println(localDate.isLeapYear());// false  返回布尔值，该年是否为闰年

        //===============================================================================
        // 5、日期的加减
        //===============================================================================
        System.out.println(localDate.plusMonths(1)); // 2018-08-23  加一个月
        System.out.println(localDate.plusMonths(-1)); // 2018-06-23 减去一个月，传入负数即可，下面的也是
        System.out.println(localDate.plusDays(1)); // 2018-07-24 加上一天
        System.out.println(localDate.plusMonths(1)); // 2018-08-23 加上一个月
        System.out.println(localDate.plusWeeks(1)); // 2018-07-30 加上一个星期

        //===============================================================================
        // 6、其他计算
        //===============================================================================
        System.out.println(localDate.withDayOfYear(123)); // 2018-05-03 计算当前年第123天的日期

    }
}
