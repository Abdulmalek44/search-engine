
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const uploadFiles = async (files: File[]) => {
    const formData = new FormData();
    files.forEach(file => formData.append('Documents', file));


    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://wordsearchalgo-001-site1.atempurl.com/api/v1/informationretrival/upload-documents',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': `Basic ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        },
        data: formData
    };

    const response = await axios.request(config);

    return response.data;
};

const useFileUpload = () => {
    return useMutation(uploadFiles)
};

export default useFileUpload;
