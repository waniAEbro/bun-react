function BubbleBanner(): JSX.Element {
    return (
        <>
            <div className="md:w-72 md:ml-10 w-9/12 mx-auto h-72 bg-light-blue rounded-lg relative">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
                    <img src="bubble-banner-accent.png" alt="banner accent" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
                    <img
                        src="bubble-banner-image.png"
                        alt="banner image"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="py-2 px-3 backdrop-blur-sm absolute top-16 left-0 transform -translate-x-10 ring-white ring-2 rounded-lg bg-gradient-to-r from-super-light-pink/30 via-transparent to-super-light-pink/50 text-center w-36">
                    <p className="text-xs font-light">
                        Kami siap membantu anda!
                    </p>
                </div>
                <div className="py-2 px-3 backdrop-blur-sm absolute bottom-16 right-0 transform translate-x-10 ring-white ring-2 rounded-lg bg-gradient-to-r from-super-light-pink/30 via-transparent to-super-light-pink/50 text-center w-36">
                    <p className="text-xs font-light">
                        Ada pertanyaan? hubungi kami!
                    </p>
                </div>
            </div>
        </>
    );
}

export default BubbleBanner;
