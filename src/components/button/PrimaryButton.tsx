function PrimaryButton({ children }: { children: string }): JSX.Element {
    return (
        <button className=" hover:bg-medium-blue bg-base-blue rounded-full px-3 py-2 text-white font-bold w-ful text-xs">
            {children}
        </button>
    );
}

export default PrimaryButton;
