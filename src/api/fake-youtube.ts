import axios from 'axios';

export default class FakeYoutube {
  constructor() {}

  async search(keyword: string | undefined) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async #searchByKeyword() {
    console.log('called with keyword');
    return axios
      .get('/videos/search.json')
      .then((res) => res.data.items)
      .then((items) => console.log(items))
      .then((items) =>
        items.map((item) => ({ ...items, id: items.id.videoId }))
      );
  }

  async #mostPopular() {
    return axios
      .get('/videos/popular.json')
      .then((res) => res.data.items)
      .catch((error) => console.log(error));
  }
}
