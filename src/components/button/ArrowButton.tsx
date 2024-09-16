import { FaLongArrowAltRight } from "react-icons/fa";

export function ArrowButton({ link }: { link: string }): JSX.Element {
    return (
        <>
            <a href={link}>
                <button className="p-4 bg-white rounded-full w-fit hover:bg-slate-200 hover:text-slate-500">
                    <FaLongArrowAltRight />
                </button>
            </a>
        </>
    );
}
