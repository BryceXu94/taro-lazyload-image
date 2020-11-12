import Taro, { useState } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { IProps } from './type'
import './style.scss'
/**
 *
 * @param props 图片懒加载组件 避免首屏加载过多图片占用资源
 */
const LazyImage = (props: IProps) => {
  const { src, mode = 'scaleToFill', thumb } = props
  const [load, setLoad] = useState(false)
  const [originAppend, setOriginAppend] = useState(false)
  const imgLoad = () => {
    setLoad(true)
  }
  // 必须缩略图加载完毕后才插入原图节点触发原图的资源加载
  const thumbLoad = () => {
    setOriginAppend(true)
  }
  return (
    <View className="lazyImage__container">
      {!load && (
        <Image
          src={thumb}
          className="lazyImage__container__thumb"
          mode={mode}
          lazyLoad
          onLoad={thumbLoad}
        />
      )}
      {originAppend && (
        <Image
          src={src}
          className={`lazyImage__container__origin ${load ? 'visible' : ''}`}
          onLoad={imgLoad}
          mode={mode}
          lazyLoad
        />
      )}
    </View>
  )
}
export default Taro.memo(LazyImage)
