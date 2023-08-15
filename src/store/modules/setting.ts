/*
 * @Description: Stay hungry，Stay foolish
 * @Author: xieXiaoFei
 * @Date: 2023-05-20 21:42:14
 * @LastEditors: xieXiaoFei
 * @LastEditTime: 2023-05-21 20:54:48
 */
import { defineStore } from 'pinia'

let useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      isCollapse: false,
      refsh: false,
    }
  },
})

export default useLayOutSettingStore
