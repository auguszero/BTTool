package com.bttool.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/21 5:00 PM
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class EModel {
    private LocalDateTime time ;
    private String id ;
    private String content ;
    private String level ;
    private long eventTimestamp;
    private long watermarkTime;
}
