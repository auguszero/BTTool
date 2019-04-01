package webSocket;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/30 3:01 PM
 */
public class Encode {
    public final static int UINT8 = 0xcc;

    public static long Uint8Array(long num) {
        long j = num;
        if (j < 0) {
            j = num + Math.abs(num) / 256 * 256 + 256;
        }
        if (j > 255) {
            j = num - num / 256 * 256;
        }
        return j;
    }


    public static void setUnit32(long num){

    }

    public static void setInt16(long num){

    }

    public static void setInt8(long num){

    }


//    Uint8Array
    public static long[] packUint8(long value) {
        long[] buf = new long[2];
        buf[0] = Uint8Array(UINT8);
        buf[1] = Uint8Array(value);
        return buf;
    }
}
