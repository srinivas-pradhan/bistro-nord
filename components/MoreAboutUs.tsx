'use client';

const MoreAboutUs = () => {
    return (  
        <div className="
            w-full
            h-[700px]
            bg-dark-white
            text-black
            flex
            items-center
            justify-center
        ">
            <ul className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-20
                p-12
            ">
                <li className="
                    h-[500px]
                    w-full
                    bg-black
                    text-white

                ">
                    <div className="">
                        ITEMS1
                    </div>
                </li>
                <li className="
                    h-[450px]
                    w-[500px]
                    pt-16
                    pl-8
                ">
                    <div className="
                        h-[100%]
                        w-full                    
                        bg-black
                        text-white
                    ">
                        ITEMS1
                    </div>
                </li>
            </ul>
        </div>
    );
}
 
export default MoreAboutUs;
