// scroll js function

scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    top: element.offsetTop - navbarHeight
  });
}

let navbarHeight = document.getElementsByClassName('navbar')[0].clientHeight;

let welcome = document.getElementById('welcome'); 

let victims = document.getElementById("victims");

scrollArrow = () => {
	scrollTo(welcome);
};

scrollVictims = () => {
	scrollTo(victims);	
	mobMenuUncheck();
}