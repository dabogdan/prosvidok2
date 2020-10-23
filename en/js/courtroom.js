const descriptionBoxBelow = document.getElementsByClassName("description-below")[0];
const descriptionBoxTextBelow = document.getElementsByClassName("description-text")[0];
const descriptionOnPicture = document.getElementsByClassName("description")[0];
const defaultText = "Please, click or hover the mouse over the item on the picture above to get its description.";

const mouseOut = () => {
    descriptionBoxTextBelow.innerHTML = defaultText;
    descriptionOnPicture.style.display = 'none';
}

if (window.innerWidth <= 980) {
    descriptionBoxBelow.style.display = 'block';
}

const descriptionOnHover = (element) => {
    if (window.innerWidth <= 980) {
        //if mobile version
        descriptionBoxTextBelow.innerHTML = element.getAttribute('description-data');
    } else {
        //if desktop version
        descriptionOnPicture.innerHTML = element.getAttribute('description-data');
        descriptionOnPicture.style.display = 'block';
        if (element.classList[1] === 'defendant-in-custody') {
            descriptionOnPicture.style.left = 15.6 + 'rem';
        } else {
            descriptionOnPicture.style.left = 30 + 'px';
        }
    }
};