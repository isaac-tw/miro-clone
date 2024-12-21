import Image from "next/image";

const Loading = () => {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <Image
                alt="logo"
                className="animate-pulse duration-1000"
                height={100}
                src="/logo.svg"
                width={100}
            />
        </div>
    );
}

export default Loading;