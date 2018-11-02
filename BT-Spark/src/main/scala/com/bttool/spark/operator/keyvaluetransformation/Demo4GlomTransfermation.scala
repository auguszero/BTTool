package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.rdd.RDD
import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 11:51 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo4GlomTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo4GlomTransfermation")
    val sc = new SparkContext(conf)

    val aardd:RDD[Int] = sc.parallelize(1 to 1000 , 5)
    val mappartitionsrdd :RDD[Int] = aardd.mapPartitions(x=>x)
    val glomrdd = mappartitionsrdd.glom().collect()
//    aardd.mapPartitions(x=> {
//      while (x.hasNext) {
//        println(x.next())
//      }
//      x
//    })
    println(glomrdd)
  }
}
