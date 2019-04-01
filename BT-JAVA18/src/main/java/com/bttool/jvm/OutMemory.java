package com.bttool.jvm;

import com.bttool.model.UserModel;
import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;
import org.junit.Test;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/26 11:50 AM
 */
public class OutMemory {

    /**
     * -Xms10m -Xmx10m -XX:+HeapDumpOnOutOfMemoryError
     * 内存不够
     */
    @Test
    public void OOMError(){
        List list = new ArrayList();
        while (true) {
            list.add(new UserModel());
        }

    }

    /**
     * -Xss  设置本地栈数据
     * 如果线程请求的栈深度大于虚拟机锁允许的最大深度，将抛出StackOverflowError异常
     * 常见方式就是出现了死循环的递归操作
     */
    @Test
    public void StatckOverFlowError(){
        System.out.println(setAdd(11));
    }


    public int setAdd(int index){
         return setAdd(index);
    }

    /**
     * -Xss  设置本地栈数据信息
     */
    @Test
    public void StatckOOMError(){
        while (true){
            Thread thread = new Thread(new Runnable() {
                @Override
                public void run() {
                    while (true){

                    }
                }
            });
            thread.start();
        }
    }


    /**
     * 方法区异常问题
     * 方法区数据放置在年老代 这是年老代参数
     * -XX:PermSize=10M -XX:MaxPermSize=10M
     */
    @Test
    public void methodOOMError(){
        while (true) {
            Enhancer enhancer = new Enhancer();
            enhancer.setSuperclass(OOMObject.class);
            enhancer.setUseCache(false);
            enhancer.setCallback(new MethodInterceptor() {
                public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
                    return proxy.invokeSuper(obj, args);
                }
            });
            enhancer.create();
        }
    }

    /**
     * 常量池异常
     * jdk 1.7 之后常量池 放置到 堆中，故设置堆数据
     * -Xms10m -Xmx10m -XX:+HeapDumpOnOutOfMemoryError
     */
    @Test
    public void constantPoolOOMError(){
        ArrayList<String> list = new ArrayList<String>();
        long i= 0 ;
        while (true){
            String str = i+++"";
            list.add(str.intern());

        }

    }

    static class OOMObject{
//        private String name ;
//        public OOMObject(){
//
//        }

    }
}
