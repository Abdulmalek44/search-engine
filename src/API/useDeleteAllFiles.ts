import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const DeleteAllFiles = () => {
    const data = JSON.stringify({
        "deleteAll": true
    });

    const config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: 'https://wordsearchalgo-001-site1.atempurl.com/api/v1/informationretrival',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Basic ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
        data: data
    };

    return axios.request(config).then(response => response.data);
}

const useDeleteAllFiles = () => {
    return useMutation(DeleteAllFiles);
}

export default useDeleteAllFiles;
