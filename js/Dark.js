let darkcheck=document.getElementById("darkCheck");
darkcheck.addEventListener('change', function(){
	let darkthemeEnabled=document.body.classList.toggle('dark-theme');
	localStorage.setItem('dark-theme-enabled',darkthemeEnabled);
});
if(JSON.parse(localStorage.getItem('dark-theme-enabled'))){
	document.body.classList.add('dark-theme');
	darkcheck.setAttribute('checked', 'checked');
}