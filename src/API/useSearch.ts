import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type TData = {
  searchAlgorithm: number;
  query: string,
}
const search = async (data: TData) => {


  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://wordsearchalgo-001-site1.atempurl.com/api/v1/informationretrival/search",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      'Authorization': `Basic ${import.meta.env.VITE_API_AUTH_TOKEN}`,
    },
    data: data

  };

  const response = await axios.request(config);

  return response.data;
};

const useSearch = () => {
  return useMutation(search)
}

export default useSearch