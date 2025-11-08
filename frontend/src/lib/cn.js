import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
    return clsx(twMerge(inputs));
};
