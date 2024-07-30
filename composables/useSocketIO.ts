import { io } from "socket.io-client";
export function useSocketIONoti() {
    let socket = ref();
    let error = ref();
    const runtimeConfig = useRuntimeConfig();
    
    function connect() {
      try {
        socket.value = io(
          `${runtimeConfig.public.app_web_socket_endpoint}notification`,
          {
            extraHeaders: {
                Authorization: `${localStorage.getItem('accessToken')}`,
              },
          }
        );
      } catch (err) {
        error.value = err;
      }
    }
    
    return {
      error,
      socket,
      connect,
    };
  }