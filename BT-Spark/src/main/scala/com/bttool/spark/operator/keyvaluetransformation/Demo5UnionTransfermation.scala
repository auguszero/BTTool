package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 13:56 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo5UnionTransfermation {

  def main(args: Array[String]): Unit = {
    val conf  = new SparkConf().setMaster("local[2]").setAppName("Demo5UnionTransfermation")
    val sc = new SparkContext(conf)
    val rdd1  = sc.parallelize(1 to 20 ,3)
    val rdd2 = sc.parallelize(30 to 50 ,2)
    val rdd11 : RDD[String] = rdd1.map(x=>x+"rdd1 \n")
    val rdd21 : RDD[String] = rdd2.map(x=>x+"rdd2 \n")
    val rdd = rdd11.union(rdd21)
    println(rdd.collect().mkString)
  }
}
