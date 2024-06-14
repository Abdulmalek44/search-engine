import { ReactNode } from "react";
import LottieHandler from "./LottieHandler";

type LoadingProps = {
  isLoading: boolean;
  isError: boolean;
  isUpload?: boolean;
  isSearchDetails?: boolean;
  children: ReactNode;
};

const Loading = ({
  isLoading,
  children,
  isError,
  isUpload,
  isSearchDetails,
}: LoadingProps) => {
  if (isLoading) {
    if (isUpload) {
      return (
        <LottieHandler
          type="UploadFile"
          message="Upload Files please wait"
          Style="w-1/4"
        />
      );
    }
    if (isSearchDetails) {
      return <LottieHandler type="searchDetails" Style="w-3/4" />;
    }
    return <LottieHandler type="Loading" />;
  }

  if (isError) {
    return <LottieHandler message="Network Error" type="error" />;
  }

  return <>{children}</>;
};

export default Loading;
