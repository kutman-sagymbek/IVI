import React, {useEffect} from "react";
import "./Main.scss";
import PromoSlider from "./PromoSlider/promoSlider";
import Slider from "./Slider/Slider";

function Main() {


    return (
        <main>
            <PromoSlider/>
            <div className="container">
                <Slider/>
            </div>
        </main>
    )
}

export default Main;