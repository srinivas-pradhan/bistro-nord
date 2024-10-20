'use client';

const Events = () => {
    return (
        <div className="
            w-full
            lg:h-[600px]
            h-[700px]
            flex
            flex-col
            items-stretch
            justify-start
        ">
            <div className="
                flex
                lg:w-[35%]
                md:w-[45%]
                w-[90%]
                h-20
                mt-20
                pl-16
                font-playfair-display-regular
                text-4xl
            ">
                We also offer unique services for your events
            </div>
            <div className="
                flex
                items-stretch
                justify-start
                pt-36
                pl-12
            ">
                <ul className=" 
                    flex-row
                    grid
                    grid-cols-2
                    lg:grid-cols-4
                    gap-20
                    pl-20
                    md:pl-20
                    pr-12                    
                ">
                    <li className="
                        h-48
                        w-32
                        md:w-36
                        lg:w-64
                        lg:h-80
                        xl:h-96
                        flex
                        justify-center 
                        items-center
                        rounded-2xl
                        border-solid
                        border-2
                        border-olive-green
                        cursor-pointer
                        transition 
                        ease-in-out 
                        delay-15
                        hover:-translate-y-1 
                        hover:scale-110
                        duration-300
                    ">
                        <ul className="
                            space-y-6
                        ">
                            <li className="
                                rounded-2xl
                                -mt-5
                            ">
                                <img 
                                    src="images/Events/catering.svg" 
                                    alt="Girl in a jacket" 
                                    >
                                </img>
                            </li>
                            <li>b</li>
                            <li>c</li>
                        </ul>
                    </li>
                    <li className="
                        h-48
                        w-32
                        md:w-36
                        lg:w-64
                        lg:h-80
                        xl:h-96
                        flex
                        justify-center 
                        items-center
                        rounded-2xl
                        cursor-pointer
                        transition 
                        ease-in-out 
                        delay-15
                        hover:-translate-y-1 
                        hover:scale-110
                        duration-300
                    ">
                        2
                    </li>
                    <li className="
                        h-48
                        w-32
                        md:w-36
                        lg:w-64
                        lg:h-80
                        xl:h-96
                        flex
                        justify-center 
                        items-center
                        rounded-2xl
                        cursor-pointer
                        transition 
                        ease-in-out 
                        delay-15
                        hover:-translate-y-1 
                        hover:scale-110
                        duration-300
                    ">
                        3
                    </li>
                    <li className="
                        h-48
                        w-32
                        md:w-36
                        lg:w-64
                        lg:h-80
                        xl:h-96
                        flex
                        justify-center 
                        items-center
                        rounded-2xl
                        cursor-pointer
                        transition 
                        ease-in-out 
                        delay-15
                        hover:-translate-y-1 
                        hover:scale-110
                        duration-300
                    ">
                        4
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Events;
