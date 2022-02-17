#!/usr/bin/env node

///
// 打开浏览器，并在google上搜索杭州西湖

// Initialize Selenium Webdriver, which is the manager
const {By,Key,Builder} = require("selenium-webdriver");

// Initialize chromedriver, which connects to Google Chrome browser app
require("chromedriver");

async function demo(){

    // Initialize
    let driver = await new Builder().forBrowser("chrome").build();

    // Fetch
    await driver.get("https://google.com");
            
    // Search
    await driver.findElement(By.name("q")).sendKeys("杭州西湖",Key.RETURN);
 
    // Output
    var title = await driver.getTitle();
    console.log('Title is:',title);

    // Done
    await driver.quit();
 
}

demo();
