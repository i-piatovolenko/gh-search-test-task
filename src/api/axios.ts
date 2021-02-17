import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com/",
});

export const getOrganisations = (query: string, page: number = 1, per_page: number = 10) => {
  return instance.get(`https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${per_page}`)
}

// "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",