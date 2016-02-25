# SimpleProblems
代码随手写

#### 2016.02.25
测试phantomJS和cheerio两种方法抓取页面的性能：  
- cheerio效率比phantomJS明显好很多  
- 不过phantomJS功能更强大，还能对抓取的页面做修改、保存成图片或pdf、测试js等  

ps. 没传package.json，需要先安装:  
`npm install phantomjs`  
`npm install cheerio`  
`npm install request`  
然后运行:  
`phantomjs phantomtest.js`  
`node cheeriotest.js`  
