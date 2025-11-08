import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useAppContext from "../../hooks/useAppContext";

const Loading = () => {
    const { state } = useAppContext();
    return (
        state.loading && (
            <div className=" absolute inset-x-0 inset-y-0 flex justify-center items-center  bg-black/5 z-50">
                <div className="text-6xl lg:text-8xl text-white bg-white  p-4">
                    <AiOutlineLoading3Quarters className="animate-spin text-purple-500" />
                </div>
            </div>
        )
    );
};

export default Loading;
