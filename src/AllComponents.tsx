import PrimaryButton from "./components/button/PrimaryButton";
import SecondaryButton from "./components/button/SecondaryButton";
import PrimaryBanner from "./components/image/PrimaryBanner";
import Hero from "./components/image/Hero";
import { H1 } from "./components/typography/H1";
import { H2 } from "./components/typography/H2";
import { H3 } from "./components/typography/H3";
import { H4 } from "./components/typography/H4";
import { H5 } from "./components/typography/H5";
import { H6 } from "./components/typography/H6";
import SecondaryBanner from "./components/image/SecondaryBanner";
import { ArrowButton } from "./components/button/ArrowButton";
import BubbleBanner from "./components/image/BubbleBanner";
import Thumbnail from "./components/image/Thumbnail";
import ProfileCard from "./components/card/ProfileCard";
import ArticleCard from "./components/card/ArticleCard";
import NumberCard from "./components/card/NumberCard";
import Navbar from "./components/navbar";

function AllComponents(): JSX.Element {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 overflow-hidden">
                <section className="my-4">
                    <H1>Buttons</H1>
                    <div className="grid grid-cols-3 my-4 gap-2">
                        <PrimaryButton>Hubungi Kami</PrimaryButton>
                        <SecondaryButton>Hubungi Kami</SecondaryButton>
                        <ArrowButton link="#" />
                    </div>
                </section>
                <section className="my-4">
                    <H1>Typography</H1>
                    <div className="flex flex-col my-4 gap-2">
                        <H1>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.
                        </H1>
                        <H2>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit.
                        </H2>
                        <H3>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </H3>
                        <H4>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </H4>
                        <H5>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit.
                        </H5>
                        <H6>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </H6>
                        <p className=" font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <p className=" font-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <p className=" text-xs font-light"></p>
                    </div>
                </section>
                <section className="my-4 flex flex-col gap-4">
                    <H1>Image</H1>
                    <Hero src="https://picsum.photos/seed/picsum/1080/720" />
                    <PrimaryBanner
                        bannerAccent="banner-accent.png"
                        bannerImage="banner-image.png"
                        bannerText="SERPIHAN"
                    />
                    <SecondaryBanner
                        title="Tentang Kami"
                        content="lorem"
                        link="#"
                        accent="secondary-banner-accent.png"
                        image="secondary-banner-image.png"
                    />
                    <BubbleBanner />
                    <Thumbnail />
                </section>
                <section className="my-4 flex flex-col gap-4">
                    <H1>Card</H1>
                    <div className=" grid lg:grid-cols-5 md:grid-cols-3 gap-4">
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                        <ProfileCard />
                    </div>
                    <div className=" grid lg:grid-cols-3 gap-4">
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                    <div className=" grid lg:grid-cols-3 gap-4">
                        <NumberCard />
                        <NumberCard />
                        <NumberCard />
                    </div>
                </section>
            </div>
        </>
    );
}

export default AllComponents;
