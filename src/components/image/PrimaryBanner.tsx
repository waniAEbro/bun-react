function PrimaryBanner({
    bannerImage,
    bannerAccent,
    bannerText,
}: {
    bannerImage: string;
    bannerAccent: string;
    bannerText: string;
}): JSX.Element {
    return (
        <>
            <div className="relative w-full mt-12">
                <div className=" bg-light-blue rounded-lg w-full overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden">
                        <img
                            src={bannerAccent}
                            alt="banner accent"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative w-full top-0 left-0 text-center overflow-hidden">
                        <p className="text-white font-extrabold tracking-wider text-12xl">
                            {bannerText}
                        </p>
                    </div>
                    <img
                        src={bannerImage}
                        alt="banner-image"
                        className=" absolute bottom-0 right-0 h-96 object-cover"
                    />
                </div>
            </div>
        </>
    );
}

export default PrimaryBanner;
