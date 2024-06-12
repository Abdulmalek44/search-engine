import useDeleteAllFiles from "@/API/useDeleteAllFiles";
import Upload from "@/Components/Common/Upload";
import { Button } from "@/Components/ui/button";

const UploadFiles = () => {
  const deleteAllFilesMutation = useDeleteAllFiles();
  const handleDelete = () => {
    deleteAllFilesMutation.mutate();
  };

  return (
    <div className="w-full min-h-[70vh] flex lg:items-center justify-center">
      <div className="max-w-6xl  mx-auto w-full flex items-center mt-10 gap-y-5 flex-col max-lg:px-5">
        <Upload />
        <Button
          variant={"destructive"}
          className="w-full lg:w-2/4 "
          onClick={handleDelete}
        >
          Delate All Files On Server
        </Button>
      </div>
    </div>
  );
};

export default UploadFiles;
