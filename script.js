//your JS code here. If required.
const output  = document.getElementById('output');

document.addEventListener('click', ()=>{
	const fun = new Promise(()=>{
		setTimeout(()=>{
			output.innerHTML = `<h1>Hello, world!</h1>`;
		}, 1000)
	})
})