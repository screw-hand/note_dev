精通CSS与HTML设计模式

- 六种盒模型

- - 内联
  - 内联块状
  - 块状
  - 表格
  - 绝对
  - 浮动

- 盒模型范围

- - 尺寸
  - 包裹
  - 拉伸

- 盒模型定位

- - 缩进
  - 偏移
  - 对齐

- 六种定位

- - 静态
  - 绝对
  - 固定
  - 相对
  - 浮动
  - 相对浮动

- display属性值

- - inline
  - block
  - inline-block
  - table
  - table-cell
  - none

- 通用

- - 载入页面时间

- - - .5s  - 瞬间
    - 1s  - 很快
    - 2s - 一般
    - 2s↑ - 有点慢
    - 6s  - 忍耐

- - css优先级别

原则：**普通**的会设置文档的总体样式，更**具体**的选择符则会覆盖掉普通的选择符，以为其提供更特殊的样式

- - - `!improtant`
    - `<style>... </style>`
    - 一个或多个**ID选择符**的规则
    - 一个或多个**类、属性或伪类选择符**
    - 一个或多个**元素选择符**的规则
    - 竞争规则

同一选择符群组，按照选择符的**种类**和**数量**进行优先级排序;

同一选择符群里拥有**同样等级和数量**时，优先级按照所处的**位置**安排；

- - - - `<style></style>`
      - `<style>`里用`@improt`引入的样式
      - `<link>`
      - `<link>`中用`@improt`引入的样式
      - 终端用户绑定的样式表
      - 浏览器默认样式表

- - 单位

- - - 相对

- - - - em
      - ex

- - - 固定

- - - - in
      - px
      - pt
      - pc
      - cm
      - mm

- - css继承

- - - 所有元素

- - - - `visibliity`
      - `cursor`

- - - 内联

文字 颜色

- - - - `color`
      - `font` `font-family` `font-size` `font-style` `font-variant` `font-weight`
      - `letter-spacing` `word-spacing` `white-space` `line-height`
      - `text-decoration` `text-transform` `diredection`

- - - 终端块状

- - - - `text-indent`
      - `text-align`

- - - 列表

- - - - `list-style`
      - `list-style-type`
      - `list-style-position`
      - `list-style-image`

- - - 表格

- - - - `border-collapse`

- - - 不可继承

尺寸 盒模型 定位 背景

- - - - `width` `min-width` `max-width`
      - `height` `min-height` `max-height`
      - `margin` `border` `padding`
      - `background`
      - `display` `overflow`
      - `position` `left` `right` `top` `bottom` `z-index` `float` `clear`
      - `table-layout` `vertical-align` `page-break-after` `page-break-before` `unicode-bidi`