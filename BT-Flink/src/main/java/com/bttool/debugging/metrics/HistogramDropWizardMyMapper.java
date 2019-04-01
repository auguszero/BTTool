package com.bttool.debugging.metrics;

import com.codahale.metrics.SlidingWindowReservoir;
import org.apache.flink.api.common.functions.RichMapFunction;
import org.apache.flink.configuration.Configuration;
import org.apache.flink.dropwizard.metrics.DropwizardHistogramWrapper;
import org.apache.flink.metrics.Histogram;
import org.apache.flink.metrics.HistogramStatistics;

public class HistogramDropWizardMyMapper  extends RichMapFunction<Long, Long> {
    private transient Histogram histogram;

    @Override
    public void open(Configuration config) {
        com.codahale.metrics.Histogram dropwizardHistogram =
                new com.codahale.metrics.Histogram(new SlidingWindowReservoir(500));

        this.histogram = getRuntimeContext()
                .getMetricGroup()
                .histogram("myHistogram", new DropwizardHistogramWrapper(dropwizardHistogram));
    }

    @Override
    public Long map(Long value) throws Exception {
        this.histogram.update(value);
        return value;
    }
}
