const daysElement = document.querySelector('#days')
const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const yearElement = document.querySelector('#year')

// Вычисление даты Нового Года
// Calcutation New Year's date
const currentYear = new Date().getFullYear()
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)

yearElement.innerText = currentYear + 1

// Обновление времени
const updateTime = () => {
	const currentTime = new Date()
	const diff = nextYear - currentTime;

	const days = Math.floor(diff / 1000 / 60 / 60 / 24)
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24
	const minutes = Math.floor(diff / 1000 / 60) % 60
	const seconds = Math.floor(diff / 1000) % 60

	daysElement.innerText = days < 10 ? '0' + days : days
	hoursElement.innerText = hours < 10 ? '0' + hours : hours
	minutesElement.innerText = minutes < 10 ? '0' + minutes : minutes
	secondsElement.innerText = seconds < 10 ? '0' + seconds : seconds
}

// Запуск
// Launch
updateTime()
setInterval(updateTime, 1000)
