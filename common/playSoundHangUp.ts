import soundCalling from '~/assets/sound/mobile_phone_hanging_up.mp3';
export default {
  playSoundHangUp() {
    console.log('playSoundHangUp');
    const audio = new Audio(soundCalling);
    audio.muted = false;
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  },
};
