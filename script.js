// your code here
const form = document.getElementById("infoForm")
const link = document.getElementById("url");

form.addEventListener("submit", function(e){
	e.preventDefault();
const name = document.getElementById("name").value.trim();
const year = document.getElementById("year").value.trim();

let baseUrl = `https://localhost:8080/`
let params = [];

if(name) params.push(`name=${name}`)
if(year) params.push(`year=${year}`)
// 
link.textContent = params.length>0 ? `${baseUrl}?${params.join("&")}` : baseUrl;
	
})
