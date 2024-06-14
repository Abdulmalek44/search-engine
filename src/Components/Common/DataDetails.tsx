import useFileDetails from "@/API/useFileDetails";
import Loading from "../feedback/Loading";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";

type TSearch = {
  id: string;
  note: string;
  path: string;
  title: string;
};
type DataDetailsProps = {
  Filesdata: TSearch[];
};

const DataDetails = ({ Filesdata }: DataDetailsProps) => {
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const { data, isError } = useFileDetails(selectedFileId);

  const handleClick = (id: string) => {
    setSelectedFileId(id);
  };
  return (
    <div className=" mt-6">
      {Filesdata && (
        <h1 className="lg:text-2xl text-xl font-bold">
          The Result of the search is:
        </h1>
      )}
      <div className="my-10 grid lg:grid-cols-2 flex-col gap-8">
        {Filesdata &&
          Filesdata.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between p-6 rounded-md bg-gray-100"
            >
              <h1 className="lg:text-xl">
                File Path :{file.path.substring(0, 30) + "..."}
              </h1>
              <Dialog>
                <DialogTrigger
                  onClick={() => handleClick(file.id)}
                  className=" border-2 p-2 rounded-md bg-white hover:bg-[#d3e2eada]"
                >
                  File Name :{file.title.substring(0, 5) + ".."}
                </DialogTrigger>
                <DialogContent className="max-h-[80vh] overflow-y-auto">
                  <Loading
                    isError={isError}
                    isLoading={!data}
                    isSearchDetails={true}
                  >
                    <DialogHeader>
                      <DialogTitle className="mb-3">File Preview</DialogTitle>
                      <DialogDescription>
                        {data && data.content}
                      </DialogDescription>
                    </DialogHeader>
                  </Loading>
                </DialogContent>
              </Dialog>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DataDetails;
