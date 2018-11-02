package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 15:15 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo16PatitionTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo15ReduceByKeyTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 200, 2)
    val rdd2= sc.parallelize(1 to 20, 2)
    val rdd11 = rdd1.map(x=>x+"rdd1 ")
    val rdd21 = rdd2.map(x=>x+"rdd2 ")
    val rdd = rdd11.cartesian(rdd21)
  }
}
