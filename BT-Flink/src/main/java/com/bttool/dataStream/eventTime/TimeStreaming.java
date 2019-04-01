package com.bttool.dataStream.eventTime;

import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.api.java.tuple.Tuple2;
import org.apache.flink.streaming.api.datastream.DataStream;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.apache.flink.streaming.api.functions.AssignerWithPeriodicWatermarks;
import org.apache.flink.streaming.api.watermark.Watermark;
import org.apache.flink.streaming.api.windowing.time.Time;

import javax.annotation.Nullable;

/**
 * https://blog.csdn.net/a6822342/article/details/78064815
 *
 * http://vishnuviswanath.com/flink_eventtime.html
 */
public class TimeStreaming {

    public static void main(String[] args) throws Exception {
//        normalTimeMethod();
        EventTimeMethod();
        return;
    }


    private static void EventTimeWithWatermarksMethod() throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        DataStream<String> text =  env.socketTextStream("localhost",9999);
        text.assignTimestampsAndWatermarks(new TimestampWithWaterMaskerExtractor(){});
        handleValue(env, text);
    }

    private static void EventTimeMethod() throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        DataStream<String> text =  env.socketTextStream("localhost",9999);
        text.assignTimestampsAndWatermarks(new TimestampExtractor(){});
        handleValue(env, text);
    }

    /**
     * 不带任何时间操作的数据
     * 只执行数据时间间隔在10秒每5秒做一次window操作的数据汇总结果
     * @throws Exception
     */
    private static void normalTimeMethod() throws Exception {
        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
        DataStream<String> text =  env.socketTextStream("localhost",9999);
        handleValue(env, text);


    }

    private static void handleValue(StreamExecutionEnvironment env, DataStream<String> text) throws Exception {
        //        DataStream<Tuple2<String,Integer>> counts =
        SingleOutputStreamOperator<Tuple2<String,Integer>> counts = text.map(new MapFunction<String, Tuple2<String, Integer>>() {
            @Override
            public Tuple2<String, Integer> map(String s) throws Exception {
                Tuple2<String,Integer> result = new Tuple2<String,Integer>();
                result.f0 = s.split(",")[0];
                result.f1 = 1 ;
                return result;
            }
        })
                .keyBy(0)
                .timeWindow(Time.seconds(10),Time.seconds(5))
                .sum(1);
        counts.print();
        env.execute("ProcessingTime processing example");
    }


    /**
     * 获取当前时间戳作为watermark
     */
    static class TimestampExtractor implements AssignerWithPeriodicWatermarks<String>  {

        @Nullable
        @Override
        public Watermark getCurrentWatermark() {
            return  new Watermark(System.currentTimeMillis());
        }

        @Override
        public long extractTimestamp(String s, long l) {

            return Long.parseLong(s.split(",")[1]);
        }
    }


    /**
     * 允许有5秒延迟数据的操作
     */
    static class TimestampWithWaterMaskerExtractor implements AssignerWithPeriodicWatermarks<String>  {

        @Nullable
        @Override
        public Watermark getCurrentWatermark() {
            return  new Watermark(System.currentTimeMillis()-5000);
        }

        @Override
        public long extractTimestamp(String s, long l) {

            return Long.parseLong(s.split(",")[1]);
        }
    }
}
