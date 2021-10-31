import './sass/main.scss';
import searchImage from'./js/apiService.js'
// Отрисовываем инпут на страницу
import inputArea from './partials/input.hbs';
import pictureList from './partials/imagesList.hbs';

const inArea = document.querySelector('.input_box');
inArea.innerHTML = inputArea();

// Добавляем слушателя к инпуту
const inputWindow = document.querySelector('.search-form');

inputWindow.addEventListener('submit', searchImg);


function searchImg(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const searchQuery = form.elements.query.value;

    searchImage(searchQuery)
        .then(response => {
            return response.json()
        })
        .then(image => {
            return image;
            const marckup = pictureList(image);
            console.log(marckup);
        })
        .catch(error => {
            console.log(error);
        })
};
// const inputText = inputWindow.addEventListener('input', (e) => {
//     const it = searchBtn.addEventListener('click', (txt) => {
//         searchImage(e.target.value)
//     .then(response => {
//         return response.json();
//     })
//     .then(image => {
//         return image;
//     })
//     .catch(error => {
//         console.log(error);
//     })

//     });
    
// });