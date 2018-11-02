package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:09 2018/11/2
  * @ Description：${DESCRIPTION}
  * @ Modified By：
  */
object Demo7GroupByTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo7GroupByTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 200, 3)
    val grouprdd = rdd1.groupBy(x => if (x%2==0) "yes" else "no")
    grouprdd.foreach(x=>{
      if(x._1.equals("yes")){
        val iterator = x._2.iterator
        println("yes----------------------")
        while (iterator.hasNext){
          println(iterator.next())
        }
      }else if(x._1.equals("no")){
        val iterator = x._2.iterator
        println("no----------------------")
        while (iterator.hasNext){
          println(iterator.next())
        }
      }
    })
    println(grouprdd.collect().mkString)
  }
}
