import axios from 'axios';

const fetchImages = async (searchWord, currentPage) => {
  const searchParams = new URLSearchParams({
    key: '45320962-957458a2920d861910609dde6',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    const totalHits = response.data.totalHits;
    const images = response.data.hits;

    return { totalHits, images }; // Возвращаем массив изображений и количество изображений из сервера...
  } catch (error) {
    console.error('Ошибка при запросе к API:', error);
    throw error; // Передаем ошибку дальше для обработки
  }
};

export default fetchImages;
