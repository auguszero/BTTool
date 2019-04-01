package com.douyu.forurl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@ComponentScan("com.douyu.forurl")
@EnableAutoConfiguration
@Configuration
@EnableCaching
@EnableScheduling
@EnableSwagger2
@SpringBootApplication
public class ForurlApplication {

    public static void main(String[] args) {
        SpringApplication.run(ForurlApplication.class, args);
    }

}
