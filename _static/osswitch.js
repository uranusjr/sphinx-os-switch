if (!NodeList.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('os_switch').addEventListener('change', evt => {
		const value = evt.target.value
		document.querySelectorAll(`.os-specific > .code`).forEach(el => {
			if (value === '__all__' || el.classList.contains(value)) {
				el.style.display = ''
			} else {
				el.style.display = 'none'
			}
		})
	})
})
