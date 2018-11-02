package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.rdd.RDD

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 11:28 2018/11/2
  * @ Description：${DESCRIPTION}
  * @ Modified By：
  */
object Demo2FlatMapTransfermation {
  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("flatmapTransformation")
    val sc = new SparkContext(conf)
    val rdd :RDD[String] = sc.parallelize(getStr())
    val rddresult = rdd.flatMap(x=>{
      val resultx = x.split(",")
      resultx
    })
    rddresult.foreach(x=>{
      println(x)
    })
  }
  def getStr(): Seq[String] = {
    val content1 = "1,2,3"
    val content2 = "3,5"
    val content3 = "2,4,6"
    val content4 = "1"
    val seq = Seq(content1,content2,content3)
    seq
  }



}
