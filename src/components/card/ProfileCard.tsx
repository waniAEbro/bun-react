import { H5 } from "../typography/H5";

function ProfileCard(): JSX.Element {
    return (
        <>
            <div className=" relative w-full mt-16 pt-20 pb-8 bg-medium-orange rounded-lg flex flex-col justify-center items-center text-center">
                <div className=" rounded-full w-32 h-32 overflow-hidden absolute -top-16 left-1/2 transform -translate-x-1/2">
                    <img
                        src="profile-card.jpg"
                        alt="profile image"
                        className=" object-cover w-full h-full"
                    />
                </div>
                <H5>Ridwan Ridlo Nugroho</H5>
                <p className=" font-light text-xs">Direktur</p>
            </div>
        </>
    );
}

export default ProfileCard;
