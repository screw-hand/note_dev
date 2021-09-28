## html

初始化

- html:5 或 ! 
- html:xt XHTML过渡文档类型
- html:4s HTML4严格文档类型

元属性

- meta:utf 生成字符编码元属性
- meta:vp 视图属性
- meta:compat 制定渲染模式

link标签：

- link:favicon 网站图标

- link:css 引入外部样式文件
- link:touch IOS系统图标

语法：

- 后代：>
- 兄弟：+
- 上级：^
- 分组：()
- 重复：*
- 自增：$
- ID：#
- 类：.
- 属性：[]
- 文本：{}
- 隐形标签：li tr td option

## css

属性：

- border-bottom:bdm
- border-top:bdt

属性值：

- fz18：font-size: 18px;
- m10px10px：margin:10px 10px;
- m0-auto：margin: 0 auto; (vscode)

多属性：

- m0+p0： margin: 0; padding: 0;
- 

颜色：

- \#1： #111111
- \#E0： #e0e0e0
- \#FC0： #FFCC00

!important：

-  p0!: padding: 0 !important;

单位别名列表：

- p 表示%
- e 表示 em
- x 表示 ex

## 定制

- 添加新缩写或更新现有缩写：snippets.json
- 更改Emmet过滤器和操作的行为：preferences.json
- 定义如何生成HTML或XML代码：syntaxProfiles.json