'use client';

const Customers = () => {
    return (
        <div className="
            w-full
            h-[550px]
            flex
            flex-col
            items-center
            justify-start
            gap-24
        ">
            <div className="
                font-playfair-display-regular
                md:text-4xl
                text-3xl
                pt-20
            ">
                What Our Customers Say
            </div>
            <div className="
                grid
                lg:grid-cols-3
                md:grid-cols-2
                grid-col-1
                gap-20
                space-y-10
            ">
                <ul className="flex md:flex-row flex-col gap-16">
                    <li className="

                    ">
                        1
                    </li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Customers;
