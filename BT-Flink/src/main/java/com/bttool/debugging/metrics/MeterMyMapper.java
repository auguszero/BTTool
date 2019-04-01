package com.bttool.debugging.metrics;


import org.apache.flink.api.common.functions.RichMapFunction;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.metrics.Meter;

public class MeterMyMapper extends RichMapFunction<Long, Long> {
    private transient Meter meter;

    @Override
    public void open(Configuration config) {
        this.meter = getRuntimeContext()
                .getMetricGroup()
                .meter("myMeter", new Meter(){
                    @Override
                    public void markEvent() {

                    }

                    @Override
                    public void markEvent(long l) {

                    }

                    @Override
                    public double getRate() {
                        return 0;
                    }

                    @Override
                    public long getCount() {
                        return 0;
                    }
                });
    }

    @Override
    public Long map(Long value) throws Exception {
        this.meter.markEvent();
        return value;
    }
}