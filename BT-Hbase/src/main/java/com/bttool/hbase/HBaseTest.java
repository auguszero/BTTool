package com.bttool.hbase;


import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.hbase.Cell;
import org.apache.hadoop.hbase.CellUtil;
import org.apache.hadoop.hbase.HBaseConfiguration;
import org.apache.hadoop.hbase.HColumnDescriptor;
import org.apache.hadoop.hbase.HTableDescriptor;
import org.apache.hadoop.hbase.MasterNotRunningException;
import org.apache.hadoop.hbase.TableName;
import org.apache.hadoop.hbase.ZooKeeperConnectionException;
import org.apache.hadoop.hbase.client.Admin;
import org.apache.hadoop.hbase.client.Connection;
import org.apache.hadoop.hbase.client.ConnectionFactory;
import org.apache.hadoop.hbase.client.Delete;
import org.apache.hadoop.hbase.client.Get;
import org.apache.hadoop.hbase.client.HTable;
import org.apache.hadoop.hbase.client.Put;
import org.apache.hadoop.hbase.client.Result;
import org.apache.hadoop.hbase.client.ResultScanner;
import org.apache.hadoop.hbase.client.Scan;
import org.apache.hadoop.hbase.client.Table;
import org.apache.hadoop.hbase.filter.CompareFilter.CompareOp;
import org.apache.hadoop.hbase.filter.BinaryComparator;
import org.apache.hadoop.hbase.filter.BinaryPrefixComparator;
import org.apache.hadoop.hbase.filter.CompareFilter;
import org.apache.hadoop.hbase.filter.Filter;
import org.apache.hadoop.hbase.filter.FilterList;
import org.apache.hadoop.hbase.filter.RegexStringComparator;
import org.apache.hadoop.hbase.filter.RowFilter;
import org.apache.hadoop.hbase.filter.SingleColumnValueFilter;
import org.apache.hadoop.hbase.filter.SubstringComparator;
import org.apache.hadoop.hbase.util.Bytes;
import org.apache.hadoop.hbase.util.MD5Hash;


/**
 * @author augus
 * @create 2018/11/13 15:51
 */
public class HBaseTest {
    // 声明静态配置，配置zookeeper
    static Configuration configuration = null;
    static Connection connection = null;

