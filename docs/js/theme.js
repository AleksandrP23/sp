//Темная тема
function SetLightTheme(enable=0)
{
	if(enable) localStorage.setItem("theme","light");
	document.body.className="light";
	document.querySelector(".img-mob").srcset="./img/logomobile.png";
	document.querySelector(".img-desk").src="./img/logo.png";
}
function SetDarkTheme(enable=0)
{
	if(enable) localStorage.setItem("theme","dark");
	document.body.className="dark";
	document.querySelector(".img-mob").srcset="./img/logomobile-dark.png";
	document.querySelector(".img-desk").src="./img/logo-dark.png";
}

const theme=localStorage.getItem("theme");
if(theme===null) SetLightTheme(1);
else if(theme==="dark") SetDarkTheme();
else if(theme==="light") SetLightTheme();