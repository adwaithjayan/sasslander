import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

export default function Tag(props:HTMLAttributes<HTMLDivElement>){
    const {className,children,...others} =props;
    return<div className={twMerge('inline-flex border items-center border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase',className)} {...others}>
        <span>&#10038;</span>
        <span className='text-sm'>{children}</span>
    </div>
}