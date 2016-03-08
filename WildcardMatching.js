//Implement wildcard pattern matching with support for '?' and '*'.
//'?' Matches any single character.
//'*' Matches any sequence of characters (including the empty sequence).
//The matching should cover the entire input string (not partial).
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
//方法一 TLE
/*
var isMatch = function(s, p) {
  p=p.replace(/\*+/g,'*');
  return match(s,p,0,0);
};
var match = function(s,p,si,pi){
  var slen=s.length,plen=p.length;
  while(si<slen&&pi<plen) {
    if (p[pi] != '?' && p[pi] != '*' && p[pi] != s[si])
      return false;
    else if (p[pi] == '?' || (p[pi] != '?' && p[pi] != '*' && p[pi] == s[si]))
      si++, pi++;
    else { //p[pi]=='*'
      while (pi + 1 < plen) {
        while (s[si] != p[pi + 1]&&si<slen)
          si++;
        if(si<slen) {
          if (!match(s, p, si, pi + 1))
            si++;
          else
            return true;
        }
        else
          return false;
      }
      return true;
    }
  }
}
*/

var isMatch = function(s, p) {
  p=p.replace(/\*+/g,'*');
  var si= 0,pi= 0,slen=s.length,plen=p.length,temps=-1,tempp=-1;
  while(si<slen) {
    if (pi<plen && (p[pi] == '?' ||  p[pi] == s[si])) { //单个匹配
      si++;
      pi++;
    }
    else if(pi<plen && p[pi]=='*') { //*时记住位置,下一个不匹配时回到p,s对应位置
      tempp = pi;
      temps = si + 1;
      pi++;
    }
    else if(tempp!=-1){//如果下一个不匹配,回到原来的p,s位置
      pi=tempp;
      si=temps;
    }
    else
      return false;
  }
  for(var i=pi; i<plen;i++){
    if(p[i]!='*'){
      return false;
    }
  }
  return true;
}
console.log(isMatch("babbabbabaaaaabaabaaaaabbabaabbbaaaabbaabbbbbaabbabaabbbbaabbbabaabbaaabbbbabbbabbababaababbaaaaaabaabababbbaaabbaaaaaabbbabbbbabaabaaaabbabbaabaababbaaaababaaaaababbbaabaababbbaaabaababbabbabaaabbbbaa","*a*ab*b*ab*a*bb**bb**a**abb*bb*ab*a*bbbb***ba***aa**ba*b*ab*ba***aaabbbaa*ba*ba*b****baabb**b*aa*aaab*a"));