package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:49 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo13MapValuesTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo11SampleTransfermation")
    val sc = new SparkContext(conf)
    val rdd = sc.parallelize(List("Gnu", "Cat", "Rat", "Dog", "Gnu", "Rat"), 2)
    val b = rdd.map(x => (x.length, x))
    val rdd2 = b.mapValues("x" + _ + "x")
    println(rdd2.collect.mkString)
  }
}
