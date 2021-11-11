const $ = param => document.querySelector(param)

const level = $('#level')
const wave = $('#wave')
const batteryText = $('#batteryPercentage')

const battery = await getBattery()

async function getBattery() {
  return await navigator.getBattery()
}

console.log(battery)
battery.onlevelchange = data => {
  console.log('cambio la bateria', data)
}

const levelHeight = battery.level * 100

level.style.height = `${levelHeight}%`

wave.style.top = `${100 - levelHeight - 6}%`

level.style.height = levelHeight

batteryText.innerText = `${Math.floor(battery.level * 100)}%`
