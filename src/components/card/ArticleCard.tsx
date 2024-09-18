import PrimaryButton from "../button/PrimaryButton";
import Thumbnail from "../image/Thumbnail";
import { H4 } from "../typography/H4";

function ArticleCard(): JSX.Element {
    return (
        <>
            <div className="grid">
                <Thumbnail />
                <H4 className="mt-12">Article Title</H4>
                <p className=" font-light line-clamp-4 my-12">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Totam harum porro at magnam! Nobis perferendis tenetur,
                    omnis enim facere sint. Totam eveniet explicabo, cupiditate
                    itaque reiciendis debitis libero? Corrupti, cumque.
                </p>
                <PrimaryButton>Read More</PrimaryButton>
            </div>
        </>
    );
}

export default ArticleCard;
