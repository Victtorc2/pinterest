const API_URL = import.meta.env.VITE_UNSPLASH_BASE_URL;
const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

export const searchPhotos = async (query) => {
  const res = await fetch(`${API_URL}/search/photos?page=1&per_page=30&query=${query}&client_id=${API_KEY}`);
  const data = await res.json();
  return data.results;
};
