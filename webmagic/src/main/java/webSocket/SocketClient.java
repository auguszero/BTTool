package webSocket;

import org.java_websocket.WebSocket;
import org.java_websocket.client.WebSocketClient;
import org.java_websocket.handshake.ServerHandshake;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.net.Socket;
import java.net.URI;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/30 12:48 PM
 */
public class SocketClient {


    public static void main(String[] args) {
        Socket clientSocket;
        DataInputStream dataInputStream = null;
        DataOutputStream out = null; // 创建DataOutputStream对象
        try{
            String url = "wss://danmuproxy.douyu.com:8503";
            URI uri = new URI(url);
//            clientSocket = new Socket("")
//            创建dateInput
            Map<String, String> httpHeaders = new HashMap<String,String>();
            httpHeaders.put("Proxy-Connection","keep-alive");
            httpHeaders.put("User-Agent","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36");
            WebSocketClient mWs = new WebSocketClient(uri,httpHeaders){
                @Override
                public void onOpen(ServerHandshake serverHandshake) {
                    System.out.println("握手...");
                    for(Iterator<String> it = serverHandshake.iterateHttpFields(); it.hasNext();) {
                        String key = it.next();
                        System.out.println(key+":"+serverHandshake.getFieldValue(key));
                    }
                   short status =  serverHandshake.getHttpStatus();
                    System.out.println("status->"+status);
                }

                @Override
                public void onMessage(String s) {
                    System.out.println(s);
                }

                @Override
                public void onClose(int i, String s, boolean b) {
                    System.out.println("error");
                }

                @Override
                public void onError(Exception e) {
                    System.out.println(e.getMessage());
//                     listener f() ,once: false
                }
            };
            initTLS(mWs);
//            binaryType='arraybuffer'
//            readyState = 0
//            bufferAmount = 0
            mWs.connect();
            while (!mWs.getReadyState().equals(WebSocket.READYSTATE.OPEN)) {
                System.out.println("还没有打开");
                Thread.sleep(100);
            }
            mWs.send("asd");
            System.out.println("建立websocket连接");
            System.out.println("haha");
            System.out.println(1);
        }catch (Exception e){

        }
    }

    private static void initTLS(WebSocketClient mWs) {
        try {
            // WebSocket连接wss链接
            // This part is needed in case you are going to use self-signed
            // certificates
            TrustManager[] trustAllCerts = new TrustManager[]{new X509TrustManager() {
                public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                    return new java.security.cert.X509Certificate[]{};
                }

                public void checkClientTrusted(X509Certificate[] chain,
                                               String authType) throws CertificateException {
                }

                public void checkServerTrusted(X509Certificate[] chain,
                                               String authType) throws CertificateException {
                }
            }};
            SSLContext sc = SSLContext.getInstance("TLS");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            SSLSocketFactory factory = sc.getSocketFactory();
            // Otherwise the line below is all that is needed.
            // sc.init(null, null, null);
            mWs.setSocket(factory.createSocket());
        }catch (Exception e){
            e.printStackTrace();
        }

    }

    private void encode (){
//        var t = this.littleEndian
//                      , r = this.encoder
//                      , n = (0,
//                    this.concat)(r.encode(e), [0])
//                      , o = 8 + n.byteLength
//                      , i = new DataView(new ArrayBuffer(o + 4))
//                      , a = 0;
//                    return i.setUint32(a, o, t),
//                    a += 4,
//                    i.setUint32(a, o, t),
//                    a += 4,
//                    i.setInt16(a, 689, t),
//                    a += 2,
//                    i.setInt8(a, 0),
//                    a += 1,
//                    i.setInt8(a, 0),
//                    a += 1,
    }
}
