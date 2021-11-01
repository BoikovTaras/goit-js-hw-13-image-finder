export default function apiService(serchImage) {
    const KEY = '24115894-e73b87c75d7b7d0a00bbe3b23';
    let pageNum = 1;
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${serchImage}&page=${pageNum}&per_page=12&key=${KEY}`)
    
};
