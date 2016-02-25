var request = require('request');
var cheerio = require('cheerio');
var url= 'http://movie.douban.com/people/afra-zhou/collect?sort=time&start=0&mode=list';

function getMovies(url, history, movies) {
  var flag = false;
  movies = movies || [];
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(body);
      //爬取列表显示的内容,包括电影名字,评价日期,评分,标签
      $('.list-view .item').each(function () {
        var title = $(this).find('.title a').text().trim();
        movies.push(title);
      });
      var next = $('div.paginator span.next a');
      if (next.length != 0) {
        url = next.attr('href');
        getMovies(url, history, movies);
      }
      else {
        movies = movies.concat(history);
        console.log(movies);
        console.log(new Date().getTime()-start+'ms');
      }
    }
    else {
      return;
    }
  });
}
var start=new Date().getTime();
getMovies(url, []);
