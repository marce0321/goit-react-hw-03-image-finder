export const fetchImages = (query = '', pageNumber = 1) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=36068946-671fefa6acbf583eca485bb05&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000))) // Задержка добавлена для тестирования Loader
    .then(res => res.json())
    .then(data => data.hits);
};

export { fetchImages as default };
