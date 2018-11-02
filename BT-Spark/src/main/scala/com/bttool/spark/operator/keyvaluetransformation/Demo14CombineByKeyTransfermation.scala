package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:53 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo14CombineByKeyTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo14CombineByKeyTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 200, 2)
    val rdd2= sc.parallelize(1 to 20, 2)
    val rdd11 = rdd1.map(x=>x+"rdd1 ")
    val rdd21 = rdd2.map(x=>x+"rdd2 ")
    val rdd = rdd11.cartesian(rdd21)
//    combineByKey[C]（createCombiner：（V）=> C，
//    mergeValue：（C， V）=> C，
//    mergeCombiners：（C， C）=> C，
//    partitioner： Partitioner
//    mapSideCombine： Boolean = true，
//    serializer： Serializer =null）： RDD[（K， C）]

//    说明：
//    ·createCombiner：V=>C，在C不存在的情况下，如通过V创建seq C。
//    ·mergeValue：（C，V）=>C，当C已经存在的情况下，需要merge，如把item V加到
//      seq C中，或者叠加。
//    ·mergeCombiners：（C，C）=>C，合并两个C。
//    ·partitioner：Partitioner（分区器），Shuffle时需要通过Partitioner的分区策略进行分
//    区。
//    ·mapSideCombine：Boolean=true，为了减小传输量，很多combine可以在map端先
//    做。 例如，叠加可以先在一个partition中把所有相同的Key的Value叠加，再shuffle。
//    ·serializerClass：String=null，传输需要序列化，用户可以自定义序列化类。
    val rddcom = rdd.combineByKey(List(_), (x:List[String], y:String) => y :: x, (x:List[String], y:List[String]) => x ::: y).map(x=>x+"\n")
    println(rddcom.collect.mkString)
  }
}
