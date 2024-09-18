import { Typhography } from "../../props/Typography";

export function H1(props: Typhography): JSX.Element {
    return (
        <h1 className={`text-4xl font-bold leading-loose ${props.className}`}>
            {props.children}
        </h1>
    );
}
