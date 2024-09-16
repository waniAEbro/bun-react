function SecondaryButton({ children }: { children: string }): JSX.Element {
    return (
        <button className=" rounded-full px-3 py-2 ring-1 hover:ring-medium-blue ring-base-blue font-bold hover:text-slate-500 text-xs">
            {children}
        </button>
    );
}

export default SecondaryButton;
