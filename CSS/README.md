### CSS 생활코딩 정리

* 글자 색상 바꾸기: ```<font color="red"></font>``` (html tag)
* HTML 문서에 적용되는 CSS 임을 명시: ```<style></style>```

***

* [선택자 + 효과] 이 웹페이지의 모든 a 태그에 대해서 color red로 지정  
```html
<style>
  a{
    color:red;
    text-decoration: none;
  }
</style>
```

* ```text-decoration: none;``` = 모든 a 태그 글자 밑줄 없앰

***

* ```<style>``` 태그 외에도 속성을 이용하는 방법 존재
```html
<li><a href="2.html" style="color:red">CSS</a></li>
```
* [style + 효과] CSS를 클릭했을 때 글자 red로 표시됨
* color:red 는 CSS 코드
* style 은 html의 속성, 그 값으로 css의 효과가 들어온다

* 주고 싶은 효과 누구에게 줄 것인지: 선택 (a{ })
* 선택자에게 지정된 효과 (color:black)
* 직접 위치한 태그에 효과를 주는 경우에는 선택자 필요 X

```html
<li><a href="2.html" style="color:red;text-decoration:underline">CSS</a></li>
```

* CSS 에만 글자 밑줄 만들고 싶을 때 ```text-decoration:underline```

***

<img src="/img/screenshot1.png" width="50%">

***

* 글자 크기, 사이즈, 가운데 정렬
```css
h1 {
  font-size: 45px;
  text-align: center;
}
```
