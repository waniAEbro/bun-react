import { H1 } from "../typography/H1";

function NumberCard(): JSX.Element {
    return (
        <>
            <div className="ring-1 ring-super-light-pink rounded-lg py-4 px-2 grid grid-cols-3 gap-4">
                <div className="bg-base-pink w-16 h-16 rounded-full flex justify-center items-center justify-self-center self-center">
                    <H1 className="text-white">1</H1>
                </div>
                <div className="col-span-2">
                    <H1>Card Title</H1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque labore odio, accusantium reiciendis asperiores
                        voluptatibus. Aperiam exercitationem deserunt
                        perspiciatis atque culpa obcaecati sit eveniet facilis,
                        repellendus minima blanditiis, neque officia.
                    </p>
                </div>
            </div>
        </>
    );
}

export default NumberCard;
