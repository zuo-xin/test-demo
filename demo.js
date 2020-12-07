document.addEventListener("DOMContentLoaded",function(){
	let test = document.querySelector(".test");
	test.addEventListener("click",function(){
		alert(test.innerHTML)
	})
})