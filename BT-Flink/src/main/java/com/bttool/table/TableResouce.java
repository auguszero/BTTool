//package com.bttool.table;
//
//import org.apache.flink.api.common.io.DefaultInputSplitAssigner;
//import org.apache.flink.api.common.io.InputFormat;
//import org.apache.flink.api.common.io.statistics.BaseStatistics;
//import org.apache.flink.api.java.tuple.Tuple2;
//import org.apache.flink.api.java.tuple.Tuple3;
//import org.apache.flink.configuration.Configuration;
//import org.apache.flink.core.io.GenericInputSplit;
//import org.apache.flink.core.io.InputSplitAssigner;
//
//import java.io.IOException;
//import java.util.List;
//
//public class TableResouce implements InputFormat<Tuple3<String, String,String>, GenericInputSplit> {
//    private int minNumSplits ;
//
//    private List<String>
//
//    public int getMinNumSplits() {
//        return minNumSplits;
//    }
//
//    public void setMinNumSplits(int minNumSplits) {
//        this.minNumSplits = minNumSplits;
//    }
//
//    @Override
//    public void configure(Configuration configuration) {
//
//    }
//
//    @Override
//    public BaseStatistics getStatistics(BaseStatistics baseStatistics) throws IOException {
//        return null;
//    }
//
//    /**
//     * 该方法主要实现其split方法 类似于Spark集群内部的 Split
//     * @param i
//     * @return
//     * @throws IOException
//     */
//    @Override
//    public GenericInputSplit[] createInputSplits(int i) throws IOException {
//        GenericInputSplit[] splits = new GenericInputSplit[minNumSplits];
//        for (int i = 0; i < minNumSplits; i++) {
//            splits[i] = new GenericInputSplit(i, minNumSplits);
//        }
//        return splits;
//    }
//
//    @Override
//    public InputSplitAssigner getInputSplitAssigner(GenericInputSplit[] inputSplits) {
//        return new DefaultInputSplitAssigner(inputSplits);
//    }
//
//    @Override
//    public void open(GenericInputSplit genericInputSplit) throws IOException {
//
//    }
//
//    @Override
//    public boolean reachedEnd() throws IOException {
//        return false;
//    }
//
//    @Override
//    public Tuple3<String, String, String> nextRecord(Tuple3<String, String, String> stringStringStringTuple3) throws IOException {
//
//    }
//
//    @Override
//    public void close() throws IOException {
//
//    }
//}
