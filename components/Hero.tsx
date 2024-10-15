'use client';

const Hero = () => {
    return (
        <div className="
            flex
            items-center 
            justify-center
            h-[375px] 
            lg:h-[750px] 
            md:w-full 
            aspect-w-16
            aspect-h-9
            -z-10
        ">
            <div className="
                bg-hero-image
                bg-no-repeat

            ">
                <div className="
                hidden 
                lg:flex
                lg:flex-col
                w-[475px]
                text-7xl
                mt-[40%]
                lg:mt-[15%]
                ml-[20%]
                lg:ml-[40%]
                items-center
                justify-center
                font-playfair-display-regular
                ">
                    <p>Best food for</p>
                    <p>your taste</p>
                </div>
                <div className="
                hidden 
                lg:flex
                lg:flex-col
                w-[550px]
                text-xl
                mt-14
                ml-[38%]
                items-center
                justify-center
                font-dm-sans-medium
                ">
                    <p>Discover delectable cuisine and unforgettable moments</p>
                    <p>in our welcoming, culinary haven.</p>
                </div>
            </div>
            
        </div>
    );
}
 
export default Hero;

