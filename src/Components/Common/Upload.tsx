import { Button } from "@/Components/ui/button";
import UploadIcon from "@/assets/svg/upload.svg?react";
import Loading from "../feedback/Loading";
import useUpload from "@/Hooks/useUpload";
import { SupportedFormats } from "@/constant";

const Upload = () => {
  const {
    handleButtonClick,
    handleOnChange,
    fileInputRef,
    isError,
    isLoading,
  } = useUpload();

  const SupportedFormat = SupportedFormats.map((item) => (
    <span
      key={item.id}
      className="py-[2px] px-1.5 border mr-2 text-center bg-gray-200 rounded-sm"
    >
      {item.name}
    </span>
  ));

  return (
    <>
      <div className="lg:w-2/4 w-full h-60 rounded-lg border-2 flex flex-col items-center justify-center shadow-2xl">
        <Loading isError={isError} isLoading={isLoading} isUpload={true}>
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-evenly w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <Button onClick={handleButtonClick}>
              <UploadIcon className="w-6 mr-2" /> Upload Files
            </Button>
            <input
              type="file"
              className="hidden"
              onChange={handleOnChange}
              name="files"
              multiple
              id="file-upload"
              ref={fileInputRef}
            />
            <p className="max-lg:max-w-64 text-center font-semibold">
              Choose file or multiple files and Click the Upload Files button
            </p>
            <div className="flex max-lg:flex-col gap-3 flex-wrap max-lg:max-w-64 items-center justify-center">
              <h3 className="font-semibold">Supported formats:</h3>
              <div>{SupportedFormat}</div>
            </div>
          </label>
        </Loading>
      </div>
    </>
  );
};

export default Upload;
