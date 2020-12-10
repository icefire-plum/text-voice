
import method from './speech'


// 安装方法， 
const install = (vue) => {
    if(install.installed) return
    install.installed = true
    vue.prototype.$textVoice = method
}

export default {
    install
}