### HTML 생활코딩 정리

* 강조: ```<strong></strong>```
* 밑줄: ```<u></u>```
* 제목(heading): ```<h1></h1> ~ <h6></h6>```

* 줄바꿈: ```<br>```
  * 쓰는 만큼 줄바꿈 해줌
  * 닫지 않는 태그: img, input, br, hr, meta 등
* 단락: ```<p></p>```
  * 단락과 단락의 간격 고정됨
  * 따라서 CSS로 단락 간격 조정 ```<p style="margin-top:45px;"></p>```

* 이미지: ```<img src="coding.png" width="100%">```

* 목차: ```<li></li>```
* 목차 경계 구분: ```<ul>첫번째 목차들</ul><ul>두번째 목차들</ul>```
  * ul = unordered list
* 목차 자동으로 순서 매겨줌: ```<ol></ol>```
  * ol = ordered list

* 타이틀 태그: ```<title>WEB1 - html</title>```
* 웹페이지 문자: ```<meta charset="utf-8">```
* head 태그: ```<head></head>```
* body 태그: ```<body></body>```
* 웹페이지가 HTML로 만들어졌다는 것 표현: 맨 앞에 ```<!doctype html>```
  * 그리고 그 다음줄부터 끝까지 ```<html></html>```

* 웹페이지 링크 걸기: ```<a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 specification">Hypertext Markup Language (HTML)</a>```
  * ```<a></a>``` 로 링크 걸기
  * href="링크 주소"
  * target="_blank" 는 링크 클릭시 새창에서 열림
  * title="내용 미리보기" 링크 내용 툴팁으로 보여줌
  * 그 다음 글 = 글자에 하이퍼링크 담김

* 동영상: ```<iframe width="560" height="315" src="https://www.youtube.com/embed/jSJM9iOiQ1g" frameborder="0" allowfullscreen></iframe>```
