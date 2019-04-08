package webMagic;

import lombok.extern.slf4j.Slf4j;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.processor.PageProcessor;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/4/8 10:15 PM
 */
@Slf4j
public class BeginGuess implements PageProcessor {

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
    private boolean restartFlag =  true ;
    Lock lock = new ReentrantLock();
    private List<String> buttonlist = new ArrayList<String>();
    public static String url = "https://www.douyu.com/691696";
    public transient int successNums = 0;
    public transient int falesNums = 0;
    public transient int gameNums = 0;

    public void setWebDriver(WebDriver webDriver) {
        this.webDriver = webDriver;
    }


    @Override
    public void process(Page page) {
        webDriver.get(url);
        webDriver.findElement()

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

    public void login(WebDriver driver) throws InterruptedException {
        driver.get("https://www.douyu.com/member/login");// 打开网址
        while (cookies == null || cookies.size() <= 4) {
            cookies = driver.manage().getCookies();
            Thread.sleep(1000);
        }
        // 获取cookie信息
    }


    public static void main(String[] args) {
        System.out.println(System.getProperty("PATH"));
        url = args[2];
        String path = BeginGuess.class.getClassLoader().getResource("chromedriver2").getPath();
        log.info("path->" + path);
        System.setProperty("webdriver.chrome.driver",
                path); // 注册驱动
        WebDriver webDriver = new ChromeDriver();
        BeginGuess dome = new BeginGuess();
        try {
            dome.login(webDriver); // 登陆
            dome.setWebDriver(webDriver);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Spider.create(dome).addUrl(url).thread(5).start();
        System.out.println(1);
    }
}
