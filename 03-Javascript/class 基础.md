```tsx
class Node {
  constructor(params: object) {
    this.params = params
  }
  
  static staticData: object = { k: 'v' }

  public method(key: string, value: any) {
    this.params[key] = value
    console.log(this.params)
  }

  private privateMethod(key: string, value: any) {
    this.method(...arguments)
  }

  static staticMethod(key: string, value: any) {
    console.log(this)
  }

}

const node:Node = new Node({
  name: 'chris',
  index: 0
})

node.method('name', 'Chris')

node.privateMethod('name', node.params.name += ' Chen')

Node.staticMethod()

console.log(node)

```

