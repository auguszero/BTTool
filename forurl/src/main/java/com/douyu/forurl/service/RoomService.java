package com.douyu.forurl.service;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/25 9:23 PM
 */
@Service
public class RoomService {

    private Map<String,String> userRoomMap = new ConcurrentHashMap<String,String>();

    public void insertRoom(String roomid,String cookies){

    }


    public void getCookie(){

    }
}
