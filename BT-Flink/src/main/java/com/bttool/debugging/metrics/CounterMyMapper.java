package com.bttool.debugging.metrics;

import org.apache.flink.api.common.functions.RichMapFunction;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.metrics.Counter;

public class CounterMyMapper extends RichMapFunction<String, String> {
    private transient Counter counter;

    @Override
    public void open(Configuration config) {
        this.counter = getRuntimeContext()
                .getMetricGroup()
//                .counter("myCounter");
        .counter("myCounter", new Counter() {
            @Override
            public void inc() {

            }

            @Override
            public void inc(long l) {

            }

            @Override
            public void dec() {

            }

            @Override
            public void dec(long l) {

            }

            @Override
            public long getCount() {
                return 0;
            }
        });
    }

    @Override
    public String map(String value) throws Exception {
        this.counter.inc();
        return value;
    }
}