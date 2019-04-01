package webMagic;


import lombok.extern.slf4j.Slf4j;

import org.jsoup.nodes.Element;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.processor.PageProcessor;

import java.util.*;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/26 10:38 PM
 */
@Slf4j
public class WebMagic5 implements PageProcessor {

    private Site site = Site
            .me()
            .setRetryTimes(3)
            .setSleepTime(1000)
            .setTimeOut(10000)
            .addHeader("Accept-Language", "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3")
            .addHeader("Connection", "keep-alive")
            .addHeader("X-Requested-With", "XMLHttpRequest")
            .addHeader("Content-Type",
                    "application/x-www-form-urlencoded;charset=utf-8")
            .addHeader(
                    "User-Agent",
                    "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36");
    // 用来存储cookie信息
    private Set<Cookie> cookies;
    private volatile WebDriver webDriver;
    private boolean flage = false;
    private boolean restartFlag = true;
    Lock lock = new ReentrantLock();
    private List<String> buttonlist = new ArrayList<String>();
    public String url = "https://www.douyu.com/691696";
    public transient int successNums = 0;
    public transient int falesNums = 0;
    public transient int gameNums = 0;
    public String money = "";
    public String key = "";


    public void setWebDriver(WebDriver webDriver) {
        this.webDriver = webDriver;
    }

    public void setCookies(Set<Cookie> cookies) {
        this.cookies = cookies;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public void setMoney(String money) {
        this.money = money;
    }

    @Override
    public void process(Page page) {

        try {
            webDriver.get(url);
            Element element = page.getHtml().getDocument().getElementById("");

//            Thread.sleep(3000);
            // 获取数据
//        getguessId(webElements);
        } catch (Exception e) {
            process(page);
            e.printStackTrace();
        }
        return;
    }


    /**
     * 在按钮下直接 添加新的 弹窗
     * @param webDriver
     */
    public void addButton(WebDriver webDriver,String dataQid,Page page ){
        try {
            WebElement webElement =  webDriver.findElement(By.xpath("//div[@class='GuessGameBox-theme']"));
            page.getHtml().getDocument().getElementById("");
        }catch (Exception e){
            e.printStackTrace();
        }
    }



    @Override
    public Site getSite() {

        // 将获取到的cookie信息添加到webmagic中
        for (Cookie cookie : cookies) {
            site.addCookie(cookie.getName().toString(), cookie.getValue()
                    .toString());
            System.out.println("name->" + cookie.getName().toString() + " value->" + cookie.getValue());
        }

        return site;
    }

    public Set<Cookie> login(WebDriver driver) throws InterruptedException {
        driver.get("https://www.douyu.com/member/login");// 打开网址
        while (cookies == null || cookies.size() <= 4) {
            cookies = driver.manage().getCookies();
            Thread.sleep(1000);
        }

        log.info("用户名 {} 登录成功", new Object[]{"111"});
        return cookies;
    }


    public static void main(String[] args) {
        try {
            int num = Integer.parseInt(args[3]);
            System.out.println(System.getProperty("PATH"));
            System.out.println("路径在。。。。" + WebMagic5.class.getClassLoader().getResource("").getPath());
            String path = WebMagic5.class.getClassLoader().getResource("chromedriver2").getPath();
            // 登陆
            System.setProperty("webdriver.chrome.driver", path); // 注册驱动
            loginWithChrom(args);
            log.info("path->" + path);
        }catch (Exception e){
            e.printStackTrace();
        }
    }




    public static WebMagic5 setWebMagic(String[] args) {
        final String url = args[0];
        String money = args[1];
        String key = args[2];
        WebMagic5 domes = new WebMagic5();
        domes.setUrl(url);
        domes.setMoney(money);
        domes.setUrl(url);
        domes.setKey(key);
        return domes;
    }

    public static void loginWithChrom(String[] args) throws InterruptedException {
        WebMagic5 domes = setWebMagic(args);
        String url = args[0];
        WebDriver webDriver = new ChromeDriver();
        Set<Cookie> cookies = domes.login(webDriver);
        // 登陆
        domes.setCookies(cookies);
        domes.setWebDriver(webDriver);
        Spider.create(domes).addUrl(url).thread(5).start();
    }

}
