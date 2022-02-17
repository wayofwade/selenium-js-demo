#!/usr/bin/env node

///
// 打开浏览器，并在google上搜索杭州西湖

// Initialize Selenium Webdriver, which is the manager
const {By,Key,Builder} = require("selenium-webdriver");
const webdriver = require('selenium-webdriver')

// Initialize chromedriver, which connects to Google Chrome browser app
require("chromedriver");

async function demo(){

    // 初始化chromedriver
    let driver = await new Builder().forBrowser("chrome").build();

    // 请求网站
    await driver.get("https://google.com");
            
    // 根据页面元素搜索
    await driver.findElement(By.name("q")).sendKeys("杭州西湖",Key.RETURN);
 
    // 请求结果
    var title = await driver.getTitle();
    console.log('Title is:',title);

    // 新建新的tab
    driver.executeScript('window.open("https://baidu.com");');

    // 关闭浏览器
    await driver.quit();
 
}

demo();
