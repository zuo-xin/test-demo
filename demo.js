document.addEventListener("DOMContentLoaded",function(){
	let test = document.querySelector(".test");
	test.addEventListener("click",function(){
		console.log(test.innerHTML)
	})
})