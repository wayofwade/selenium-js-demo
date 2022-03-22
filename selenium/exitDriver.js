/**
 * 打开已经存在的浏览器
 */

const {By,Key,Builder} = require("selenium-webdriver");
const webdriver = require('selenium-webdriver')
var chrome = require("selenium-webdriver/chrome");
require("chromedriver");

async function runDemo(){
    // 初始化chromedriver
    const url = 'https://community.fast-cn.wgine.com/app/personnelAccess/elevator/device'
    const zhihu_url = 'https://zhuanlan.zhihu.com/'
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

     // 请求网站
     await driver.get(url);
    // 设置cookie
    
    const sid = 's:a00457a7-1191-4f3e-ba36-bf791ec0605a.1MRLtejYzOjPdujwRscLeAoCGTY+atcmvTPM1PuqF+8'
    driver.manage().addCookie({name: 'test-ccc', value: 'really good'});
    // driver.manage().addCookie({name: 's-sid', value: sid});
    console.log('---driver---', driver)

    // 请求网站携带cookie
    await driver.get(url);


    // 请求结果
    var title = await driver.getTitle()
    console.log('Title is:',title);

    await driver.sleep(4000); //6second

    driver.findElement(By.className("c-galaxy-form-page-main-operation-btn-primary")).click()


    await driver.sleep(4000); //6second

    let items = await driver.findElements(By.css('.c-galaxy-layout-footer .c-ant-btn-primary'));

    console.log('--items---',items.length)

    // driver.findElement(By.className("c-galaxy-layout-footer")).click()
        for(let i=0; i<items.length; i++) {
            driver.click(items[i])
        }
    

    driver.manage().getCookie('test-ccc').then(function (cookie) {
        console.log(cookie);
     });
     
    console.log('----start:', new Date().getTime())
    await driver.sleep(6000); //6second
    console.log('----end:', new Date().getTime())
    // 关闭浏览器
    // driver.quit();
}

runDemo();
