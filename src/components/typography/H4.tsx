import { Typhography } from "../../props/Typography";

export function H4(props: Typhography): JSX.Element {
    return (
        <h4 className={`text-xl font-bold leading-loose ${props.className}`}>
            {props.children}
        </h4>
    );
}
