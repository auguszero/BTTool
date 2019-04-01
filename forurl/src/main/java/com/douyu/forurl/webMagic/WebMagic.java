package com.douyu.forurl.webMagic;


import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.apache.tomcat.util.net.SSLHostConfigCertificate.Type.EC;
//import us.codecraft.webmagic.Page;
//import us.codecraft.webmagic.Site;
//import us.codecraft.webmagic.Spider;
//import us.codecraft.webmagic.processor.PageProcessor;


/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/26 10:38 PM
 */
//implements PageProcessor
public class WebMagic  {

//    private Site site = Site
//            .me()
//            .setRetryTimes(3)
//            .setSleepTime(1000)
//            .setTimeOut(10000)
//            .addHeader("Accept-Language", "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3")
//            .addHeader("Connection", "keep-alive")
//            .addHeader("X-Requested-With", "XMLHttpRequest")
//            .addHeader("Content-Type",
//                    "application/x-www-form-urlencoded;charset=utf-8")
//            .addHeader(
//                    "User-Agent",
//                    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36");
//    // 用来存储cookie信息
//    private Set<Cookie> cookies;
//
//    @Override
//    public void process(Page page) {
//
//        // 抓取规则
//
//    }

//    @Override
//    public Site getSite() {
//
//        // 将获取到的cookie信息添加到webmagic中
//        for (Cookie cookie : cookies) {
//            site.addCookie(cookie.getName().toString(), cookie.getValue()
//                    .toString());
//        }
//
//        return site;
//    }

    public void login() {
        // 登陆
        System.setProperty("webdriver.chrome.driver",
                "/Users/auguszero/work/tools/webMagic/chromedriver2"); // 注册驱动
        WebDriver driver = new ChromeDriver();

        driver.get("https://www.douyu.com/member/login");// 打开网址
        WebDriverWait webDriverWait = new WebDriverWait(driver,10000);
//        webDriverWait.until(ExpectedConditions.visibilityOfElementLocated(By.name("phoneNum")));

        // 防止页面未能及时加载出来而设置一段时间延迟
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // 设置用户名密码
        driver.findElement(By.xpath("//form[@class='loginbox-sbt btn-sub']//input")).sendKeys("17612137205"); // 用户名
        driver.findElement(By.name("//form[@data-i18n='loginbox-sbt btn-sub']//input")).sendKeys("04551forever"); // 密码
        // 模拟点击
        driver.findElement(By.xpath("//form[@class='loginbox-sbt btn-sub']/input"))
                .click(); // xpath语言：id为form-group-login的form下的button

        // 防止页面未能及时加载出来而设置一段时间延迟
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 获取cookie信息
//        cookies = driver.manage().getCookies();

        driver.close();

    }

    public static void main(String[] args) {

        String url = ""; // 地址

        WebMagic dome = new WebMagic();
        dome.login(); // 登陆
//        Spider.create(dome).addUrl(url).thread(5).start();
    }

}
