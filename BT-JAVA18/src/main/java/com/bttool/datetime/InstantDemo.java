package com.bttool.datetime;

import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

public class InstantDemo {

    public static void main(String[] args) {
        //===============================================================================
        // 1、获取当前时间戳
        //===============================================================================
        System.out.println(Instant.now());  // 2018-07-23T07:57:00.821Z

        //===============================================================================
        // 2、传入CharSequence类型，转换为instant对象
        //===============================================================================
        CharSequence text = "2010-10-31T07:57:00.821Z";
        Instant instant = Instant.parse(text);
        System.out.println(instant);  // 2010-10-31T07:57:00.821Z
        // 注意：格式不正确或者不存在该日期时，会抛出DateTimeParseException异常

        //===============================================================================
        // 3、比较时间（大于小于排序）
        //===============================================================================
        System.out.println(instant.isAfter(Instant.parse("2010-11-30T07:57:00.821Z")));
        // false 返回布尔值
        System.out.println(instant.isBefore(Instant.parse("2010-11-30T07:57:00.821Z")));
        // true 返回布尔值
        System.out.println(instant.compareTo(Instant.parse("2010-11-30T07:57:00.821Z")));
        // -1  compareTo 返回值int类型  等于返回 0 小于返回 -1 大于返回 1
        System.out.println(instant.equals(Instant.parse("2010-10-31T07:57:00.821Z")));
        // true  返回布尔值 比较两个时间是否相等

        //===============================================================================
        // 4、获取从1970-01-01T00：00：00Z到现在的秒数
        //===============================================================================
        System.out.println(instant.getEpochSecond());  // 1288511820
        // 返回值long，注意返回的是秒！不是毫秒！

        //===============================================================================
        // 5、设置时区偏移
        //===============================================================================
        OffsetDateTime offsetDateTime = instant.atOffset(ZoneOffset.ofHours(8));
        System.out.println(offsetDateTime); // 2010-10-31T15:57:00.821+08:00
        // 返回值类型OffsetDateTime  我们在东八区，所以加上八小时，就是本地时间戳

    }
}

