package com.bttool.lock;


import java.util.concurrent.locks.ReentrantLock;

/**
 * Created by sql_j on 2018/3/18.
 */

public class InitLock implements Runnable {

    public static ReentrantLock lock1 = new ReentrantLock();

    public static ReentrantLock lock2 = new ReentrantLock();

    int lock;

    public InitLock(int lock) {

        this.lock = lock;

    }

    @Override
    public void run() {

        try {

            if (lock == 1) {

                lock1.lockInterruptibly();

                try {

                    Thread.sleep(1000);

                } catch (InterruptedException e) {

                    e.printStackTrace();

                }

                lock2.lockInterruptibly();

                System.out.println("我是线程1");

            } else {

                lock2.lockInterruptibly();

                try {

                    Thread.sleep(1000);

                } catch (InterruptedException e) {

                    e.printStackTrace();

                }

                lock1.lockInterruptibly();

                System.out.println("我是线程2");

            }

        } catch (Exception e) {

            e.printStackTrace();

        } finally {

            if (lock1.isHeldByCurrentThread()) {

                lock1.unlock();

            }

            if (lock2.isHeldByCurrentThread()) {

                lock2.unlock();

            }

        }

    }

    public static void main(String[] args) {

        InitLock intLock1 = new InitLock(1);

        InitLock intLock2 = new InitLock(2);

        Thread thread1 = new Thread(intLock1);

        Thread thread2 = new Thread(intLock2);

        thread1.start();

        thread2.start();

        try {

            Thread.sleep(1000);

        } catch (InterruptedException e) {

            e.printStackTrace();

        }

        thread1.interrupt();

    }

}
