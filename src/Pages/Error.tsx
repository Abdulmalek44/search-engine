import LottieHandler from "@/Components/feedback/LottieHandler";
import { Button } from "@/Components/ui/button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="flexCenter flex-col ">
      <LottieHandler type="notFound" Style=" lg:h-4/6" />
      <NavLink to="/">
        <Button
          variant={"default"}
          className="font-semibold text-lg mt-4 shadow-lg"
        >
          How about going back to safety?
        </Button>
      </NavLink>
    </div>
  );
};

export default Error;
