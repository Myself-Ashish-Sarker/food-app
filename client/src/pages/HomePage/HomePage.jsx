import Banner from "./banner";
import Card1 from "./Card1";
import ImageCollction from "./ImageCollction";
import ReservationBox from "./ReservationBox";
import SectionOne from "./SectionOne";
import ShowcaseMenu from "./ShowcaseMenu";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Card1 />
            <ImageCollction />
            <SectionOne />
            <ShowcaseMenu />
            <ReservationBox />
        </div>
    );
};

export default HomePage