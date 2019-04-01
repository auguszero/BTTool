package com.bttool.debugging.metrics;

import org.apache.flink.api.common.functions.RichMapFunction;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.metrics.Histogram;
import org.apache.flink.metrics.HistogramStatistics;

public class HistogramMyMapper extends RichMapFunction<Long, Long> {
    private transient Histogram histogram;

    @Override
    public void open(Configuration config) {
        this.histogram = getRuntimeContext()
                .getMetricGroup()
                .histogram("myHistogram", new Histogram() {
                    @Override
                    public void update(long l) {

                    }

                    @Override
                    public long getCount() {
                        return 0;
                    }

                    @Override
                    public HistogramStatistics getStatistics() {
                        return null;
                    }
                });
    }

    @Override
    public Long map(Long value) throws Exception {
        this.histogram.update(value);
        return value;
    }
}