package com.douyu.forurl.controller;

import com.douyu.forurl.model.ResponseBackResult;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/25 9:20 PM
 */
@RestController()
@Slf4j
@Api("flink 操作api ")
public class RoomController {


    @RequestMapping(value = "/insertRoom/{roomid}" , method = RequestMethod.GET )
    public ResponseBackResult insertRoom( @PathVariable  String roomid ,HttpServletRequest request,HttpServletResponse response ){
        Cookie[] cookies = request.getCookies();
        System.out.println("roomid->"+roomid);
        if(cookies != null){
            for(Cookie cookie : cookies){
                System.out.println("name:"+cookie.getName()+"   value:"+cookie.getValue());
            }
        }
        return new ResponseBackResult();
    }
}
