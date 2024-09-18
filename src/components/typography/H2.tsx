import { Typhography } from "../../props/Typography";

export function H2(props: Typhography): JSX.Element {
    return (
        <h2 className={`text-3xl font-bold leading-loose ${props.className}`}>
            {props.children}
        </h2>
    );
}
