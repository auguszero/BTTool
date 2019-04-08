package com.bttool.handler;

/**
 * @author augus
 * @create 2019/04/08 10:21
 */


import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.util.Optional;
import java.util.Scanner;

import com.bttool.model.Header;
import com.bttool.model.Message;
import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.util.CharsetUtil;

/**
 * Handler implementation for the echo client.  It initiates the ping-pong
 * traffic between the echo client and server by sending the first message to
 * the server.
 */
public class EchoClientHandler extends ChannelInboundHandlerAdapter {

//    private final ByteBuf firstMessage;
    /**
     * Creates a client-side handler.
     * @throws Exception
     */

    //客户端连接服务器后调用，简单的就ctx.writeAndFlush(ByteBuf)，复杂点就自定义编解码器
    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        System.out.println("channelActive");
        //ctx.writeAndFlush(Unpooled.copiedBuffer("hello world",CharsetUtil.UTF_8));
        while (true) {
            Scanner scan = new Scanner(System.in);
            String read = scan.nextLine();
            Optional<String> readOp = Optional.of(read);
            if(readOp.isPresent()){
                Header header=new Header((byte)0, (byte)1, (byte)1, (byte)1, (byte)0, "713f17ca614361fb257dc6741332caf2",read.getBytes("UTF-8").length, 1);
                Message message=new Message(header,read);
                ctx.writeAndFlush(message);
            }
        }
    }




    //接收到数据后调用
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) {

        Message msg1=(Message)msg;

        System.out.println(msg1.getData());
    }

    //完成时调用
    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) {
        System.out.println("channelReadComplete");
        ctx.flush();
    }

    //发生异常时调用
    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        // Close the connection when an exception is raised.
        cause.printStackTrace();
        ctx.close();
    }
}