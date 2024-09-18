import { Typhography } from "../../props/Typography";

export function H3(props: Typhography): JSX.Element {
    return (
        <h3 className={`text-2xl font-bold leading-loose ${props.className}`}>
            {props.children}
        </h3>
    );
}
