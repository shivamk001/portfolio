import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl relative bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none border-2",
                className,
            )}

            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >

            <div className={`${id === 6 && "flex justify-center"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={cn(imgClassName, "object-cover object-center w-full h-full")}
                        />
                    )}
                </div>
                {id===6 && (
                    <BackgroundGradientAnimation>
                        <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
                    </BackgroundGradientAnimation>
                )}

                <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 translate duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
                    <div className="font-sans font-extralight text-[#c1c2c3] text-sm md:text-xs lg:text-base z-10">
                        {description}
                    </div>

                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                        {title}
                    </div>
                </div>
            </div>

            <div className="transition duration-200 group-hover/bento:translate-x-2">


            </div>
        </div>)
};
