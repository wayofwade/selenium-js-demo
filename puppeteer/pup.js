
/**
 * 1.打开浏览器，并在google上搜索杭州西湖
 * 2.使用puppeteer自动化控制浏览器操作
 * 3.获取打开页面的Performance数据，检测页面性能
 */

 const puppeteer = require("puppeteer");

async function runDemo() {
    console.log('----start')
    // 启动浏览器
    const browser = await puppeteer.launch({
        // 关闭无头模式，方便我们看到这个无头浏览器执行的过程
        headless: false,
        // devtools: true, // 开发者模式
        args: ['--start-maximized'],
    });
    const domain = 'baidu.com'
    const sid = 's-sid'
    const URL = 'https://www.baidu.com'
    // 打开空白页面
    let page = await browser.newPage();
    await page.setViewport({height: 800, width: 1200})
    await page.setCookie({name: 's-sid', value:sid ,domain: domain })

   // 地址栏输入网页地址
    await page.goto(URL, {
        waitUntil: 'networkidle2', // 等待网络状态为空闲的时候才继续执行
    });
    // 聚焦搜索框
    await page.focus('#kw');
    await page.type('input[id=kw]', '杭州西湖', {delay: 200})
    await delay(1000);
    await page.click('#su')
    //调用页面内Dom对象的 screenshot 方法进行截图
    await delay(3000);
    let body = await page.$('#content_left');
    await body.screenshot({
        path: 'test.png'
    });
    // 获取 DevTools 中的数据
    let devData = await page._client.send('Performance.getMetrics')
    console.log('---devData--',devData)
    /*
  	在page上下文中得到window.performance.timing
  	*/
	const timing = await page.evaluate( _ => {
        const {navigationStart,unloadEventStart,unloadEventEnd,
            redirectStart,redirectEnd,fetchStart,domainLookupStart,
            domainLookupEnd,connectStart,connectEnd,secureConnectionStart,
            requestStart,responseStart,responseEnd,domLoading,domInteractive,
            domContentLoadedEventStart,domContentLoadedEventEnd,domComplete,
            loadEventStart,loadEventEnd} = window.performance.timing;
        return ({navigationStart:navigationStart,
                          unloadEventStart:unloadEventStart,
                          unloadEventEnd:unloadEventEnd,
                          redirectStart:redirectStart,
                          redirectEnd:redirectEnd,
                          fetchStart:fetchStart,
                          domainLookupStart:domainLookupStart,
                          domainLookupEnd:domainLookupEnd,
                          connectStart:connectStart,
                          connectEnd:connectEnd,
                          secureConnectionStart:secureConnectionStart,
                          requestStart:requestStart,
                          responseStart:responseStart,
                          responseEnd:responseEnd,
                          domLoading:domLoading,
                          domInteractive:domInteractive,
                          domContentLoadedEventStart:domContentLoadedEventStart,
                          domContentLoadedEventEnd:domContentLoadedEventEnd,
                          domComplete:domComplete,
                          loadEventStart:loadEventStart,
                          loadEventEnd:loadEventEnd})
    })
    console.log('--->' + JSON.stringify(timing)) ;
}


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

runDemo();
