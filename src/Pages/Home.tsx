import useSearch from "@/API/useSearch";
import { DataDetails, SelectOption } from "@/Components/Common";
import Loading from "@/Components/feedback/Loading";
import LottieHandler from "@/Components/feedback/LottieHandler";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [model, setModel] = useState(0);
  const { mutate, isLoading, isError, data } = useSearch();
  const dataSearch = {
    searchAlgorithm: model,
    query: inputSearch,
  };

  const handleclich = () => {
    mutate(dataSearch);
  };

  return (
    <div className="w-full ">
      <div className="max-w-6xl  mx-auto w-full flex  mt-10 flex-col max-lg:px-5">
        <Loading isError={isError} isLoading={isLoading}>
          <div className="flex items-center justify-center flex-col">
            <h1 className="text-5xl max-lg:text-4xl font-bold">
              Search Engine
            </h1>
            <LottieHandler type="SearchPaper" Style="lg:w-5/12 w-10/12" />
          </div>
          <div className="flex items-center justify-center mt-10 max-lg:flex-col gap-y-3 ">
            <Input
              type="text"
              placeholder="Search"
              className="focus:ring-1 rounded-none rounded-bl-md rounded-tl-md maxlg:rounded-md"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <div className="flex max-lg:w-full">
              <div className="max-lg:w-full">
                <SelectOption model={model} setModel={setModel} />
              </div>
              <Button
                className="rounded-none rounded-br-md rounded-tr-md w-full "
                onClick={handleclich}
              >
                Search
              </Button>
            </div>
          </div>
        </Loading>
        {Array.isArray(data) && data.length === 0 && (
          <div className="my-20 flex flex-col items-center">
            <LottieHandler
              type="SearchFailed"
              message="There is no files on the server"
              Style="w-7/12 mb-7"
            />
            <NavLink to="/upload" className="mt-3 underline">
              Upload Files
            </NavLink>
          </div>
        )}
        {Array.isArray(data) && data.length > 0 && (
          <DataDetails Filesdata={data} />
        )}
      </div>
    </div>
  );
};

export default Home;
