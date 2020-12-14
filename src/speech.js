
const option = {
    text: '',
    volume: 1,
    timer: '',        // 截取文字定时器  
    rate: 1           // 语速，默认是1,但语速并没有1字/?ms固定值，取平均值373
}
const method = {}

// 判断当前设备是否支持相关api
if(!window.speechSynthesis || !SpeechSynthesisUtterance) {
    console.log('你的浏览器暂不支持文字转语音相关api')
} else {
    const synth = window.speechSynthesis
    const msg = new SpeechSynthesisUtterance()
    // 静音
    method.setMute = () => {
        option.volume = 0
        // 停止播放声音并截取文字
        // 获取当前读到的文字,并清空已经朗读过的文字,开启截取文字
        msg.onend = (e) => {
            const textIndex = Math.ceil(e.elapsedTime/373*option.rate)
            option.text = option.text.substr(textIndex, option.text.length-1)
            method.readText()
        }
        synth.cancel()
    }
    // 开启声音
    method.openVoice = () => {
        option.volume = 1
        // 如果正在截取文字则关闭截取文字
        if(option.timer) {
            clearInterval(option.timer)
        }
        if(option.text.length>1) {
            method.speak()
        }
    }
    // 朗读
    method.speak = () => {
        msg.text = option.text
        msg.rate = option.rate
        // 朗读结束清空文字
        msg.onend = (e) => {
            option.text = ''
        }
        synth.speak(msg)
    }
    // 开启文字转语音
    method.speech = (text, opt) => {
        for (const key in option) {
            for (const item in opt) {
                if(item == key) {
                    option[key] = opt[item]
                }
            }
        }
        option.text = text
        // 如果是静音就截取文字
        if(option.volume == 0) {
            method.readText()
            return
        }
        method.speak()
    }
    // 默读，实际是按朗读速度截取文字, 1字/373ms
    method.readText = () => {
        option.timer = setInterval(() => {
            if(option.text.length > 1) {
                option.text = option.text.substr(1, option.text.length -1)
            } else {
                option.text = ''
                clearInterval(option.timer)
            }
        }, 373/option.rate)
    }
}

export default method