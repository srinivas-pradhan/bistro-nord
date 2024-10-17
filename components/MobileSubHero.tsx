'use client';
import LargeButton from "@/components/LargeButton";


const MobileSubHero = () => {
    return (

        <div className="
            flex
            flex-col
            justify-center
            items-center
            lg:hidden
            mt-9
        ">
            <div className="
                flex-col
                font-playfair-display-regular
                md:text-5xl
                text-3xl
            ">
                Best food for your taste
            </div>
            <div>
                <ul className="
                    flex 
                    flex-row 
                    gap-8
                    mt-5
                    md:mt-10

                ">
                    <li>
                        <LargeButton
                            onClick={() => {}}
                            label="Book A Table"
                            fill={true}
                        />
                    </li>
                    <li>
                        <LargeButton
                            onClick={() => {}}
                            label="Explore Menu"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );

    <div>
        SUB HERO
    </div>
}

export default MobileSubHero;
