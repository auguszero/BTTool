package com.bttool.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/26 11:51 AM
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {
    private String name ;
    private String nickname ;
    private long age ;
}
