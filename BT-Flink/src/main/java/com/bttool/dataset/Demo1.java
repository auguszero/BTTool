package com.bttool.dataset;

import org.apache.flink.api.java.ExecutionEnvironment;
import org.apache.flink.api.java.LocalEnvironment;

public class Demo1 {
    public static void main(String[] args) {
        ExecutionEnvironment environment = ExecutionEnvironment.getExecutionEnvironment();
        environment.fromElements();
    }
}
