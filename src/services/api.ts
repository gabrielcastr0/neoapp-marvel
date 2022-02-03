import axios from "axios";
import md5 from "md5";

const publicKey = "3b8aff6e86f1f335d4bdbe20817641c6";
const privateKey = "165fa408f0c01879664bb3f80983f958e6eb6ea2";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const request = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public/",
  params: {
    ts,
    limit: 50,
    offset: 100,
    apikey: publicKey,
    hash,
  },
});

export const api = {
  getAllComics: async () => {
    const req = await request(`/comics`);
    console.log(req);
    return req.data.data.results;
  },

  getComic: async (id: string | undefined) => {
    const req = await request(`/comics/${id}`);
    return req.data.data.results[0];
  },
};

export default api;
