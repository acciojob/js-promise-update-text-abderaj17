//your JS code here. If required.
const output  = document.getElementById('output');

document.addEventListener('click', ()=>{
	const fun = new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve('Hello, world!'); 
		}, 1000)
	})
	fun.then(message =>{
		output.innerHTML = `<h1>${message}</h1>`;
	})
})