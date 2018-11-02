package com.bttool.spark.operator.keyvaluetransformation

import com.bttool.spark.operator.keyvaluetransformation.Demo2FlatMapTransfermation.getStr
import org.apache.spark.{SparkConf, SparkContext}
import org.apache.spark.rdd.RDD

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 11:31 2018/11/2
  * @ Description：${DESCRIPTION}
  * @ Modified By：
  */
object Demo3MapPartitionsTransfermation {
  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("flatmapTransformation")
    val sc = new SparkContext(conf)


    println("1.map--------------------------------")
    var aa   = sc.parallelize(1 to 9, 3)
    def doubleMap(a:Int) : (Int, Int) = { (a, a*2) }
    val aa_res = aa.map(doubleMap)
    println("map---"+aa.getNumPartitions)
    println("map---"+aa_res.collect().mkString)


    println("2.mapPartitions-------------------")
    val bb = sc.parallelize(1 to 9, 3)
    def doubleMapPartition( iter : Iterator[Int]) : Iterator[ (Int, Int) ] = {
      var res = List[(Int,Int)]()
      while (iter.hasNext){
        val cur = iter.next()
        res .::= (cur, cur*2)
      }
      res.iterator
    }
    val bb_res = bb.mapPartitions(doubleMapPartition)
    println("mapPartitions---"+bb_res.collect().mkString)




    println("3.mapPartitions-------------------")
    var cc = sc.makeRDD(1 to 5, 4)
    var cc_ref = cc.mapPartitions( x => {
      var result = List[Int]()
      var i = 0
      while(x.hasNext){
        val cur = x.next()
        result.::= (cur*2)
      }
      result.iterator
    })
    cc_ref.foreach(x=>println("3mapPartitions---"+x))


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
