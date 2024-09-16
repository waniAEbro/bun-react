import { ArrowButton } from "../button/ArrowButton";
import { H1 } from "../typography/H1";

function SecondaryBanner({
    title,
    content,
    link,
    accent,
    image,
}: {
    title: string;
    content: string;
    link: string;
    accent: string;
    image: string;
}): JSX.Element {
    return (
        <>
            <div className="w-full py-16 bg-medium-orange rounded-lg relative">
                <img
                    src={accent}
                    alt="banner accent"
                    className="absolute right-0 bottom-0 z-0"
                />
                <div className="w-full h-full flex items-center justify-center md:justify-start md:flex-row flex-col relative z-10">
                    <img
                        src={image}
                        alt="banner image"
                        className=" lg:ml-24 md:ml-8 h-72 w-72 rounded-lg object-cover "
                    />
                    <div className="flex flex-col gap-4 p-4">
                        <H1>{title}</H1>
                        <p>{content}</p>
                        <ArrowButton link={link} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecondaryBanner;
