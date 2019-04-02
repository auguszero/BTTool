package webSocket;

import java.awt.*;
import java.awt.event.InputEvent;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.concurrent.locks.ReentrantLock;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/31 4:09 PM
 */
public class Boot1 {

    public static boolean flage = true;
    public static int index = 0;
    public static ReentrantLock reentrantLock = new ReentrantLock();

    public static void main(String[] args) throws FileNotFoundException {
        int args1 = Integer.parseInt(args[0]);
        int args2 = Integer.parseInt(args[1]);
        int args3 = Integer.parseInt(args[2]);
        int args4 = Integer.parseInt(args[3]);
        int args5 = Integer.parseInt(args[4]);
        int args6 = Integer.parseInt(args[5]);
        int args7 = Integer.parseInt(args[6]);
        int num = Integer.parseInt(args[7]);
//        KeyAd keyAd = new KeyAd();
        buttonInsert(args1, args2, args3, args4, args5, args6,args7 ,num);
        System.out.println(1);

    }

    /**
     * 实际逻辑
     *
     * @param args1
     * @param args2
     * @param args3
     * @param args4
     * @param args5
     * @param args6
     */
    private static void buttonInsert(int args1, int args2, int args3, int args4, int args5, int args6, int args7, int num) {
        Robot robot = null;
        try {
            robot = new Robot();
            while (true) {
                if (index < num) {
                    System.out.println(index);
                    index++;
                } else {
                    return;
                }
                if (flage) {
                    robot.mouseMove(args1, args2);
                    robot.mousePress(InputEvent.BUTTON1_MASK);
                    robot.mouseRelease(InputEvent.BUTTON1_MASK);
                    Thread.sleep(args7);
                    robot.mouseMove(args3, args4);
                    robot.mousePress(InputEvent.BUTTON1_MASK);
                    robot.mouseRelease(InputEvent.BUTTON1_MASK);
                    Thread.sleep(args7);
                    robot.mouseMove(args5, args6);
                    robot.mousePress(InputEvent.BUTTON1_MASK);
                    robot.mouseRelease(InputEvent.BUTTON1_MASK);
                    Thread.sleep(args7);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
