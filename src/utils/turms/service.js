import {onMounted, onUnmounted} from "vue";


export default async function useTurmsService({
                                                  client,
                                                  handleMsg
                                              }) {

    onMounted(() => {
        client.messageService.addMessageListener(handleMsg)
    })

    onUnmounted(() => {
        client.messageService.removeMessageListener(handleMsg)
    })
}
