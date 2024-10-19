'use client';
import Button from "@/components/Button";

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
                gap-10
                m-12
            ">
                <li className="
                    h-[90%]
                    w-full
                    text-black

                ">
                    <div className="
                        box 
                        w-full
                        h-[400px]
                        align-top
                        rounded-2xl
                    ">
                        <div className="
                            w-[85%]
                            h-[85%]
                            bg-white
                            rounded-2xl
                            mb-10
                            mr-10
                            -z-10
                            bg-aboutus-image           
                        ">

                        </div>
                        <div className="
                            -mt-44
                            ml-[10%]
                            md:ml-[35%]
                            box 
                            rounded-2xl
                            flex
                            justify-center
                            items-center
                            h-[65%]
                            bg-dark-chalk
                            text-white
                        ">

                            <ul className="
                                space-y-4 
                                ml-3 
                                mr-3">
                                <li className="
                                    font-dm-sans-medium
                                    lg:text-xl
                                    text-lg
                                    flex
                                    pb-2
                                ">
                                    Come and Visit Us
                                </li>
                                <li className="
                                ">
                                    <ul className="flex flex-row space-x-8">
                                        <li>
                                            <svg className="flex items-center mt-1" width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.25 3.75C2.25 2.92157 2.92157 2.25 3.75 2.25H6.20943C6.53225 2.25 6.81886 2.45657 6.92094 2.76283L8.0443 6.13291C8.16233 6.48699 8.00203 6.87398 7.6682 7.0409L5.97525 7.88737C6.80194 9.72091 8.27909 11.1981 10.1126 12.0247L10.9591 10.3318C11.126 9.99796 11.513 9.83767 11.8671 9.9557L15.2372 11.0791C15.5434 11.1811 15.75 11.4677 15.75 11.7906V14.25C15.75 15.0784 15.0784 15.75 14.25 15.75H13.5C7.2868 15.75 2.25 10.7132 2.25 4.5V3.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </li>
                                        <li className="font-dm-sans-medium text-lg">(416) 555 - 0107</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="flex flex-row space-x-8">
                                        <li>
                                        <svg className="flex items-center mt-1" width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.25 6L8.16795 9.9453C8.6718 10.2812 9.3282 10.2812 9.83205 9.9453L15.75 6M3.75 14.25H14.25C15.0784 14.25 15.75 13.5784 15.75 12.75V5.25C15.75 4.42157 15.0784 3.75 14.25 3.75H3.75C2.92157 3.75 2.25 4.42157 2.25 5.25V12.75C2.25 13.5784 2.92157 14.25 3.75 14.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        </li>
                                        <li className="font-dm-sans-medium text-lg">yummy@bistonord.ca</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="flex flex-row space-x-8">
                                        <li>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>

                                        </li>
                                        <li className="font-dm-sans-medium text-lg">80 Wellington St, Ottawa, ON K1P 5K9</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="
                    h-[400px]
                    w-[520px]
                    pt-4
                    pl-8
                ">
                    <div className="
                        hidden
                        lg:flex
                        flex-row
                        h-[100%]
                        w-[90%]

                    ">
                        <ul className="space-y-6">
                            <li className="
                                text-black
                                font-playfair-display-regular
                                text-5xl
                            ">
                                We provide healthy food for your family.
                            </li>
                            <li className="
                                text-black
                                font-playfair-display-regular
                                text-lg
                                text-wrap
                                justify-start
                            ">
                                Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
                            </li>
                            <li className="
                                text-black
                                font-playfair-display-regular
                                text-base
                                text-wrap
                                justify-start
                            ">
                                At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
                            </li>      
                            <li className="
                                flex pr-14 text-lg font-playfair-display-regular
                            ">
                                <Button 
                                    onClick={() => {}}
                                    label="More About Us"
                                />    
                            </li>                  
                        </ul>
                    </div>
                </li>
                
            </ul>
        </div>
    );
}
 
export default MoreAboutUs;
