import TencentCloudChat, { ChatSDK } from '@tencentcloud/chat'
import TIMUploadPlugin from 'tim-upload-plugin'
import type { ChatDefineProps, TIMCoreLoginParams } from '@/stores/plugins/TIM-plugin/type'

/**
 * IM核心功能
 */
export default class TIMCore {
    public tim: ChatSDK | undefined
    public userID: string | undefined

    constructor(props: ChatDefineProps) {
        this.initTimSdk(props.SDKAppID)
    }

    private initTimSdk = (SDKAppID: number) => {
        const options = {
            SDKAppID: SDKAppID // 接入时需要将0替换为您的即时通信 IM 应用的 SDKAppID
        }
// 创建 SDK 实例，`TIM.create()`方法对于同一个 `SDKAppID` 只会返回同一份实例
        const chat = TencentCloudChat.create(options) // SDK 实例通常用 chat 表示


        chat.setLogLevel(0) // 普通级别，日志量较多，接入时建议使用
// chat.setLogLevel(1); // release 级别，SDK 输出关键信息，生产环境时建议使用


// 注册腾讯云即时通信 IM 上传插件
        chat.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin })

        this.tim = chat
    }

    public timLogin = async (options: TIMCoreLoginParams) => {
        await this.tim?.login(options)
        this.userID = options.userID
        this.bindTIMEvent()
    }

    private bindTIMEvent = () => {
        this.tim?.on(TencentCloudChat.EVENT.SDK_READY, this.handleSDKReady, this)
    }
    private handleSDKReady = () => {
        console.log('SDK Ready')
        this.tim?.on(TencentCloudChat.EVENT.MESSAGE_RECEIVED, this.handleMessageReceived, this)
    }
    private handleMessageReceived = (event: any) => {
        console.log('receive message：', event)
    }

    private getMessageOptions = (userID: string, payload: string) => {
        return this.tim?.createTextAtMessage({
            to: userID,
            conversationType: TencentCloudChat.TYPES.CONV_C2C,
            payload: {
                text: payload
            },
            needReadReceipt: true
        })
    }

    public sendMessage = async (userID: string, payload: string) => {
        //创建消息
        const message = this.getMessageOptions(userID, payload)
        //发送消息
        await this.tim?.sendMessage(message!)
        console.log('send success !')
    }
}