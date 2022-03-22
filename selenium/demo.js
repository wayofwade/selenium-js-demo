
/**
 * 打开浏览器，并在google上搜索杭州西湖
 */

const {By,Key,Builder} = require("selenium-webdriver");
const webdriver = require('selenium-webdriver')

// Initialize chromedriver, which connects to Google Chrome browser app
require("chromedriver");

async function runDemo(){

    // 初始化chromedriver
    let driver = await new Builder().forBrowser("chrome").build();
    const url = 'https://community.fast-cn.wgine.com/app/basic/file'
    const sid = 's:5dc4269d-25a6-4eb0-8ca1-ef6f61b9337d.JUsVESOnjOd2PxJ1F5iUV+m/laRotpaNtbC3qhMQo58'
    const fastSid = '69hpJQkF0sDdG_V7srXtxnbsrrfF5icU'
    driver.manage().addCookie({name: 'test-ccc', value: 'really good'});
    driver.manage().addCookie({name: 's-sid', value: sid});
    driver.manage().addCookie({name: 'fast-sid', value: fastSid});
    driver.manage().addCookie({name: 'fast-sid', value: fastSid});
    console.log('---driver---', driver)
     // 请求网站
     await driver.get(url);
            
    // 根据页面元素搜索
    await driver.findElement(By.name("q")).sendKeys("杭州西湖",Key.RETURN);
 
    // 请求结果
    var title = await driver.getTitle();
    console.log('Title is:',title);

    // 新建新的tab
    // driver.executeScript('window.open("https://community.fast-cn.wgine.com/app/basic/file");');

    // 关闭浏览器
    await driver.quit();
 
}

runDemo();
