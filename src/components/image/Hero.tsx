function Hero({ src }: { src: string }): JSX.Element {
    return (
        <>
            <div className=" relative w-full h-80">
                <img
                    src={src}
                    alt="Hero"
                    className=" object-cover w-full h-full"
                />
                <div className=" absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#072A3F] to-transparent"></div>
            </div>
        </>
    );
}

export default Hero;