    static {
        configuration = HBaseConfiguration.create();
        configuration.set("hbase.master", "qcloud-hbase01:60000");
        configuration.set("hbase.zookeeper.quorum", "qcloud-hbase01");
        configuration.set("hbase.zookeeper.property.clientPort", "2181");
        configuration.set("hbase.client.write.buffer", String.valueOf(4*1024*1024));

        try {
            connection = ConnectionFactory.createConnection(configuration);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 创建表
     */
    public static void createTable(String tableStr, String[] familyNames) {
        System.out.println("start create table ......");
        try {
            Admin admin = connection.getAdmin();
            TableName tableName = TableName.valueOf(tableStr);
            if (admin.tableExists(tableName)) {// 如果存在要创建的表，那么先删除，再创建
                admin.disableTable(tableName);
                admin.deleteTable(tableName);
                System.out.println(tableName + " is exist,detele....");
                return;
            }
            HTableDescriptor tableDescriptor = new HTableDescriptor(tableName);
// 添加表列信息
            if (familyNames != null && familyNames.length > 0) {
                for (String familyName : familyNames) {
                    tableDescriptor.addFamily(new HColumnDescriptor(familyName));
                }
            }
            admin.createTable(tableDescriptor);
        } catch (MasterNotRunningException e) {
            e.printStackTrace();
        } catch (ZooKeeperConnectionException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("end create table ......");
    }

    /**
     * 添加行列数据数据
     */
    public static void insertData(String tableName, String rowId, String familyName, String qualifier, String value) throws Exception {
        System.out.println("start insert data ......");
        HTable table = (HTable) connection.getTable(TableName.valueOf(tableName));
        table.setAutoFlush(false);
        Put put = new Put(rowId.getBytes());// 一个PUT代表一行数据，再NEW一个PUT表示第二行数据,每行一个唯一的ROWKEY，此处rowkey为put构造方法中传入的值
        put.addColumn(familyName.getBytes(), qualifier.getBytes(), value.getBytes());// 本行数据的第一列
        try {
            table.put(put);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("end insert data ......");
    }


    /**
     * 添加行列数据数据
     */
    public static void insertDataList(String tableName, List<HbaseModel> list) throws Exception {
        System.out.println("start insert data ......");
        HTable table = (HTable) connection.getTable(TableName.valueOf(tableName));
        table.setAutoFlush(false);
        List<Put> putList = new ArrayList<Put>();
        list.forEach(x->{
            Put put = new Put(x.getRowId().getBytes());// 一个PUT代表一行数据，再NEW一个PUT表示第二行数据,每行一个唯一的ROWKEY，此处rowkey为put构造方法中传入的值
            put.addColumn(x.getFamilyName().getBytes(), x.getQualifier().getBytes(), x.getValue().getBytes());// 本行数据的第一列
            putList.add(put);
        });
        try {
            table.put(putList);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("end insert data ......");
    }


    /**
     * 添加行列数据数据
     */
    public static void insertDataListForBuffer(String tableName, List<HbaseModel> list) throws Exception {
        System.out.println("start insert data ......");
        HTable table = (HTable) connection.getTable(TableName.valueOf(tableName));
        table.setAutoFlush(false);
        try {
            for(HbaseModel x:list){
                Put put = new Put(x.getRowId().getBytes());// 一个PUT代表一行数据，再NEW一个PUT表示第二行数据,每行一个唯一的ROWKEY，此处rowkey为put构造方法中传入的值
                put.addColumn(x.getFamilyName().getBytes(), x.getQualifier().getBytes(), x.getValue().getBytes());// 本行数据的第一列
                table.put(put);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        table.flushCommits();
        System.out.println("end insert data ......");
    }

    public static void insertData(String tableName, byte[] rowId, String familyName, String qualifier, String value) throws Exception {
        System.out.println("start insert data ......");
        Table table = connection.getTable(TableName.valueOf(tableName));
        Put put = new Put(rowId);// 一个PUT代表一行数据，再NEW一个PUT表示第二行数据,每行一个唯一的ROWKEY，此处rowkey为put构造方法中传入的值
        put.addColumn(familyName.getBytes(), qualifier.getBytes(), value.getBytes());// 本行数据的第一列
        try {
            table.put(put);
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("end insert data ......");
    }

    /**
     * 删除行
     */
    public static void deleteRow(String tablename, String rowkey) {
        try {
            Table table = connection.getTable(TableName.valueOf(tablename));
            Delete d1 = new Delete(rowkey.getBytes());
            table.delete(d1);//d1.addColumn(family, qualifier);d1.addFamily(family);
            System.out.println("删除行成功!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 查询所有数据
     */
    public static void queryAll(String tableName) throws Exception {
        Table table = connection.getTable(TableName.valueOf(tableName));
        try {
            ResultScanner rs = table.getScanner(new Scan());
            for (Result r : rs) {
                System.out.println("rowkey:" + new String(r.getRow()));
                for (Cell keyValue : r.rawCells()) {
                    System.out.println("列：" + new String(CellUtil.cloneFamily(keyValue)) + ":" + new String(CellUtil.cloneQualifier(keyValue)) + " 值:" + new String(CellUtil.cloneValue(keyValue)));
                }
            }
            rs.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 根据rowId查询
     */
    public static void queryByRowId(String tableName, String rowId) throws Exception {
        Table table = connection.getTable(TableName.valueOf(tableName));
        try {
            Get scan = new Get(rowId.getBytes());// 根据rowkey查询
            Result r = table.get(scan);
            System.out.println("获得到rowkey:" + new String(r.getRow()));
            for (Cell keyValue : r.rawCells()) {
                System.out.println("列：" + new String(CellUtil.cloneFamily(keyValue)) + ":" + new String(CellUtil.cloneQualifier(keyValue)) + " 值:" + new String(CellUtil.cloneValue(keyValue)));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 根据列条件查询
     */
    public static void queryByCondition(String tableName, String familyName, String qualifier, String value) {

        try {
            Table table = connection.getTable(TableName.valueOf(tableName));
            FilterList filter = new FilterList();
            SingleColumnValueFilter singleColumnValueFilter = new SingleColumnValueFilter(Bytes.toBytes(familyName), Bytes.toBytes(qualifier), CompareOp.EQUAL, Bytes.toBytes(value)); // 当列familyName的值为value时进行查询
            singleColumnValueFilter.setFilterIfMissing(true);
            filter.addFilter(singleColumnValueFilter);

            Scan s = new Scan();
            s.setFilter(filter);
            ResultScanner rs = table.getScanner(s);
            for (Result r : rs) {
                System.out.println("rowkey:" + new String(r.getRow()));
                for (Cell keyValue : r.rawCells()) {
                    System.out.println("列：" + new String(CellUtil.cloneFamily(keyValue)) + ":" + new String(CellUtil.cloneQualifier(keyValue)) + " 值:" + new String(CellUtil.cloneValue(keyValue)));
                }
            }
            rs.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    /**
     * 多条件查询
     */
    public static void queryByConditions(String tableName, String[] familyNames, String[] qualifiers, String[] values) {

        try {
            Table table = connection.getTable(TableName.valueOf(tableName));
            List<Filter> filters = new ArrayList<Filter>();
            if (familyNames != null && familyNames.length > 0) {
                int i = 0;
                for (String familyName : familyNames) {
                    Filter filter = new SingleColumnValueFilter(Bytes.toBytes(familyName), Bytes.toBytes(qualifiers[i]), CompareOp.EQUAL, Bytes.toBytes(values[i]));
                    filters.add(filter);
                    i++;
                }
            }
            FilterList filterList = new FilterList(filters);
            Scan scan = new Scan();
            scan.setFilter(filterList);
            ResultScanner rs = table.getScanner(scan);
            for (Result r : rs) {
                System.out.println("rowkey:" + new String(r.getRow()));
                for (Cell keyValue : r.rawCells()) {
                    System.out.println(" 列：" + new String(CellUtil.cloneFamily(keyValue)) + ":" + new String(CellUtil.cloneQualifier(keyValue)) + " 值:" + new String(CellUtil.cloneValue(keyValue)));
                }
            }
            rs.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 删除表
     */
    public static void dropTable(String tableStr) {
        try {
            Admin admin = connection.getAdmin();
            TableName tableName = TableName.valueOf(tableStr);
            admin.disableTable(tableName);
            admin.deleteTable(tableName);
            admin.close();
        } catch (MasterNotRunningException e) {
            e.printStackTrace();
        } catch (ZooKeeperConnectionException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void testRowFilter(String tablename) throws IOException {
        Table table = connection.getTable(TableName.valueOf(tablename));
        Scan scan = new Scan();
        System.out.println("小于等于5bd1501213528531的行");
        Filter filter1 = new RowFilter(CompareFilter.CompareOp.LESS_OR_EQUAL,
                new BinaryComparator("5bd1501213528531".getBytes()));
        scan.setFilter(filter1);
        ResultScanner scanner1 = table.getScanner(scan);
        for (Result res : scanner1) {
            System.out.println("rowkey:" + new String(res.getRow()));
//for (Cell keyValue : res.rawCells()) {
//System.out.println(" 列：" + new String(CellUtil.cloneFamily(keyValue))+":"+new String(CellUtil.cloneQualifier(keyValue)) + " 值:" + new String(CellUtil.cloneValue(keyValue)));
//}

        }
        scanner1.close();
        System.out.println("正则获取结尾为5的行");
        Filter filter2 = new RowFilter(CompareFilter.CompareOp.EQUAL, new RegexStringComparator(".*5$"));
        scan.setFilter(filter2);
        ResultScanner scanner2 = table.getScanner(scan);
        for (Result res : scanner2) {
            System.out.println("rowkey:" + new String(res.getRow()));
//for (Cell keyValue : res.rawCells()) {
//System.out.println(" 列：" + new String(CellUtil.cloneFamily(keyValue))+":"+new String(CellUtil.cloneQualifier(keyValue)) + " 值:" + new String(CellUtil.cloneValue(keyValue)));
//}
        }
        scanner2.close();
        System.out.println("包含有5的行");
        Filter filter3 = new RowFilter(CompareFilter.CompareOp.EQUAL, new SubstringComparator("5"));

        scan.setFilter(filter3);
        ResultScanner scanner3 = table.getScanner(scan);
        for (Result res : scanner3) {
            System.out.println("rowkey:" + new String(res.getRow()));
//for (Cell keyValue : res.rawCells()) {
//System.out.println(" 列：" + new String(CellUtil.cloneFamily(keyValue))+":"+new String(CellUtil.cloneQualifier(keyValue)) + " 值:" + new String(CellUtil.cloneValue(keyValue)));
//}
        }
        scanner3.close();
        System.out.println("开头是010的");
        Filter filter4 = new RowFilter(CompareFilter.CompareOp.EQUAL,
                new BinaryPrefixComparator("010".getBytes()));
        scan.setFilter(filter4);
        ResultScanner scanner4 = table.getScanner(scan);
        for (Result res : scanner4) {
            System.out.println("rowkey:" + new String(res.getRow()));
//for (Cell keyValue : res.rawCells()) {
//System.out.println(" 列：" + new String(CellUtil.cloneFamily(keyValue))+":"+new String(CellUtil.cloneQualifier(keyValue)) + " 值:" + new String(CellUtil.cloneValue(keyValue)));
//}
        }
        scanner3.close();
    }

    public static void main(String[] args) throws Exception {


//----------------创建表---------------------

// createTable("t2", new String[]{"f1"});


//----------------添加数据 -------------------

        for (int i = 0; i < 10; i++) {
            long currentId = new Date().getTime();
            DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");


            byte[] rowkey = Bytes.add(MD5Hash.getMD5AsHex(Bytes.toBytes(currentId)).substring(0, 3).getBytes(),
                    Bytes.toBytes(String.valueOf(currentId)));
//System.out.println(rowkey.length);

            insertData("t2", rowkey, "f1", "time_str", format.format(currentId));
            insertData("t2", rowkey, "f1", "time_long", String.valueOf(currentId));
        }


//---------------查询全部数据 ------------------

        queryAll("t2");
////--------------根据rowid查询数据 --------------
// queryByRowId("t2", "bdc1501213528573");


//--------------列条件查询----------------------
// queryByCondition("t2", "f1","time_long", "1501213528573");


////--------------多条件查询----------------------
// queryByConditions("t2", new String[]{"f1"},new String[]{"time_long","time_str"}, new String[]{"1501213528573","2017-07-28 11:45:28 573"});
////--------------删除记录-----------------------
// deleteRow("t2", "row-0001");
////--------------删除表------------------------
// dropTable("t2");

        testRowFilter("t2");

    }

}
