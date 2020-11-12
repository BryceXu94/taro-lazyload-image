# taro-dropdown

基于 [Taro](https://github.com/NervJS/taro) 的一个 图片懒加载 的组件

## 安装

### Taro 2

``` bash
npm i taro-lazyload-image -S
```

## 代码演示

``` jsx
import LazyImage from 'taro-lazyload-image';
<LazyImage
  src="https://wx-static.yidejia.com/resource-1605171426513-51703.jpg"
  thumb="https://wx-static.yidejia.com/resource-1605171426513-51703.jpg?imageView2/2/w/60"
  mode="widthFix"
/>
```

## 效果截图

<video src="https://wx-static.yidejia.com/resource-1605172531725-75988.mp4" width="700" controls></video>

## API

### Props 属性如下

| 参数  | 说明                        | 类型     | 默认值      |
|-------|---------------------------|----------|-------------|
| src   | 图片地址                    | `string` | -           |
| thumb | 缩略图地址                  | `string` | -           |
| mode  | 模式，同微信 Image 组件 mode | `string` | scaleToFill |

## ⚠ 注意

* 目前仅支持 **基于 Taro2.x 的微信小程序**
