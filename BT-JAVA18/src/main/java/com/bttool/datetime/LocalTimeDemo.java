package com.bttool.datetime;

import java.time.Duration;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class LocalTimeDemo {

    public static void main(String[] args) {
        //===============================================================================
        // 1、获取当前时间
        //===============================================================================
        LocalTime time1 = LocalTime.now();
        System.out.println(time1); // 09:39:47.275

        //===============================================================================
        // 2、构造LocalTime
        //===============================================================================
        // 根据传入文本构造LocalTIme时间对象,格式不正确会抛出 java.time.format.DateTimeParseException 异常
        CharSequence text1 = "22:22:22";
        LocalTime localTime1 = LocalTime.parse(text1);
        System.out.println(localTime1); // 22:22:22
        // 传入自定义文本，自定义格式化 构造 LocalTime 对象
        CharSequence text2 = "11-11-11";
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH-mm-ss");
        LocalTime localTime2 = LocalTime.parse(text2, dateTimeFormatter);
        System.out.println(localTime2); // 11:11:11
        // 根据入参 时，分，秒，纳秒构造出LocalTime对象，24小时制
        // 如果入参不符合时间要求，例如传入25小时，61分钟，会抛出 java.time.DateTimeException 异常
        LocalTime time2 = LocalTime.of(13, 22);
        System.out.println(time2); // 13:22
        LocalTime time3 = LocalTime.of(14, 22, 31);
        System.out.println(time3); // 14:22:31
        LocalTime time4 = LocalTime.of(22, 43, 33, 422);
        System.out.println(time4); // 22:43:33.000000422
        // 根据分钟 构造 LocalTime 时间对象 超过最大分钟，会抛出 java.time.DateTimeException 异常
        LocalTime time5 = LocalTime.ofSecondOfDay(22324);
        System.out.println(time5); // 06:12:04
        // 根据纳秒构造LocalTime对象
        LocalTime time6 = LocalTime.ofNanoOfDay(1231);
        System.out.println(time6); // 00:00:00.000001231

        //===============================================================================
        // 3、获时，分，秒等
        //===============================================================================
        int hour = time1.getHour();
        int minute = time1.getMinute();
        int second = time1.getSecond();
        System.out.println("小时：" + hour + "，分钟："
                + minute + ",秒数：" + second); // 小时：10，分钟：5,秒数：53

        //===============================================================================
        // 4、判断大于小于，排序，相差多少
        //===============================================================================
        // 判断时间1是否在时间2后
        boolean after = time1.isAfter(time2);
        System.out.println(after); // false
        // 判断时间1是否在时间2前
        boolean before = time1.isBefore(time2);
        System.out.println(before); // true
        // 排序比较，前者大于后者返回 1，否则 -1，相等 0
        int i = time1.compareTo(time2);
        System.out.println(i); // -1
        // 时间1和时间2相差多少小时，分钟，秒，大于为正数，小于为负数（坏处就是分跟分加减，秒跟秒加减）
        long betweenHours = ChronoUnit.HOURS.between(time1, time2);
        long betweenSeconds = ChronoUnit.SECONDS.between(time1, time2);
        long betweenMinutes = ChronoUnit.MINUTES.between(time1, time2);
        System.out.println("相差小时：" + betweenHours + " 分钟: " +
                betweenMinutes + " 秒数：" + betweenSeconds); // 相差小时：2 分钟: 178 秒数：10707

        //===============================================================================
        // 5、时间的加减,修改
        //===============================================================================
        // 加两小时，减去传入负数即可
        LocalTime time7 = time3.plusHours(2);
        System.out.println(time7); // 16:22:31
        // 减去10分钟
        LocalTime time8 = time3.plusMinutes(-10);
        System.out.println(time8); // 14:12:31
        // 加上30秒
        LocalTime time9 = time3.plusSeconds(30);
        System.out.println(time9); // 14:23:01
        // 修改小时
        LocalTime time10 = time3.withHour(23);
        System.out.println(time10); // 23:22:31
        // 修改分钟
        LocalTime time11 = time3.withMinute(11);
        System.out.println(time11); // 14:11:31
        // 修改秒数
        LocalTime time12 = time3.withSecond(50);
        System.out.println(time12); // 14:22:50


        //===============================================================================
        // 6、两个时间之间的相差秒数，小时

        //===============================================================================
        Duration duration = Duration.between(time3, time12);
        long days = duration.toDays();
        long hours = duration.toHours();
        long millis = duration.toMillis()/1000;

    }
}

