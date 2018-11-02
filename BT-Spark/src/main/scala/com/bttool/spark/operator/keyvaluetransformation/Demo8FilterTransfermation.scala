package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:17 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo8FilterTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo8FilterTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 200, 3)
    val grouprdd = rdd1.filter(x => if (x%2==0) true else false)
    println(grouprdd.collect().mkString)
  }
}
