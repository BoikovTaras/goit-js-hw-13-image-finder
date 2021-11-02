import './sass/main.scss';
import searchImage from'./js/apiService.js'
// Отрисовываем инпут на страницу
import inputArea from './partials/input.hbs';
import pictureList from './partials/imagesList.hbs';
import debounce from 'lodash.debounce';

let pageNum = 1;
let searchQuery = '';

const inArea = document.querySelector('.input_box');
inArea.innerHTML = inputArea();

const inputWindow = document.querySelector('.search-form');
const galleryBox = document.querySelector('.gallery_box');
const loadMoreBtn = document.querySelector('.button');

// const getIp = async () => {
//     let response = await searchImage(searchQuery, pageNum);
//     let imageIp = await response.json();

//     const marckup = imageIp.this.map(pictureList).join('');

//     galleryBox.insertAdjacentHTML('beforeend', marckup);

// };




const searchImg = e => {
    searchQuery = e.target.value;
    pageNum = 1;

    searchImage(searchQuery, pageNum)
        .then(response => {
            return response.json()
        })
        .then(image => {
        const marckup = pictureList(image);
        galleryBox.innerHTML = marckup; 

        })
        .catch(error => {
            console.log('404');
            console.log(error);
        })
};

const loadMore = e => {
    pageNum ++;
    searchImg();
};

inputWindow.addEventListener('input', debounce(searchImg, 1000));
loadMoreBtn.addEventListener('click', loadMore);