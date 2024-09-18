import { Typhography } from "../../props/Typography";

export function H6(props: Typhography): JSX.Element {
    return (
        <h6 className={`text-base font-bold leading-loose ${props.className}`}>
            {props.children}
        </h6>
    );
}
