import axios from 'axios';

export default class Youtube {
  httpClient;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
      },
    });
  }

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword: string) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => ({ ...items, id: items.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }
}
