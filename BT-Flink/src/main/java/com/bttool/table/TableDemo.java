//package com.bttool.table;
//
//import com.bttool.dataset.Generator;
//import org.apache.flink.api.java.DataSet;
//import org.apache.flink.api.java.ExecutionEnvironment;
//import org.apache.flink.api.java.tuple.Tuple2;
//import org.apache.flink.api.java.tuple.Tuple3;
//import org.apache.flink.table.api.Table;
//import org.apache.flink.table.api.TableEnvironment;
//import org.apache.flink.table.api.java.BatchTableEnvironment;
//
//public class TableDemo {
//
//    public static void main(String[] args) {
//        ExecutionEnvironment executionEnvironment = ExecutionEnvironment.getExecutionEnvironment();
//        BatchTableEnvironment batchTableEnvironment = TableEnvironment.getTableEnvironment(executionEnvironment);
//
//        DataSet<Tuple3<String,String,String>> x2Keys = executionEnvironment.createInput(Generator.generate(1024, 2,"x2keys")).setParallelism(1);
//        Table testTable = batchTableEnvironment.scan("test01");
//        testTable
//                .groupBy("name")
//                .select("name, age ");
//
//
//
//    }
//}
