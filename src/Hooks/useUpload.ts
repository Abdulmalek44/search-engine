import useFileUpload from "@/API/useFileUpload";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { useToast } from "@/Components/ui/use-toast";

const useUpload = () => {
    const [uploadMessage, setUploadMessage] = useState<string>("");
    const { mutate, isError, isLoading } = useFileUpload();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);

        if (selectedFiles.length === 0) {
            setUploadMessage("No files selected.");
            return;
        }

        mutate(selectedFiles, {
            onSuccess: () => {
                setUploadMessage("Files uploaded successfully!");
            },
            onError: () => {
                setUploadMessage("Error uploading files.");
            },
        });
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    useEffect(() => {
        if (uploadMessage) {
            toast({
                title: "Upload Status",
                description: uploadMessage,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadMessage]);

    return { handleButtonClick, handleOnChange, fileInputRef, isError, isLoading, uploadMessage }
}

export default useUpload