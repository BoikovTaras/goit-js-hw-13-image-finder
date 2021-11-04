import './sass/main.scss';
import searchImage from'./js/apiService.js'
import inputArea from './partials/input.hbs';
import pictureList from './partials/imagesList.hbs';
import debounce from 'lodash.debounce';

let pageNum = 1;
let searchQuery = '';

const inArea = document.querySelector('.input_box');
inArea.innerHTML = inputArea();

const inputWindow = document.querySelector('.search-form');
const galleryBox = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.button');

function getImg() {
    searchImage(searchQuery, pageNum)
        .then(response => {
            return response.json()
        })
        .then(image => {
        const marckup = pictureList(image);
        galleryBox.insertAdjacentHTML('beforeend', marckup); 
        })
        .catch(error => {
            console.log('404');
            console.log(error);
        })
}

const searchImg = e => {
    galleryBox.innerHTML = '';
    searchQuery = e.target.value;
    pageNum = 1;

    if (searchQuery.length > 0) {
    getImg();
    loadMoreBtn.classList.remove('is_hidden');
  } else {
    loadMoreBtn.classList.add('is_hidden');
  }
    
};

const loadMore = e => {
    pageNum ++;
    getImg();
};

inputWindow.addEventListener('input', debounce(searchImg, 1000));
loadMoreBtn.addEventListener('click', loadMore);