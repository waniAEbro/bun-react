import { Typhography } from "../../props/Typography";

export function H5(props: Typhography): JSX.Element {
    return (
        <h5 className={`text-lg font-bold leading-loose ${props.className}`}>
            {props.children}
        </h5>
    );
}
