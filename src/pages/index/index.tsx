import Taro, { Component, Config, pxTransform } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'
import LazyImage from '../../components/LazyImage'
class Index extends Component {
  config: Config = {
    navigationBarTitleText: '标题'
  }
  render() {
    return (
      <View>
        <View className="img" style={{ width: pxTransform(750) }}>
          <LazyImage
            src="https://wx-static.yidejia.com/resource-1605171426513-51703.jpg"
            thumb="https://wx-static.yidejia.com/resource-1605171426513-51703.jpg?imageView2/2/w/60"
            mode="widthFix"
          />
        </View>
      </View>
    )
  }
}

export default Index
