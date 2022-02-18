# Demo Selenium JavaScript


## Install 


### Install Node and yarn

Install Node and yarn、 from https://nodejs.org/

### Install Selenium

```sh
yarn add --save selenium-webdriver
```

### Install chromedriver
```sh
yarn add --save chromedriver
```

## Run

```sh
./demo.js
```

Or you can run with Node explicity:

```sh
node demo.js
```

The script will launch your local Chrome web browser,

### 如何控制打开已有浏览器
* 添加环境变量
    - vim ./.bash_profile
    - export PATH="/Applications/Google Chrome.app/Contents/MacOS:$PATH

* 激活环境
    - source ./.bash_profile

* 打开命令行，输入
    - Google\ Chrome --remote-debugging-port=9222 --user-data-dir="~/ChromeProfile"

* 运行node代码
    - node demo.js



