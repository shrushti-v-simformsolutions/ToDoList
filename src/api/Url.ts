const baseURL = 'https://api.themoviedb.org/';
const apiKey = 'a3c4e2a1038dfc5deea3912f341e8823';
export const image_url = 'https://image.tmdb.org/t/p/w500/';

  /**
 * This is Movie Url custom
 */
export const movieURL = (page: number) => {
  return `${baseURL}3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`;
};

/**
* This is Movie search Url
*/
export const onSearch = (page: number, querry: string) => {
  return `${baseURL}3/search/movie?api_key=${apiKey}&language=en-US&query=${querry}&page=${page}&include_adult=false`;
};