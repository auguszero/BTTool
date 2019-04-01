//package com.douyu.forurl.urlMain;
//
//import java.io.IOException;
//import java.net.CookieStore;
//import java.net.MalformedURLException;
//import java.util.Set;
//
//import com.gargoylesoftware.htmlunit.BrowserVersion;
//import com.gargoylesoftware.htmlunit.CookieManager;
//import com.gargoylesoftware.htmlunit.FailingHttpStatusCodeException;
//import com.gargoylesoftware.htmlunit.WebClient;
//import com.gargoylesoftware.htmlunit.html.HtmlPage;
//import com.gargoylesoftware.htmlunit.util.Cookie;
//
///**
// * @Author auguszero
// * @Descript ${DESCRIPTION}
// * @Date Create at 2019/3/26 2:20 PM
// */
//public class MainClass {
//
//    public static void main(String[] args) throws FailingHttpStatusCodeException, MalformedURLException, IOException {
//        // TODO Auto-generated method stub
//        //模拟chorme浏览器，其他浏览器请修改BrowserVersion.后面
//        final WebClient mWebClient = new WebClient(BrowserVersion.CHROME);
////        final WebClient mWebClient = new WebClient();
//        mWebClient.getOptions().setCssEnabled(false);
//        mWebClient.getOptions().setJavaScriptEnabled(false);
//        //启动cookie管理
//        CookieManager cookieManager = new CookieManager() ;
//        mWebClient.setCookieManager(cookieManager);
//        final HtmlPage mHtmlPage = mWebClient.getPage("https://www.douyu.com/3733860");
//        cookieManager.setCookiesEnabled(true);
////        cookieManager.addCookie(new Cookie("www.douyu.com",""));
//        Set<Cookie> cookies = cookieManager.getCookies();
//        cookies.forEach(x->{
//            System.out.println(x.getName());
//            System.out.println(x.getValue());
//        });
////        System.out.println(mHtmlPage.asText());
//
//    }
//
//}
