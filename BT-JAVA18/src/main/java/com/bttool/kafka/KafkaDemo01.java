package com.bttool.kafka;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.util.Arrays;
import java.util.Properties;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/23 7:05 AM
 */
public class KafkaDemo01 {
    public static void main(String[] args) {
        Properties props = new Properties();
        /* 定义kakfa 服务的地址，不需要将所有broker指定上 */
        props.put("bootstrap.servers", "qcloud-kafka01:9092");
        /* 制定consumer group */
        props.put("group.id", "test");
        /* 是否自动确认offset */
        props.put("enable.auto.commit", "true");
        /* 自动确认offset的时间间隔 */
        props.put("auto.commit.interval.ms", "1000");
        props.put("session.timeout.ms", "30000");
        /* key的序列化类 */
        props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        /* value的序列化类 */
        props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");

        KafkaConsumer kafkaConsumer = new KafkaConsumer(props);
        kafkaConsumer.subscribe(Arrays.asList("tongji-flash-hm3"));

        /* 读取数据，读取超时时间为100ms */
        while (true) {
            ConsumerRecords<String, String> records = kafkaConsumer.poll(100);
            kafkaConsumer.commitSync();
            for (ConsumerRecord<String, String> record : records) {
                System.out.printf("offset = %d, key = %s, value = %s", record.offset(), record.key(), record.value());
            }

        }
    }
}
