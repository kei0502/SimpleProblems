var page = require('webpage').create();
var url='http://movie.douban.com/people/afra-zhou/collect?sort=time&start=0&mode=list';
var pause=false;
var movies=[];

function getDouban(url){
  page.open(url, function () {
    var t=page.evaluate(function () {
      var movieList=document.querySelectorAll('.list-view li');
      var url,pause=false,movies=[];
      for(var i=0,len=movieList.length;i<len;i++)
        movies.push(movieList[i].querySelector('.title a').innerHTML.trim());
      var next=document.querySelector('.paginator .next a');
      if(next)
        url=next.href;
      else
        pause=true;
      return {url:url,pause:pause,movies:movies};
    });
    movies=movies.concat(t.movies);
    if(!t.pause&&t.url)
      getDouban(t.url);
    else{
      console.log(movies);
      console.log(new Date().getTime()-start+'ms');
      phantom.exit();
    }
  });
}
var start=new Date().getTime();
getDouban(url);
