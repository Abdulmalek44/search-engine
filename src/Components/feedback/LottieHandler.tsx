import Lottie from "lottie-react";
import error from "@/assets/lotties/error.json";
import notFound from "@/assets/lotties/notFound.json";
import SearchPaper from "@/assets/lotties/search-paper.json";
import Loading from "@/assets/lotties/loading.json";
import UploadFile from "@/assets/lotties/uploadFile.json";
import SearchFailed from "@/assets/lotties/search-failed.json";
import searchDetails from "@/assets/lotties/search-2.json";

const Lottihandlermap = {
  error: error,
  notFound: notFound,
  SearchPaper: SearchPaper,
  Loading: Loading,
  UploadFile: UploadFile,
  SearchFailed: SearchFailed,
  searchDetails: searchDetails,
};

type LottieHandlerprops = {
  message?: string;
  type: keyof typeof Lottihandlermap;
  Style?: string;
};

const LottieHandler = ({ message, type, Style }: LottieHandlerprops) => {
  const lottie = Lottihandlermap[type];
  return (
    <div className="flexCenter flex flex-col items-center justify-center">
      <Lottie animationData={lottie} className={Style ? Style : "w-2/4"} />
      {message && <h1 className="font-semibold text-lg ">{message}</h1>}
    </div>
  );
};

export default LottieHandler;
