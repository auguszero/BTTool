package com.bttool.hbase;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author augus
 * @create 2018/11/13 18:06
 */
@Data
@AllArgsConstructor
@NoArgsConstructor

public class HbaseModel {
    private String rowId;
    private String familyName;
    private  String qualifier;
    private String value ;
}
