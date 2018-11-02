package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.storage.StorageLevel
import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:41 2018/11/2
  * @ Description：${DESCRIPTION}
  * @ Modified By：
  */
object Demo12CacheTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo11SampleTransfermation")
    val sc = new SparkContext(conf)
    val rdd = sc.parallelize(List("Gnu", "Cat", "Rat", "Dog", "Gnu", "Rat"), 2)
    //debug 观看
    val storage1 = rdd.getStorageLevel
    rdd.cache()
    val storage2 = rdd.getStorageLevel

    val rdd1 = sc.parallelize(List("Gnu", "Cat", "Rat", "Dog", "Gnu", "Rat"), 2)
    //debug 观看
    val storage11 = rdd1.getStorageLevel
    rdd1.persist(StorageLevel.MEMORY_AND_DISK_2)
    val storage21 = rdd1.getStorageLevel
    println(1)
  }
}
