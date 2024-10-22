'use client';

const Delivery = () => {
    return (
        <div className="
            flex
            flex-row
            w-full
            h-[550px]
            lg:h-[600px]
            bg-dark-white
        ">
            <div className="
                flex
                items-center
                justify-center
                -ml-10
                md:-ml-32
                lg:-ml-4
                mr-8
                md:pl-12
                gap-20
                lg:mt-0
                mt-28
            ">
                <ul className="
                    flex 
                    gap-4 
                    ml-52
                ">
                    <li className="
                        hidden
                        lg:flex 
                        flex-row
                        rounded-2xl
                        h-96
                        w-72
                    ">
                        <img className=""
                                src="images/Delivery/chef.svg" 
                                alt="Chef" 
                        >
                        </img>
                    </li>
                    <li className="mt-3">
                        <div className="
                            hidden
                            md:flex 
                            rounded-2xl
                            h-60
                            w-44
                        ">
                            <img className=""
                                src="images/Delivery/curry.svg" 
                                alt="Catering" 
                            >
                            </img>
                        </div>
                        <div className="
                            hidden
                            lg:flex 
                            rounded-2xl
                            h-32
                            w-44
                        ">
                            <img className=""
                                src="images/Delivery/kebab.svg" 
                                alt="Catering" 
                            >
                            </img>
                        </div>
                    </li>
                </ul>
                <div className="space-y-8">
                    <div className="
                        -mt-36
                        lg:mt-0
                        -ml-44
                        md:-ml-3
                        lg:ml-0
                        font-playfair-display-regular
                        xl:text-4xl
                        lg:text-3xl
                        text-4xl
                        mr-0
                        md:mr-8
                    ">
                        Fastest Food Delivery in City
                    </div>
                    <div className="
                        hidden
                        xl:flex
                        mt-0
                        ml-0
                        font-dm-sans-medium
                        text-base
                        mr-10

                    ">
                        Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. 
                    </div>
                    <div className="
                        -mt-36
                        lg:mt-0
                        -ml-44
                        md:-ml-3
                        lg:ml-0
                        font-dm-sans-medium
                        text-2xl
                        md:text-base
                        space-y-6
                        ">
                        <div className="mt-36 lg:mt-0">
                            <ul className="flex flex-row gap-10">
                                <li>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="30" height="30" rx="15" fill="#AD343E"/>
                                        <rect width="15.07" height="15.07" transform="translate(7 7.00015)" fill="#AD343E"/>
                                        <path d="M14.535 12.0235V14.5352L16.4188 16.4189M20.1863 14.5352C20.1863 17.6563 17.6561 20.1864 14.535 20.1864C11.4139 20.1864 8.88379 17.6563 8.88379 14.5352C8.88379 11.4141 11.4139 8.88391 14.535 8.88391C17.6561 8.88391 20.1863 11.4141 20.1863 14.5352Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </li>
                                <li className="lg:mt-1 mt-0">
                                    Delivery within 30 minutes
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-row gap-10">
                                <li>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="30" height="30" rx="15" fill="#AD343E"/>
                                        <rect width="15.07" height="15.07" transform="translate(7 7.00015)" fill="#AD343E"/>
                                        <path d="M12.6513 15.791L16.4188 12.0235M12.9653 12.3375H12.9716M16.1049 15.477H16.1112M18.9305 20.1864V10.1397C18.9305 9.44617 18.3682 8.88391 17.6746 8.88391H11.3955C10.7019 8.88391 10.1396 9.44617 10.1396 10.1397V20.1864L12.3374 18.9306L14.5351 20.1864L16.7328 18.9306L18.9305 20.1864ZM13.2792 12.3375C13.2792 12.5108 13.1387 12.6514 12.9653 12.6514C12.7919 12.6514 12.6513 12.5108 12.6513 12.3375C12.6513 12.1641 12.7919 12.0235 12.9653 12.0235C13.1387 12.0235 13.2792 12.1641 13.2792 12.3375ZM16.4188 15.477C16.4188 15.6504 16.2783 15.791 16.1049 15.791C15.9315 15.791 15.7909 15.6504 15.7909 15.477C15.7909 15.3036 15.9315 15.1631 16.1049 15.1631C16.2783 15.1631 16.4188 15.3036 16.4188 15.477Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </li>
                                <li className="lg:mt-1 mt-0">
                                    Best Offer & Prices
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-row gap-10">
                                <li>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="30" height="30" rx="15" fill="#AD343E"/>
                                        <rect width="15.07" height="15.07" transform="translate(7 7.00012)" fill="#AD343E"/>
                                        <path d="M8.88379 8.88385H10.1396L10.3908 10.1397M11.3955 15.163H17.6746L20.1863 10.1397H10.3908M11.3955 15.163L10.3908 10.1397M11.3955 15.163L9.95571 16.6028C9.56014 16.9983 9.8403 17.6747 10.3997 17.6747H17.6746M17.6746 17.6747C16.981 17.6747 16.4188 18.2369 16.4188 18.9305C16.4188 19.6241 16.981 20.1863 17.6746 20.1863C18.3682 20.1863 18.9305 19.6241 18.9305 18.9305C18.9305 18.2369 18.3682 17.6747 17.6746 17.6747ZM12.6513 18.9305C12.6513 19.6241 12.089 20.1863 11.3955 20.1863C10.7019 20.1863 10.1396 19.6241 10.1396 18.9305C10.1396 18.2369 10.7019 17.6747 11.3955 17.6747C12.089 17.6747 12.6513 18.2369 12.6513 18.9305Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                </li>
                                <li className="lg:mt-1 mt-0">
                                    Online Services Available
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}
 
export default Delivery;
