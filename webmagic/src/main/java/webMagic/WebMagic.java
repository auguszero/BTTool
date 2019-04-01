package webMagic;


import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.processor.PageProcessor;

import java.util.List;
import java.util.Set;


/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/26 10:38 PM
 */
//implements PageProcessor
public class WebMagic implements PageProcessor {

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
    private WebDriver webDriver;
    public static String url = "https://www.douyu.com/5957060";

    public void setWebDriver(WebDriver webDriver) {
        this.webDriver = webDriver;
    }

    @Override
    public void process(Page page) {

        webDriver.get(url);

        try {
            Thread.sleep(4000);


//        WebElement webElement = webDriver.findElement(By.xpath("//div[@class='GuessMainPanel-body-oneBox']//div[@class='GuessGameBox']"));
//        GuessGameBox
//        WebElement webElement = webDriver.findElement(By.className("GuessGameBox-theme"));
//        System.out.println(1);
//        List<WebElement> webElements = webDriver.findElements(By.className("GuessGameBox"));
//        WebElement parent = webDriver.findElement(By.xpath("//div[@class='GuessMainPanel-body-threeBox  guessGame--topGapM']"));
            List<WebElement> webElements = webDriver.findElements(By.className("GuessContItem is-left   "));
            webElements.forEach(x -> {
                x.click();
                webDriver.findElement(By.xpath("//div[@class='guessBettingPopup-inputBox']//input[@class='betInput ']"))
                        .sendKeys("10");
                webDriver.findElement(By.xpath("//div[@class='guessGame--btn guessGame--btn--sizeM']")).click();

            });
            System.out.println(1);
//        getguessId(webElements);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return;

//        WebElement webElement = driver.findElement(By.xpath("//div[@class='table-responsive sse_table_T05']"));
//        String str = webElement.getAttribute("outerHTML");
//        System.out.println(str);
//        // 防止页面未能及时加载出来而设置一段时间延迟
//        try {
//            Thread.sleep(5000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//        // 抓取规则
//        //文章页
//        Object s0 = page.getHtml().xpath("//div[@class='GuessMainPanel-body-oneBox']//div[@class='GuessGameBox']/@data-qid");
//        System.out.println(s0);

    }

    private void getguessId(List<WebElement> webElements) {
        while (true) {
            webElements.forEach(x -> System.out.println(x.getAttribute("data-qid")));
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
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

    public void login(WebDriver driver) throws InterruptedException {


        driver.get("https://www.douyu.com/member/login");// 打开网址

        // 防止页面未能及时加载出来而设置一段时间延迟
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebDriverWait webDriverWait = new WebDriverWait(driver, 30);
        webDriverWait.until(
                ExpectedConditions.visibilityOfAllElementsLocatedBy(By.className("country-phonenum")));
        // 设置用户名密码
        driver.findElement(By.className("country-phonenum")).sendKeys("17612137205"); // 用户名
        driver.findElement(By.name("password")).sendKeys("04551forever"); // 密码
        // 模拟点击
        driver.findElement(By.className("loginbox-sbt"))
                .click(); // xpath语言：id为form-group-login的form下的button

        // 防止页面未能及时加载出来而设置一段时间延迟
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // 获取cookie信息
        cookies = driver.manage().getCookies();

        System.out.println(1);

//        driver.close();

    }

//
//    public static void insert(WebDriver driver){
//        driver.get("https://www.douyu.com/1165924");
//        String bossid = driver.
//        // 防止页面未能及时加载出来而设置一段时间延迟
//        try {
//            Thread.sleep(10000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }

    public static void main(String[] args) {
        String path = WebMagic.class.getClassLoader().getResource("chromedriver2").getPath();
        // 登陆
        System.setProperty("webdriver.chrome.driver",
                path); // 注册驱动

        WebDriver webDriver = new ChromeDriver();
//        String url = "https://www.douyu.com/6118456"; // 地址

        WebMagic dome = new WebMagic();
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
