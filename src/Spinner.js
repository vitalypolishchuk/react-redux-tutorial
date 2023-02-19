import { ProgressBar } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Spinner = (props) => {
  const spinner = useSelector((state) => state.loaderReducer.loading);
  return (
    <div className="loader-styles">
      <ProgressBar
        height="200"
        width="200"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
        visible={spinner}
      />
    </div>
  );
};

export default Spinner;
