import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFileDetails = async (id: string | null) => {
    if (!id) return null;

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://wordsearchalgo-001-site1.atempurl.com/api/v1/informationretrival/${id}`,
        headers: {
            'accept': 'application/json',
            'Authorization': `Basic ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        }
    };
    const response = await axios.request(config)

    return response.data
}

const useFileDetails = (id: string | null) => {
    return useQuery(['fileDetails', id], () => fetchFileDetails(id), {
        enabled: !!id, // Query will not execute until the id exists
        initialData: null, // Return null initially if id is not provided
    });
};

export default useFileDetails;