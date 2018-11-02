package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:19 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo9DistinctTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo8FilterTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 20, 3)
    val rdd2 = sc.parallelize(10 to 30, 2)
    val rdd = rdd1.union(rdd2).map(x=>x+" ")
    val grouprdd = rdd.distinct()
    println(grouprdd.collect().mkString)
  }
}
