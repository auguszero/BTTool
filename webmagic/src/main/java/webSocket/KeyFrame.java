package webSocket;

import javax.swing.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

import javax.swing.JFrame;
import javax.swing.JPanel;
/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/31 9:03 PM
 */
public class KeyFrame extends JFrame {
    private MyPanel1 myPanle;
    public  static boolean flage = true ;
    public static void main(String[] args) {
        KeyFrame Test = new KeyFrame();
    }

    public KeyFrame() {
        myPanle = new MyPanel1();
        this.add(myPanle);
        this.addKeyListener(myPanle);
        this.setSize(400, 300);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
    }

}

class MyPanel1 extends JPanel implements KeyListener{

    @Override
    public void keyTyped(KeyEvent e) {
        // TODO Auto-generated method stub

    }

    @Override
    public void keyPressed(KeyEvent e) {

        System.out.println(e.getKeyCode());
        if (e.getKeyCode()==32){
            KeyFrame.flage = !KeyFrame.flage ;
            System.out.println("空格");
        }
    }

    @Override
    public void keyReleased(KeyEvent e) {

    }

}
