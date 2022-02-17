// 打开已经存在的浏览器

// Initialize Selenium Webdriver, which is the manager
const {By,Key,Builder} = require("selenium-webdriver");
const webdriver = require('selenium-webdriver')
var chrome = require("selenium-webdriver/chrome");

// Initialize chromedriver, which connects to Google Chrome browser app
require("chromedriver");

async function demo(){

    const capabilities = {
        'device' : 'iPhone 11',
        'realMobile' : 'true',
        'os_version' : '14.0',
        'browserName' : 'iPhone',
        'name': 'BStack-[NodeJS] Sample Test', // test name
        'build': 'BStack Build Number 1' // CI/CD job or build name
       }

    // 初始化chromedriver
    // let driver = await new Builder().forBrowser("chrome").build();

    let driver
    var options = new chrome.Options();
    options.options_["debuggerAddress"] = "127.0.0.1:9222";

    try {
        driver = await  new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    } catch(e) {
        console.log('-----新建浏览器报错', e)
    }
     // set a cookie on the current domain
     driver.manage().addCookie("test", "cookie-1");
    console.log('---driver---', driver)

    // 请求网站
    const url = 'https://zhuanlan.zhihu.com/'
    await driver.get(url);
    // 请求结果
    var title = await driver.getTitle();
    console.log('Title is:',title);

    // 关闭浏览器
    setTimeout(() => {
        await driver.quit();
    }, 5000) 
}

demo();
