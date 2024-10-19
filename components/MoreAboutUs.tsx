'use client';

const MoreAboutUs = () => {
    return (  
        <div className="
            w-full
            h-[700px]
            bg-dark-white
            text-black
            flex
            flex-wrap
            items-center
            justify-center
        ">
            <ul className="
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-20
                m-12
            ">
                <li className="
                    h-3/4
                    w-full
                    text-black

                ">
                    <div className="
                        box 
                        border-2 #Remove this
                        w-full
                        h-[400px]
                        align-top
                        rounded-2xl
                    ">
                        <div className="
                            w-[85%]
                            h-[85%]
                            bg-white
                            border-black
                            rounded-2xl
                            mb-10
                            mr-10
                            -z-10              
                        ">
                            ITEMS1
                        </div>
                        <div className="
                            -mt-44
                            ml-[35%]
                            box 
                            border-2
                            rounded-2xl
                            h-[50%]
                        ">
                            ITEMS2
                        </div>
                    </div>
                </li>
                <li className="
                    h-[400px]
                    w-[500px]
                    pt-4
                    pl-8
                ">
                    <div className="
                        hidden
                        lg:flex
                        h-[100%]
                        w-[90%]
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
