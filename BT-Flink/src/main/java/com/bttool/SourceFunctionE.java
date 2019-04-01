package com.bttool;

import com.bttool.model.EModel;
import org.apache.flink.streaming.api.functions.source.SourceFunction;
import org.apache.flink.streaming.api.watermark.Watermark;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.Date;

/**
 * @Author auguszero
 * @Descript source 创建 方式
 * @Date Create at 2019/3/21 5:13 PM
 */
public class SourceFunctionE  implements SourceFunction<EModel> {
//    private Date time ;
//    private String id ;
//    private String content ;
//    private String level ;
//    private long eventTimestamp;
//    private long watermarkTime;

    private EModel getModel(){
        LocalDateTime localDate = LocalDateTime.now();
        long timemill = localDate.toInstant(ZoneOffset.of("+8")).toEpochMilli() ;
        long timewark = LocalDateTime.of(localDate.getYear(),localDate.getMonth(),
                localDate.getDayOfMonth(),localDate.getHour(),
                localDate.getMinute()/5==0?localDate.getMinute()+5:(localDate.getMinute()/5+1)*5)
                .toInstant(ZoneOffset.of("+8")).toEpochMilli() ;
        return new EModel(localDate,timemill+"",timemill+"","1",timemill,timewark);

    }

    @Override
    public void run(SourceContext<EModel> sourceContext) throws Exception {
        while (true){
            EModel eModel =  getModel();
            sourceContext.collectWithTimestamp(eModel,eModel.getEventTimestamp());
            sourceContext.emitWatermark(new Watermark(eModel.getWatermarkTime()));
        }
    }

    @Override
    public void cancel() {

    }
}
