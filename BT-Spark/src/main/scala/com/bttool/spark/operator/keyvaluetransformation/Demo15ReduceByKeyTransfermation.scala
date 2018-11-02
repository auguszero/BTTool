package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 15:04 2018/11/2
  * @ Description：${DESCRIPTION}
  * @ Modified By：
  */
object Demo15ReduceByKeyTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo15ReduceByKeyTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 200, 2)
    val rdd2= sc.parallelize(1 to 20, 2)
    val rdd11 = rdd1.map(x=>x+"rdd1 ")
    val rdd21 = rdd2.map(x=>x+"rdd2 ")
    val rdd = rdd11.cartesian(rdd21)
//def reduceByKey（partitioner： Partitioner， func： （V， V） => V）： RDD[（K， V）] = {
//    combineByKey[V]（（v： V） => v， func， func， partitioner）
//  }
//    通过用户自定义函数（A，B）=>（A+B），将相同
//    Key的数据（V1，2）、 （V1，1）的value相加，结果为（V1，3）。
//    val resultrdd = rdd.reduceByKey((x,y)=>y)
    val resultrdd = rdd.reduceByKey(_ + "," + _)
    println(resultrdd.collect().mkString)
  }
}
