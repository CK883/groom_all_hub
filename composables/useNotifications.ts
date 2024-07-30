import { ref, computed } from 'vue';

const notifications = ref([]) as any;

export function useNotifications() {
  const addNotification = (notification: any) => {
    const id = Date.now();
    notifications.value.push({ id, ...notification });
    return id;
  };

  const removeNotification = (id: string) => {
    const index = notifications.value.findIndex((n: any) => n.id === id);
    if (index !== -1) {
      notifications.value.splice(index, 1);
    }
  };

  const activeNotifications = computed(() => notifications.value);

  return {
    addNotification,
    removeNotification,
    activeNotifications
  };
}