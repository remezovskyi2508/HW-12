import axios from 'axios';

const fetchImages = async searchWord => {
  const searchParams = new URLSearchParams({
    key: '45320962-957458a2920d861910609dde6',
    q: searchWord,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    return response.data.hits; // Возвращаем массив изображений
  } catch (error) {
    console.error('Ошибка при запросе к API:', error);
    throw error; // Передаем ошибку дальше для обработки
  }
};

export default fetchImages;
