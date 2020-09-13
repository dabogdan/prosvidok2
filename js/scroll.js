// scroll js function

const scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    top: element.offsetTop - navbarHeight
  });
}

let navbarHeight = document.getElementsByClassName('navbar')[0].clientHeight;

let welcome = document.getElementById('welcome'); 

let victims = document.getElementById("victims");

const scrollArrow = () => {
	scrollTo(welcome);
};

scrollVictims = () => {
	scrollTo(victims);	
	document.getElementById("mobmenu-btn").checked = false;
}