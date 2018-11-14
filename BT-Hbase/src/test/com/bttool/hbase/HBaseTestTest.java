package com.bttool.hbase;

import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.client.Put;
import org.apache.hadoop.hbase.client.Table;
import org.junit.Test;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.Assert.*;

public class HBaseTestTest {


    String tableName = "hm2:people";

    @Test
    public void createTable() {
        List<String> list = new ArrayList<String>();
        list.add("info");
        list.add("table");
        HBaseTest.createTable(tableName, list.toArray(new String[]{}));
    }


    @Test
    public void insertData() throws Exception {
        long time = System.currentTimeMillis();
        long starttime = time;
        for(int i=0;i<100000000;i++) {
            HBaseTest.insertData(tableName, "test01"+i, "info", "age", "111"+i);
            HBaseTest.insertData(tableName, "test01"+i, "info", "name", "augus"+i);
            HBaseTest.insertData(tableName, "test01"+i, "info", "job", "java"+i);
            if(i%1000==0){
                long endtime = System.currentTimeMillis();
                System.out.println((endtime-starttime)+"ms");
                starttime = endtime;
            }
        }
        System.out.println("endTime:"+(System.currentTimeMillis()-time)+"ms");

    }

    @Test
    public void insetDateList() throws Exception {
        long time = System.currentTimeMillis();
        long starttime = time;
        List<HbaseModel> list = new ArrayList<HbaseModel>();
        for(int i=0;i<1000000;i++) {
            list.add(new HbaseModel("test01"+i, "info", "age", "111"+i));
            if(i%10000==0){
                HBaseTest.insertDataList(tableName,list);
                list = new ArrayList<HbaseModel>();
                long endtime = System.currentTimeMillis();
                System.out.println((endtime-starttime)+"ms");
                starttime = endtime;
            }
        }
        System.out.println("endTime:"+(System.currentTimeMillis()-time)+"ms");
    }



    @Test
    public void insertDataListForBuffer() throws Exception {
        long time = System.currentTimeMillis();
        long starttime = time;
        List<HbaseModel> list = new ArrayList<HbaseModel>();
        for(int i=0;i<1000000;i++) {
            list.add(new HbaseModel("test01"+i, "info", "age", "111"+i));
            if(i%10000==0){
                HBaseTest.insertDataListForBuffer(tableName,list);
                list = new ArrayList<HbaseModel>();
                long endtime = System.currentTimeMillis();
                System.out.println((endtime-starttime)+"ms");
                starttime = endtime;
            }
        }
        System.out.println("endTime:"+(System.currentTimeMillis()-time)+"ms");
    }


    @Test
    public void queryAll() throws Exception {
        HBaseTest.queryAll(tableName);
    }

    @Test
    public void queryByCondition() {
        HBaseTest.queryByCondition(tableName,"info","age","1119");
    }

    @Test
    public void queryByConditions() {
        HBaseTest.queryByCondition(tableName,"info","age","111996");
    }


}