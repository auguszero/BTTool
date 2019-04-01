//package com.bttool.table;
//
//import org.apache.flink.api.common.functions.MapFunction;
//import org.apache.flink.api.java.tuple.Tuple3;
//import org.apache.flink.streaming.api.datastream.DataStream;
//import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
//import org.apache.flink.table.api.Table;
//import org.apache.flink.table.api.TableEnvironment;
//import org.apache.flink.table.api.java.StreamTableEnvironment;
//import org.apache.flink.table.sources.CsvTableSource;
//import org.apache.flink.table.sources.TableSource;
//
//public class TableStreamingDemo {
//
//    public static void main(String[] args) {
//        // 对于批处理程序来说使用 ExecutionEnvironment 来替换 StreamExecutionEnvironment
//        StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
//
//// 创建一个TableEnvironment
//// 对于批处理程序来说使用 BatchTableEnvironment 替换 StreamTableEnvironment
//        StreamTableEnvironment tableEnv = TableEnvironment.getTableEnvironment(env);
//
//        DataStream<Tuple3<String,String,String>> source = env.generateSequence(0, 2048)
//                .map(new MapFunction<Long, Tuple3<String,String,String>>() {
//                    @Override
//                    public Tuple3<String,String,String>  map(Long value) throws Exception {
//                        Tuple3<String,String,String> tuple3 = new Tuple3<String,String,String>();
//                        tuple3.f0 = "name"+value;
//                        tuple3.f1 = "age"+value;
//                        tuple3.f2 = "from"+value;
//                        return tuple3;
//                    }
//                });
//
//        // 注册DataStream 为表  "myTable" ，并有两个字段 "f0", "f1",  "f2"
////        tableEnv.registerDataStream("myTable", source);
//
//        // 注册 DataStream 为表 "myTable2" 并有两个字段 "myLong", "myString"
//        tableEnv.registerDataStream("myTable", source, "name, age , from ");
//
//        tableEnv.sqlQuery("select * from mytable limit 10 ")
//
//
//// 注册一个 Table
//        tableEnv.registerTable("table1", )            // 或者
//        tableEnv.registerTableSource("table2", );     // 或者
//        tableEnv.registerExternalCatalog("extCat", ...);
//
//// 从Table API的查询中创建一个Table
//        Table tapiResult = tableEnv.scan("table1").select(...);
//// 从SQL查询中创建一个Table
//        Table sqlResult  = tableEnv.sql("SELECT ... FROM table2 ... ");
//
//// 将Table API 种的结果 Table 发射到TableSink中 , SQL查询也是一样的
//        tapiResult.writeToSink(...);
//
//// 执行
//        env.execute();
//
//    }
//}
