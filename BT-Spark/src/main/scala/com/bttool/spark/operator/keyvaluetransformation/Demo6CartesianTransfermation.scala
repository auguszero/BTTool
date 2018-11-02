package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:03 2018/11/2
  * @ Description：生成笛卡尔积  结果
  * @ Modified By：
  */
object Demo6CartesianTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo6CartesianTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 200, 3)
    val rdd2 = sc.parallelize(500 to 700, 3)
    val rdd11 : RDD[String] = rdd1.map(x=>x+"rdd1 ")
    val rdd21 : RDD[String] = rdd2.map(x=>x+"rdd2 ")
    val rdd = rdd11.cartesian(rdd21)
    println(rdd.collect().mkString)

  }
}
