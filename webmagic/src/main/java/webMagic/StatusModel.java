package webMagic;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/28 11:00 PM
 */
public class StatusModel {
    public static String RIGHT = " is-right ";
    public static String LEFT = " is-left ";
    public static String CLOSED = " is-closed ";
    public static String NORMAL = "  ";
    public  static String WAITED = " is-watied ";
    public static String WAITGUESS = "is-waitGuess  ";
    public static String GUESS = "GuessContItem";

    public static int LEFT_CODE = 100;
    public static int RIGHT_CODE = 200 ;
    public static int NORMAL_CODE = 1;
    public static int CLOSED_CODE = 2;
    public static int WAITED_CODE = 3;
    public static int WAITGUESS_CODE = 4;


    public static String GUESS_LEFT_NORMAL = GUESS+LEFT+NORMAL;  // 左侧正常可下注按钮
    public static String GUESS_LEFT_CLOSED = GUESS+LEFT+CLOSED ; // 左侧可下注按钮关闭状态
    public static String GUESS_LEFT_WAITED = GUESS+LEFT+WAITED ; // 左侧可下注按钮等待状态
    public static String GUESS_LEFT_WAITGUESS = GUESS+LEFT+WAITGUESS ; // 左侧可下注按钮等待猜测状态

    public static String GUESS_RIGHT_NORMAL = GUESS+RIGHT+NORMAL;  // 右侧正常可下注按钮
    public static String GUESS_RIGHT_CLOSED = GUESS+RIGHT+CLOSED ; // 右侧可下注按钮关闭状态
    public static String GUESS_RIGHT_WAITED = GUESS+RIGHT+WAITED ; // 右侧可下注按钮等待状态
    public static String GUESS_RIGHT_WAITGUESS = GUESS+RIGHT+WAITGUESS ; // 右侧可下注按钮等待猜测状态


    public static int GUESS_LEFT_NORMAL_CODE = 101;  // 左侧正常可下注按钮
    public static int GUESS_LEFT_CLOSED_CODE = 102 ; // 左侧可下注按钮关闭状态
    public static int GUESS_LEFT_WAITED_CODE = 103 ; // 左侧可下注按钮等待状态
    public static int GUESS_LEFT_WAITGUESS_CODE = 104; // 左侧可下注按钮等待猜测状态

    public static int GUESS_RIGHT_NORMAL_CODE = 201;  // 右侧正常可下注按钮
    public static int GUESS_RIGHT_CLOSED_CODE = 202 ; // 右侧可下注按钮关闭状态
    public static int GUESS_RIGHT_WAITED_CODE = 203 ; // 右侧可下注按钮等待状态
    public static int GUESS_RIGHT_WAITGUESS_CODE = 204 ; // 右侧可下注按钮等待猜测状态

    public static int GUESS_NO_CODE = 300; // 不存在code

}
