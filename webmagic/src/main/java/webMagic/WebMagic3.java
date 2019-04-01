package webMagic;


import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CookieStore;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.BasicCookieStore;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.cookie.BasicClientCookie;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.CharArrayBuffer;
import org.apache.http.util.EntityUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.processor.PageProcessor;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.util.*;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static webMagic.StatusModel.*;


/**
 * @Author auguszero
 * @Descript ${DESCRIPTION}
 * @Date Create at 2019/3/26 10:38 PM
 */
@Slf4j
public class WebMagic3 implements PageProcessor {

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
    public static List<String> list = new ArrayList<String>();
//
    static {
        list.add("风癞");
        list.add("风赖");
        list.add("疯赖");
        list.add("疯癞");
        list.add("风牌");
    }

    public void setWebDriver(WebDriver webDriver) {
        this.webDriver = webDriver;
    }

    public void setCookies(Set<Cookie> cookies) {
        this.cookies = cookies;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    public void setMoney(String money) {
        this.money = money;
    }

    @Override
    public void process(Page page) {
//        if(page.getUrl().regex("https://www\\.douyu\\.com").match()){
//            List<String> ids = new JsonPathSelector("$.data[*]._id").selectList(page.getRawText());
//            if (CollectionUtils.isNotEmpty(ids)) {
//                for (String id : ids) {
//                    page.addTargetRequest("http://angularjs.cn/api/article/" + id);
//                }
//            }
//        } else {
//            page.putField("title", new JsonPathSelector("$.data.title").select(page.getRawText()));
//            page.putField("content", new JsonPathSelector("$.data.content").select(page.getRawText()));
//        }
        webDriver.get(url);
        try {
            Thread.sleep(4000);
            // 获取数据
            transBoxId();
            insertButton(true);
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

    /**
     * 下注操作
     *
     * @return
     * @throws InterruptedException
     */
    private void insertButton(boolean left) throws InterruptedException {
        try {
            insert03(left);
//            insert02(left);
//            insert01(left);
            return;
        } catch (Exception e) {
            e.printStackTrace();
        }
    }



    private void insert03(boolean left) throws InterruptedException {
        while (true) {
            try {
                //关闭的数据
                filterKnowBtns();
                List<WebElement> webElements = webDriver.findElements(By.xpath("//div[@class='GuessGameBox']"));
                List<String> dataQids = new ArrayList<String>();
                if (webElements.size() > 0) {
                    for (WebElement webElement : webElements) {
                        String dataName = webElement.getAttribute("data-qt");
                        list.forEach(x -> {
                            if (dataName.contains(x)) {
                                dataQids.add(webElement.getAttribute("data-qid"));
                            }
                        });
                    }
                }
                int currentNum = new Integer(gameNums);
                while (currentNum == gameNums) {

                    dataQids.forEach(dataQid -> {
                        List<WebElement> noElement = webDriver.findElements(By.xpath("//div[@data-qid='" + dataQid + "']//div[@class='GuessContItem is-right   ']"));
                        if (noElement.size() > 0) {
                            noElement.get(0).click();
                            System.out.println("111111111........");
                            webDriver.findElement(By.xpath("//div[@class='guessBettingPopup-inputBox']//input[@class='betInput ']"))
                                    .sendKeys(money);
                            webDriver.findElement(By.xpath("//div[@class='guessGame--btn guessGame--btn--sizeM']")).click();
                        }
                    });

                }
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
    }

    private void insert02(boolean left) throws InterruptedException {
        while (true) {
            if (flage) {
                List<WebElement> webElements = webDriver.findElements(By.xpath("//div[@class='GuessGameBox']"));
                String dataQid = "";
                if (webElements.size() > 0) {
                    for (WebElement webElement : webElements) {
                        String dataName = webElement.getAttribute("data-qt");
                        if (dataName.contains("风赖")) {
                            dataQid = webElement.getAttribute("data-qid");
                            break;
                        }
                    }
                }
                boolean noflage = true;
                while (noflage) {
                    if (restartFlag) {
                        restartFlag = false;
                        break;
                    }
//                    List<WebElement> noElement = webDriver.findElements(By.xpath("//div[@data-qid='" + dataQid + "']//div[@data-qs=1]"));
//                    List<WebElement> noElement = webDriver.findElements(By.xpath("//div[@data-qid='" + dataQid + "']//div[contains(@class,'is-right')"));
                    List<WebElement> noElement = webDriver.findElements(By.xpath("//div[@data-qid='" + dataQid + "']//div[@class='GuessContItem is-left   ']"));
                    if (noElement.size() > 0) {
//                        urlPost(dataQid);
                        noElement.get(0).click();
                        webDriver.findElement(By.xpath("//div[@class='guessBettingPopup-inputBox']//input[@class='betInput ']"))
                                .sendKeys("10");
                        webDriver.findElement(By.xpath("//div[@class='guessGame--btn guessGame--btn--sizeM']")).click();
                        noflage = false;
                        flage = false;
                    }
                }


            } else {
                log.info("等待下一波下注数据....");
            }

            Thread.sleep(1000);
        }
    }

    private void urlPost(String dataQid) {
        Map<String, String> map = new HashMap<String, String>();
        map.put("room_id", url.split("/")[url.split("/").length - 1]);
        map.put("quiz_id", dataQid);
        map.put("bet_amount", "10");
        map.put("money_type", "1");
        map.put("banker_id", "57488236");
        map.put("ctn", "eeb7504034cfd19914bbe0572614ba48");
        postMap("https://www.douyu.com/member/quiz/user_bet", map);
        System.out.println("=========");
    }

    /**
     * 发送post请求，参数用map接收
     *
     * @param url 地址
     * @param map 参数
     * @return 返回值
     */
    public String postMap(String url, Map<String, String> map) {
        String result = null;
        CookieStore cookieStore = new BasicCookieStore();
        cookies.forEach(cookie -> {
            BasicClientCookie basiccookie = new BasicClientCookie(cookie.getName(), cookie.getValue());
            basiccookie.setDomain("www.douyu.com");
            cookieStore.addCookie(basiccookie);
        });
        CloseableHttpClient httpClient = HttpClients.custom().setDefaultCookieStore(cookieStore).build();
        HttpPost post = new HttpPost(url);
        List<NameValuePair> pairs = new ArrayList<NameValuePair>();
        for (Map.Entry<String, String> entry : map.entrySet()) {
            pairs.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
        }
        CloseableHttpResponse response = null;
        try {
            post.setEntity(new UrlEncodedFormEntity(pairs, "UTF-8"));
            post.setHeader("content-type", "application/x-www-form-urlencoded");
            response = httpClient.execute(post);
            if (response != null && response.getStatusLine().getStatusCode() == 200) {
                HttpEntity entity = response.getEntity();
                result = entityToString(entity);
                System.out.println(result);
            }
            return result;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                httpClient.close();
                if (response != null) {
                    response.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        return null;
    }


    private String entityToString(HttpEntity entity) throws IOException {
        String result = null;
        if (entity != null) {
            long lenth = entity.getContentLength();
            if (lenth != -1 && lenth < 2048) {
                result = EntityUtils.toString(entity, "UTF-8");
            } else {
                InputStreamReader reader1 = new InputStreamReader(entity.getContent(), "UTF-8");
                CharArrayBuffer buffer = new CharArrayBuffer(2048);
                char[] tmp = new char[1024];
                int l;
                while ((l = reader1.read(tmp)) != -1) {
                    buffer.append(tmp, 0, l);
                }
                result = buffer.toString();
            }
        }
        return result;
    }

    private void insert01(boolean left) throws InterruptedException {
        while (true) {
            if (flage) {
                //            1. 获取所有 左侧的下注数据
//                    List<WebElement> webElements = webDriver.findElements(By.xpath("//div[@class='GuessContItem is-left   ']"));
////                    size ==0 可能存在的情况 ： 1. 没有开下注 2.处于封盘状态或等待状态
//                    if (webElements.size() == 0) {
//                        Thread.sleep(10000);
//                        log.info("未获取到下注数据，等待10秒页面刷新，若频繁出现该提示，请查询网络问题。。。。");
//                        webElements = webDriver.findElements(By.xpath("//div[@class='GuessContItem is-left   ']"));
//                    }
//                    if (webElements.size() == 0) {
////                        GuessContItem is-left   is-closed
////                        is-closed
////                        is-watied
////                        is-waitGuess
////                        data-qs 1 开盘 2 封盘 0 等待状态
////                        data-loss 0 , >0  ,
////                        如果data-qs=1 and data-loss=0  is-watiGuess
////                        webDriver.findElements(By.xpath("//div[@class='GuessContItemHover']//div"))
//                        List<WebElement> closedElements = webDriver.findElements(By.xpath("//div[@class='GuessContItem is-left   is-closed']"));
//                        if (closedElements.size() > 0) {
//                            log.info("正在封盘状态，稍等。。。。");
//                        }
//                        log.info("该主播未开启下注。。。。");
//                    }
                int status = judgeStatus(true);
//确认是否存在确认按钮
                if (status == LEFT_CODE + NORMAL_CODE || status == RIGHT_CODE + NORMAL_CODE) {
                    String LeftFlage = RIGHT;
                    if (left) {
                        LeftFlage = LEFT;
                    }
                    filterKnowBtns();
                    List<WebElement> webElements = webDriver.findElements(By.xpath("//div[@class='" + GUESS + LeftFlage + NORMAL + "']"));
                    webElements.forEach(x -> {
                        try {
                            String threadName = Thread.currentThread().getName();
                            log.info("线程{} 开始下注。。。。。。", new Object[]{threadName});
                            filterKnowBtns();
                            x.click();
                            Thread.sleep(1000);
//                            Actions inputBoxAction = new Actions(webDriver) ;
//                            inputBoxAction.click(webDriver.findElement(By.xpath("//div[@class='guessBettingPopup-inputBox']//input[@class='betInput ']"))).sendKeys("10");
                            webDriver.findElement(By.xpath("//div[@class='guessBettingPopup-inputBox']//input[@class='betInput ']"))
                                    .sendKeys("10");
                            webDriver.findElement(By.xpath("//div[@class='guessGame--btn guessGame--btn--sizeM']")).click();
                            successNums++;
                            log.info("下注成功..... 成功次数{}", new Object[]{successNums});
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {
                            falesNums++;
                            log.error("下注失败..... 失败次数{}", new Object[]{falesNums});
                            e.printStackTrace();
                        }
                    });

                    flage = false;
                }
            } else {
                log.info("等待下一波下注数据....");
            }

            Thread.sleep(1000);
        }
    }


    private int judgeStatus(boolean isLeft) {
        String LeftFlage = RIGHT;
        int leftCode = RIGHT_CODE;
        if (isLeft) {
            LeftFlage = LEFT;
            leftCode = LEFT_CODE;
        }
//        正常状态
        List<WebElement> webElements = webDriver.findElements(By.xpath("//div[@class='" + GUESS + LeftFlage + NORMAL + "']"));
        if (webElements.size() == 0) {
//            关闭状态
            List<WebElement> closedElements = webDriver.findElements(By.xpath("//div[@class='" + GUESS + LeftFlage + CLOSED + "']"));
            if (closedElements.size() == 0) {
//                等待状态
                List<WebElement> iswatiedElements = webDriver.findElements(By.xpath("//div[@class='" + GUESS + LeftFlage + WAITED + "']"));
                if (iswatiedElements.size() == 0) {
//                    等待被猜状态
                    List<WebElement> iswatiedGuessElements = webDriver.findElements(By.xpath("//div[@class='" + GUESS + LeftFlage + WAITGUESS + "']"));
                    if (iswatiedGuessElements.size() == 0) {
                        return GUESS_NO_CODE;
                    } else {
                        log.info("未开启。。。");
                        return leftCode + WAITGUESS_CODE;
                    }

                } else {
                    log.info("等待猜测。。。");
                    return leftCode + WAITED_CODE;
                }
            } else {
                log.info("封盘。。。");
                return leftCode + CLOSED_CODE;
            }
        } else {
            log.info("正常状态。。。");
            return leftCode + NORMAL_CODE;
        }
    }

    /**
     * 确认是否存在确认按钮 存在即确定
     */
    private void filterKnowBtns() {
        //                    下注之前判断是否存在上局结果的数据 guessResultShow-knowBtn  guessResultShow-knowBtn __web-inspector-hide-shortcut__
        List<WebElement> knowBtns = webDriver.findElements(By.xpath("//div[@class='guessResultShow-knowBtn']"));
        if (knowBtns.size() == 1) {
            knowBtns.get(0).click();
            webDriver.get(url);
            try {
                Thread.sleep(100);
            } catch (Exception e) {
                e.printStackTrace();
            }
            log.info("已确认上次点击数据....");
        }
    }

    private void transBoxId() {
//        GuessGameBox
        new Thread(() -> {
            while (true) {
                try {
                    List<String> tmpList = new ArrayList<String>();
                    webDriver.findElements(By.className("GuessGameBox")).forEach(x -> {
                        String dataQid = x.getAttribute("data-qid");
//                    if (!buttonlist.contains(dataQid)) {
                        tmpList.add(dataQid);
//                    }
                    });
                    if (!buttonlist.containsAll(tmpList)) {
                        try {
                            String threadName = Thread.currentThread().getName();
                            log.info("线程 {} 该页面的竞猜按钮数据有 {}", new Object[]{threadName, buttonlist.toString()});
                            restartFlag = true;
                            lock.lock();
                            buttonlist = new ArrayList<String>();
                            buttonlist.addAll(tmpList);
                            flage = true;
                            gameNums++;
                            log.info("页面第{}次加载下注信息.... ", new Object[]{gameNums});
                            restartFlag = false;
                        } catch (Exception e) {
                            log.error("!!!!!");
                        } finally {
                            lock.unlock();
                        }
                    }
                    log.info("监控页面是否已进入下一轮中.... ");

                    Thread.sleep(100);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }


    private void getguessId(List<WebElement> webElements) {
        while (true) {
            webElements.forEach(x -> System.out.println(x.getAttribute("data-qid")));
            try {
                Thread.sleep(2000);
            } catch (Exception e) {
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

    public Set<Cookie> login(WebDriver driver) throws InterruptedException {
        loginOperation(driver);
        while (cookies == null || cookies.size() <= 4) {
            cookies = driver.manage().getCookies();
            Thread.sleep(1000);
        }

        // 获取cookie信息
//
//        if (cookies.size() <= 4 || i < 5) {
//            flage = false;
//            log.error("用户名 {} 登录失败 即将开始第{}次重试.....", new Object[]{username, i});
//            loginOperation(driver, username, password);
//            flage = true;
//            cookies = driver.manage().getCookies();
//            i++;
//        }
        log.info("用户名 {} 登录成功", new Object[]{"111"});
        return cookies;
    }


    private void loginOperation(WebDriver driver) {
        driver.get("https://www.douyu.com/member/login");// 打开网址
//        // 防止页面未能及时加载出来而设置一段时间延迟
//        try {
//            Thread.sleep(4000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
////        driver.findElement(By.xpath("//div[@class='scanicon-toLogin js-qrcode-switch']")).click();
//        // 设置用户名密码
//        driver.findElement(By.className("country-phonenum")).sendKeys(username); // 用户名
//        driver.findElement(By.name("password")).sendKeys(password); // 密码
//        // 模拟点击
//        driver.findElement(By.className("loginbox-sbt"))
//                .click(); // xpath语言：id为form-group-login的form下的button
//
//        // 防止页面未能及时加载出来而设置一段时间延迟
//        try {
//            Thread.sleep(10000);
//
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
    }


    public static void main(String[] args) {
        int num = 4;
        System.out.println(System.getProperty("PATH"));
        final String url = args[0];
        String money = args[1];
        System.out.println("路径在。。。。" + WebMagic3.class.getClassLoader().getResource("").getPath());
        String path = WebMagic3.class.getClassLoader().getResource("chromedriver2").getPath();
        // 登陆
        System.setProperty("webdriver.chrome.driver",
                path); // 注册驱动
        log.info("path->" + path);
        try {
            ThreadPoolExecutor executor = new ThreadPoolExecutor(10, 10, 1000, TimeUnit.MILLISECONDS, new LinkedBlockingQueue<Runnable>());
            for (int i = 0; i < num; i++) {
                executor.execute(new Runnable() {

                    @Override
                    public void run() {
                        try {
                            loginWithChrom(url,money);
                        }catch (Exception e){
                            e.printStackTrace();
                        }
                    }
                });
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println(1);
    }


    public static void loginWithChrom(String url,String money) throws InterruptedException {
        WebMagic3 domes = new WebMagic3();
        domes.setUrl(url);
        WebDriver webDriver = new ChromeDriver();
        Set<Cookie> cookies = domes.login(webDriver);
        // 登陆
        domes.setMoney(money);
        domes.setUrl(url);
        domes.setCookies(cookies);
        domes.setWebDriver(webDriver);
        Spider.create(domes).addUrl(url).thread(5).start();
    }

    public static void loginWithoutChorm(String url,String money) throws InterruptedException {
        WebMagic3 domes = new WebMagic3();
        domes.setUrl(url);
        WebDriver webDriver = new ChromeDriver();
        Set<Cookie> cookies = domes.login(webDriver);
        ChromeOptions chromeOptions = new ChromeOptions();
//            设置 chrome 的无头模式
        chromeOptions.setHeadless(Boolean.TRUE);
        webDriver = new ChromeDriver(chromeOptions);
//                            WebDriver webDriver = new ChromeDriver();
        //        String url = "https://www.douyu.com/6118456"; // 地址
        // 登陆
        domes.setMoney(money);
        domes.setUrl(url);
        domes.setCookies(cookies);
        domes.setWebDriver(webDriver);

//                        WebDriver webDriver = new ChromeDriver(chromeOptions);
//                        WebDriver webDriverSecond = new ChromeDriver();
//                        domes.setWebDriver(webDriver);
        Spider.create(domes).addUrl(url).thread(5).start();
    }

}
