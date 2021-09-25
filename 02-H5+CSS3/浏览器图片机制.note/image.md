---
title: 浏览器图片机制
date: 2020-11-06 18:48:40
categories:
tags: web
---

## 前言

<!-- 图片、背景图片、icon-font、svg、canvas database64 -->

浏览器中引用图片是一种很常见的情况，使用方式的不同，他们的意义也不同。比如————作为“内容主体”、“背景”、“图标”等，而设计师有时候也会提供不同的格式图片（img/png/svg/）。在不同的场景，我们对同一份图片素材，要根据图片在web界面中的意义合理运用。个人会列举浏览器常用使用图片的方式。

- img
- background-image
- icon-font
- svg
- webpack 与 img
- database64

<!-- more -->

## img、background-image

`HTML`的`img`标签、`css`的`background-image`样式是最原始的使用图片方式，在H5时代前，相当长的一段时间都是用这两方式引用图片资源的。

`<img>`标签，将图片作为**内容主体**引入web页面，姑其是**占位**；而`background-image`样式，起**修饰**作用，其是**不占位**。

### 基本用法

```html
<img src="https://mdn.mozillademos.org/files/7693/catfront.png" />
```

<img src="https://mdn.mozillademos.org/files/7693/catfront.png" />

```html
<div class="background">123</div>
<style>
.background {
  background-image: url(('https://mdn.mozillademos.org/files/7693/catfront.png');
}
</style>
```

<div class="background"></div>
<style>
.background {
  background-image: url(('https://mdn.mozillademos.org/files/7693/catfront.png');
}
</style>

*虽然呈现的效果一致，意义缺不一样。*

<!-- - [<img>：图像嵌入元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img) -->
<!-- - [background-image](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-image) -->


### img之尺寸、居中

`img`标签提供了关于设置尺寸的属性，分别是`width`和`height`，单位可以是css像素，也可以是百分比。

```html
<img src="https://mdn.mozillademos.org/files/7693/catfront.png"  width="100%" height="100%" />
```
*然而尺寸的百分比单位并不是相对于图片资源的比例，而是其容器的百分比。*

所以并不推荐使用img标签的`width`及`height`设置属性，推荐使用css的`width`及`height`属性编写。

其实很多web开发者设置`100%`的本意是想让图片**按父容器宽度自动缩放，并保持图片原本的长宽比**。

```css
img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;  
}
```

除此之外，`img`的居中方式也是很容易让人误解，因`img`的`display`属性为`inline-block`，其居中方式（水平、垂直都是）更是让人误解。

```html
<div class="block">
  <img src="https://mdn.mozillademos.org/files/7693/catfront.png" />
</div>

<style>
.block {
  width:150px;
  height: 150px;
  border: 1px solid #333;
  /* 垂直居中 */
  display: table-cell;
  vertical-align: middle;
  /* 水平居中 */
  text-align: center;
}

img {
    max-width: 50%;
    max-height: 50%;   
}
</style>
```

没想吧？居然是加在img的容器标签上，虽然绝对居中（水平、垂直都同时居中）还有其他的方法，不过个人觉得这是最值得开发着去记住的。除此之外，也建议给容器设置`font-size: 0;`，这可以解决两个相邻的img标签之间的空隙问题。

说了那么多的img，现在得回过头来谈论`background-image`了，

### background-image之位置、尺寸及重复

虽然前面我们说的`background-image`一直说的是css的样式特性，然而`background-image`只能指定使用的图片资源（可以是一张、也可以是多张）。背景图片样式（如本节小标题所说的位置、尺寸及重复）的设置，往往还需要结合其他css特性。

`background-position`可以给背景图片定义位置，设置的是其图片的左上角要在容器的哪个偏移度位置。

`background-size` 可设置背景图片大小。`contain`理解为等比例缩放图片，高度/宽度其一先与容器尺寸相等，则停止缩放，若图片和容器宽高比例不一致，会出现白边；`cover`也是等比例缩放，高度/宽度其一先与容器尺寸相等，继续缩放，（此时图片溢出），直到另一方向的尺寸占满容器，停止缩放。

![](/image/20201107015850607.png)

![](/image/20201107020650984.png)

**更简易的理解： `contain`为最小化等比例缩放图片，`cover`则为最大化等比例缩放。**

除了这两个关键字，也可以用两个单位值指定背景图片的宽高，对于绝对单位（px、em、rem）没啥好说的，对于相对单位（百分比），是相对于容器的尺寸来计算的，**有意思的是`100% 100%`，这代表着破坏原比例，把图片拉伸/挤压到容器的尺寸。**（很多css属性的相对单位都是根据容器来计算的，或许有特殊的属性我忘了。;-)

`background-repeat` 设置图片重复使用的方式。

* background-attachment
* background-clip
* background-color
* background-image
* background-origin
* background-position
* background-position-x
* background-position-y
* background-repeat
* background-size

### CSS Sprite

## icon-font

...

## svg

...

## webpack 与 img

...

## database64

...

## 结尾

...