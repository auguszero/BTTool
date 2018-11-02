# 1， StreamingContext
  Spark Streaming 的功能入口类。 提供了大量的根据不同数据源创建 DStream 的方法。   
  重点方法:   
  Start  
  Stop  
  awaitTermination  
  
  
  ## Start 
   
   spark.job.interruptOnCancel 默认值为false 
   
   ### AtomicReference 
   源码解释：
   https://blog.csdn.net/Liu_yunzhao/article/details/78484456 
   摘述: 
```properties
AtomicReference是作用是对”对象”进行原子操作.提供了一种读和写都是原子性的对象引用变量。原子意味着多个线程试图改变同一个AtomicReference(例如比较和交换操作)将不会使得AtomicReference处于不一致的状态。
``` 
    