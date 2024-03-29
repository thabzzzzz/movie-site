

import { defineStore } from 'pinia';

export const useMovieStore = defineStore({
  id: 'movie',
  state: () => ({
    queryMovie: [],
  }),
  actions: {
    setQueryMovie(movie) {
      this.queryMovie = movie;
    },
  },
});
