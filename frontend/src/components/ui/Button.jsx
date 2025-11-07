import { cn } from "../../lib/cn";

const Button = ({ onClick, className, children, ...rest }) => {
    return (
        <button
            {...rest}
            onClick={onClick}
            className={cn(
                "flex justify-center items-center gap-2 text-sm md:text-base xl:text-base text-white bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-700 hover:cursor-pointer",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
