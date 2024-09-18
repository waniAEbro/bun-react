import { useEffect, useState } from "react";
import PrimaryButton from "./button/PrimaryButton";
import { debounce } from "lodash";

function Navbar(): JSX.Element {
    let [isMenuOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 768) {
                setMenuIsOpen(false);
            }
        });

        return () => {
            window.removeEventListener("resize", () => {
                if (window.innerWidth < 768) {
                    setMenuIsOpen(false);
                }
            });
        };
    }, []);

    const toggleMenu = debounce(() => {
        setMenuIsOpen(!isMenuOpen);
    }, 100);

    return (
        <>
            <nav className="sticky top-0 bg-white shadow-sm z-50">
                <div className="container mx-auto p-4 md:grid md:grid-cols-3 place-content-between hidden">
                    <div>
                        <img src="logo.png" alt="brand logo" className="h-8" />
                    </div>
                    <div className="justify-self-center">
                        <ul className="flex gap-4">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="justify-self-end">
                        <PrimaryButton>click me</PrimaryButton>
                    </div>
                </div>
                <div
                    className={`flex justify-between container mx-auto p-4 lg:hidden`}
                >
                    <img src="logo.png" alt="brand logo" className="h-8" />
                    <button onClick={toggleMenu}>click me</button>
                </div>
                <div
                    className={`absolute w-full h-screen backdrop-blur-md md:hidden flex flex-col justify-center transition-transform transform duration-500 ${
                        isMenuOpen ? "translate-y-0" : "translate-y-full"
                    }`}
                ></div>
            </nav>
        </>
    );
}

export default Navbar;
