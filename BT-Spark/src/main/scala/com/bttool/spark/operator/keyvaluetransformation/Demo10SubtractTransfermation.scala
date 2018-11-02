package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:22 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo10SubtractTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo8FilterTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 20, 3)
    val rdd2 = sc.parallelize(1 to 10, 2)
//    rdd1-rdd2
    val rdd = rdd1.subtract(rdd2).map(x=>x+" ")
    println(rdd.collect().mkString)
    println(rdd1.subtract(rdd2).collect().mkString)
  }
}
