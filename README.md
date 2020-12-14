# text-voice
## 一个适用于vue2.x的文字转语音朗读小插件

## 安装
npm install text-voice --save

## 使用
main.js中引入模块并使用

import textVoice from 'text-voice'

Vue.use(textVoice)

## 语法
1.开启文字转语音

Vue.$textVoice.speech('这是要转成语音的文字', { rate: 1 })


2.静音

Vue.$textVoice.setMute()


3.开启声音

Vue.$textVoice.openVoice()

