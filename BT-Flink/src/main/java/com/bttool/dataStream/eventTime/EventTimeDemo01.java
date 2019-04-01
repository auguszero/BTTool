package com.bttool.dataStream.eventTime;

import com.bttool.SourceFunctionE;
import com.bttool.model.EModel;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStreamSource;
import org.apache.flink.streaming.api.datastream.SingleOutputStreamOperator;
import org.apache.flink.streaming.api.environment.StreamExecutionEnvironment;
import org.junit.Before;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/22 3:19 PM
 */

public class EventTimeDemo01 {

    private StreamExecutionEnvironment env  ;
    @Before
    public void before(){
         env = StreamExecutionEnvironment.getExecutionEnvironment();
    }


    public void initSource(){
        DataStreamSource<EModel> dataStreamSource = env.addSource(new SourceFunctionE());
        SingleOutputStreamOperator<String> contentStr = dataStreamSource.map((MapFunction<EModel, String>) EModel::getContent);
    }
}
