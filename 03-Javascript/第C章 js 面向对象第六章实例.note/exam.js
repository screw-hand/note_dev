/* 
* JavaScript面向对象编程
* 第六章案例学习：图形绘制
* Fifth-Patient
*/

// Shape    : 形状
// Triangle ：三角形
// Rectangle：矩形
// Square   ：正方形

/* 任务
* 1.计算各种不同图形的面积和边界并绘制出来
* 2.尽可能地实现代码重用 
*/

/* 分析
* 1.所有对象的公共部分定义成一个构造器Shape 
* 2.基于这个构造器分别构建我们的Trangle、Rectangle和Square构造器，全部继承于Shape
* 3.其中Square可以被当作一个长宽相等的Reactagle，因此构建Square时可以直接重用Rectangle

-------------------------------------------------
Shape    对象：带x，y坐标的point对像（图形一般都是由若干个point组成，例如Triangle对象需要三个point，Rectangle对象需要四个point）           
Rectangle对象：至少需要定义一个point对象和其长宽度，图形的周长是其长度的综合，一个图形的面积由图形自己实现

Shape体系共有功能：
· 一个能根据给定的poinit绘制出图形draw()方法
· 一个getParamter()方法
· 一个用存储point对象的数组属性
· 其他必须的属性与方法

两个辅助构造器：Point(定义图形) Linea(计算两点距离)

-------------------------------------------------
*/

/* 实现
* 1. canvas
* 2. 辅助构造器Point、Line
* 3. Shape构造器（属性：points、lines；方法：init() ）
* 4. Shape.prototype （ init()、draw() ）
*/

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Line(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
  this.length = Math.sqrt(
    Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
  );
}

function Shape() {
  this.points = [];
  this.line = [];
  this.init();
}

Shape.prototype = {
  // 重置constructor指向
  constructor: Shape,
  // 初始化，设置canvas的上下文
  init: function () {
    if (typeof this.context === 'undefined') {
      var canvas = document.getElementById('canvas');
      Shape.prototype.context = canvas.getContext('2d');
    }
  },
  // 通过this.points提供的属性绘制图形
  draw: function () {
    var ctx = this.context;
    ctx.strokeStyle = this.getColor();
    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    for (var i = 0; i < this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
  },
  // 随机上色
  getColor: function () {
    var rgb = [];
    for (var i = 0; i < 3; i++) {
      rgb[i] = Math.round(255 * Math.random());
    }
    return 'rgb(' + rgb.join(',') + ')';
  },
  // 循环点数组,创建Line实例并将其添加到this.lines
  getLines: function () {
    if (this.getLines.length > 0) {
      return this.lines;
    }
    var lines = [];
    for (var i = 0; i < this.points.length; i++) {
      lines[i] = new Line(
        this.points[i], (this.points[i + 1]) ? this.points[i + 1] : this.points[0]
      );
    }
    this.lines = lines;
    return lines;
  },
  // shell method, 由子类运行
  getArea: function () { },
  // 所有线长之和
  getPerimeter: function () {
    var lines = this.getLines();
    var perim = 0;
    for (var i = 0; i < lines.length; i++) {
      perim += lines[i].length;
    }
    return perim;
  }
}


function Triangle(a, b, c) {
  this.points = [a, b, c];
  this.getArea = function () {
    var p = this.getPerimeter();
    // 半周长
    var s = p / 2;
    return Math.sqrt(
      s
      * (s - this.lines[0].length)
      * (s - this.lines[1].length)
      * (s - this.lines[2].length)
    );
  }
}
// 接收三个point对象，利用海伦公式实现getArea()
// 海伦公式：Area = s(s-a)(s-b)(s-c)

//  左上角和两边长度
function Rectangle(p, side_a, side_b) {
  this.points = [
    p,
    new Point(p.x + side_a, p.y),
    new Point(p.x + side_a, p.y + side_b),
    new Point(p.x, p.y + side_b)
  ];
  this.getArea = function () {
    return side_a * side_b;
  }
}

// 构造器借用重用Rectangle
function Square(p, side) {
  Rectangle.call(this, p, side, side);
}

// 共享原型
(function () {
  var s = new Shape();
  Triangle .prototype = s;
  Rectangle.prototype = s;
  Square   .prototype = s;
})();


/* =================  测试  ================== */

var p1 = new Point(100, 100);
var p2 = new Point(300, 100);
var p3 = new Point(200, 0);


// 屋顶
var t = new Triangle(p1, p2, p3);
t.draw();

console.log(
  t.getPerimeter(),
  t.getArea()
)

// 门
var r = new Rectangle(new Point(175, 200), 50, 100);
r.draw();
r.getArea();
r.getPerimeter();

// 窗口
var s = new Square(new Point(125, 150), 25);
s.draw();
s.getArea();
s.getPerimeter();

// 墙壁
new Square(p1, 200).draw();

var s = new Square(new Point(250, 150), 25);
s.draw();


// Trapezoid 梯形
// Rhombus   菱形
// Kite      平行四边形
// Diamond   钻石
// Pentagon  五角形
// Circle    圈
