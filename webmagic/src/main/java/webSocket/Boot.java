package webSocket;

import java.awt.*;
import java.awt.event.InputEvent;
import java.io.*;
import java.util.concurrent.locks.ReentrantLock;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/31 4:09 PM
 */
public class Boot {

    public static boolean flage = false ;
    public static int index = 0;
    public static ReentrantLock reentrantLock = new ReentrantLock();

    public static void main(String[] args) throws FileNotFoundException {
        int args1 = Integer.parseInt(args[0]);
        int args2 = Integer.parseInt(args[1]);
        int args3 = Integer.parseInt(args[2]);
        int args4 = Integer.parseInt(args[3]);
        int args5 = Integer.parseInt(args[4]);
        int args6 = Integer.parseInt(args[5]);
        int num = Integer.parseInt(args[6]);
//        KeyFrame keyFrame = new KeyFrame();
//        System.out.println(getStatus());
        KeyAd keyAd = new KeyAd();
        buttonInsert(args1, args2, args3, args4, args5, args6,num);
        while (true) {
            System.out.println(1);
        }

    }

    /**
     * 实际逻辑
     * @param args1
     * @param args2
     * @param args3
     * @param args4
     * @param args5
     * @param args6
     */
    private static void buttonInsert(int args1, int args2, int args3, int args4, int args5, int args6,int num) {
        new Thread(new Runnable() {
            @Override
            public void run() {

                Robot robot  = null;
                try {
                    robot = new Robot();
                    robot.mouseMove(args1,args2);
                    while (true) {
                        System.out.println("按钮1....");
                        if(index<num){
                            System.out.println(index);
                            index++;
                        }else{
                            return;
                        }
                        if(flage) {
                            reentrantLock.lock();

                            robot.mousePress(InputEvent.BUTTON1_MASK);
                            robot.mouseRelease(InputEvent.BUTTON1_MASK);
                            reentrantLock.unlock();
                        }
                    }
                } catch (AWTException e) {
                    e.printStackTrace();
                }

            }
        }).start();
        new Thread(new Runnable() {
            @Override
            public void run() {

                Robot robot1  = null;
                try {
                    robot1 = new Robot();
                    robot1.mouseMove(args3,args4);
                    while (true) {
                        System.out.println("按钮2....");
                        if(index<num){
                            System.out.println(index);
                            index++;
                        }else{
                            return;
                        }
                        if(flage) {
                            reentrantLock.lock();

                            robot1.mousePress(InputEvent.BUTTON1_MASK);
                            robot1.mouseRelease(InputEvent.BUTTON1_MASK);
                            reentrantLock.unlock();
                        }
                    }
                } catch (AWTException e) {
                    e.printStackTrace();
                }

            }
        }).start();
        new Thread(new Runnable() {
            @Override
            public void run() {
                Robot robot2  = null;
                try {
                    robot2 = new Robot();
                    robot2.mouseMove(args5,args6);
                    while (true) {
                        System.out.println("按钮3....");
                        if(index<num){
                            System.out.println(index);
                            index++;
                        }else{
                            return;
                        }
                        if(flage) {
                            reentrantLock.lock();

                            robot2.mousePress(InputEvent.BUTTON1_MASK);
                            robot2.mouseRelease(InputEvent.BUTTON1_MASK);
                            reentrantLock.unlock();
                        }
                    }
                } catch (AWTException e) {
                    e.printStackTrace();
                }

            }
        }).start();
    }


    public static boolean getStatus() throws FileNotFoundException {
        boolean result = true;
        String  name = Boot.class.getClassLoader().getResource("inner.txt").getFile();
        try {
            FileReader fr = new FileReader(name);
            BufferedReader bf = new BufferedReader(fr);
            String str;
            // 按行读取字符串
            while ((str = bf.readLine()) != null) {
                result= Integer.parseInt(str)%2==1?true:false;
            }
            bf.close();
            fr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            return result;
        }

    }

}
