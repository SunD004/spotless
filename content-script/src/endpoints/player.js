export default {
  getPlaybackDataEndpoint: () => '/me/player',
  countdown: () => '/me/player/countdown',
  setVolumeEndpoint: percent => `/me/player/volume?volume_percent=${percent}`,
  setCountdownEndpoint: countdown => `/me/player/countdown?countdown=${countdown}`
}