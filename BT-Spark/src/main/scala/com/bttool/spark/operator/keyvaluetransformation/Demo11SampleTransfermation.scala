package com.bttool.spark.operator.keyvaluetransformation

import org.apache.spark.{SparkConf, SparkContext}

/**
  * @ Author     ：augus.
  * @ Date       ：Created in 14:36 2018/11/2
  * @ Description：${description}
  * @ Modified By：
  */
object Demo11SampleTransfermation {

  def main(args: Array[String]): Unit = {
    val conf = new SparkConf().setMaster("local[2]").setAppName("Demo11SampleTransfermation")
    val sc = new SparkContext(conf)
    val rdd1 = sc.parallelize(1 to 20000, 3)
    //SampledRDD（withReplacement，fraction，seed）
    // withReplacement true 表示有放回的抽样；  false 表示无放回的抽样。
    val rdd = rdd1.sample(false,0.1,0).map(x=>x+" ")
    println(rdd.collect().mkString)


    val rdd2 = sc.parallelize(1 to 20000, 3)
    //takeSample（）函数和上面的sample函数是一个原理，但是不使用相对比例采样，而
//    是按设定的采样个数进行采样，同时返回结果不再是RDD，而是相当于对采样后的数据进行
//    Collect（），返回结果的集合为单机的数组。
//    图3-15中左侧的方框代表分布式的各个节点上的分区，右侧方框代表单机上返回的结果
//    数组。 通过takeSample对数据采样，设置为采样一份数据，返回结果为V1。
    val rdd11 = rdd2.takeSample(false,300,0)
    println(rdd11.mkString)

  }
}
