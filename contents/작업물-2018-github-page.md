---
path: /post/작업물-2018-github-page
title: 2018 github page
author: 김희철
date: '2018-12-29 10:08:13'
tags:
  - 작업물
draft: false
---

## [Github Repository](https://github.com/heecheolman/Portfolio-2018__source)

## 소개

2018년도에 사용됐던 github page 이다. 나에대한 간단한 소개와 작업물들을 올려놓는 일종의 블로그였지만 지금의 새로운 블로그가 생긴 탓에 잠시 묻어두기로했다.
`node.js` 를 처음 이용하게 된 사이트이다. 이 때는 노드모듈들과 웹팩 사용법을 익히는데 중점을 두었다. [Vallista 님의 이상형월드컵](https://github.com/Vallista/ideal-type-world-cup-source) 의 innerHTML 기반 DOM 렌더링기법을 따라해보았다.

## Preview

![이미지](https://heecheolman.github.io/static/img/preview-1.b9d0351.png)

![이미지](https://heecheolman.github.io/static/img/preview-2.8581fa5.png)

![이미지](https://heecheolman.github.io/static/img/preview-3.fcbc130.png)

## 사용한 모듈

### [Babel](https://babeljs.io/)

ES6 를 사용하여 코드를 작성하였는데 브라우저에서도 실행이 되게끔 변환해주는 transpiler 입니다.

- [babel-core](https://www.npmjs.com/package/babel-core)
- [babel-loader](https://github.com/babel/babel-loader) 자바스크립트 파일을 웹팩에서 번들링하기위해 사용하는 로더입니다.
- [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env)

### [Webpack](https://webpack.js.org/)

웹팩을 이용하여 소스코드들을 번들링하고 `webpack-dev-server` 를 사용해 개발시 실시간 빌드를 해줍니다.

- [style-loader](https://github.com/webpack-contrib/style-loader) style 태그를 삽입하여 css에 DOM을 추가
- [css-loader](https://github.com/webpack-contrib/css-loader) webpack에서 `.css` 파일을 읽어들이기위해 사용하는 로더
- [file-loader](https://github.com/webpack-contrib/file-loader) webpack 에서 파일을 번들링하기 위해 사용하는 로더입니다.
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 개발시 실시간 빌드를 해주는 모듈입니다.

## 특징

- innerHTML 기반의 DOM 렌더링
- Vanilla Javascript
- 반응형 웹

## 배운점

- ES6
- npm 을 이용한 웹 어플리케이션 제작
- SPA를 제작할 때 이용되는 [Atomic Design 방법론](http://bradfrost.com/blog/post/atomic-web-design/)

## 참고해서 배운 프로젝트

- [Vallista 님의 이상형월드컵](https://github.com/Vallista/ideal-type-world-cup-source)
