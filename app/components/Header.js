import React from "react";

const Header = () => {
  return (
    <div className="  m-4">
       <div className=" text-center">
            <h1 className=" text-xl md:text-3xl font-bold mb-2">
              P.A Knit Composite Ltd.
            </h1>
            <h4 className=" text-xs md:text-xl font-semibold mb-1">
              Jamirdia,Habir Bari,Valuka,Mymensingh
            </h4>
            <h4 className="text-xs md:text-xl font-semibold">
              Hourly DHU Report(At QC table){" "}
            </h4>
          </div>
      {/* <div className=" flex items-center justify-end">
        <div className=" flex items-center justify-center   lg:gap-48">
          <div>
            <h1 className=" text-xl md:text-3xl font-bold mb-2">
              P.A Knit Composite Ltd.
            </h1>
            <h4 className=" text-xs md:text-xl font-semibold mb-1">
              Jamirdia,Habir Bari,Valuka,Mymensingh
            </h4>
            <h4 className="text-xs md:text-xl font-semibold">
              Hourly DHU Report(At QC table){" "}
            </h4>
          </div>
          <div className=" border p-3">
            <h5 className=" whitespace-normal">
              <span className=" inline">DHU% = Ttl defects qty X 100</span>
            </h5>
            <hr className=" ml-20 mr-1 border" />
            <h5 className=" pl-24">Ttl check qty</h5>
          </div>
        </div>
      </div> */}
      {/* <div className=" grid grid-cols-12 border mt-2">
        <span className=" col-span-1 border pl-3">Order No:</span>
        <span className=" col-span-2 border">
          <input type="number" className=" px-3 w-full h-full" />
        </span>
        <span className=" col-span-2 border pl-3">Style Name:</span>
        <span className=" col-span-3 border">
          <input type="name" className=" px-3 w-full h-full" />
        </span>
        <span className=" col-span-1 border pl-3">Color:</span>
        <span className=" col-span-3 border">
          <input type="name" className="px-3 w-full h-full" />
        </span>
      </div>
      <div className=" grid grid-cols-12 border">
        <span className=" col-span-1 border pl-3">Floor No:</span>
        <span className=" col-span-2 border">
          <input type="number" className="px-3 w-full h-full" />
        </span>
        <span className=" col-span-1 border pl-3">Line No:</span>
        <span className=" col-span-2 border">
          <input type="number" className="px-3 w-full h-full" />
        </span>
        <span className=" col-span-2 border pl-3">Table Quality Name:</span>
        <span className=" col-span-4 border">
          <input type="name" className="px-3 w-full h-full" />
        </span>
      </div> */}
    </div>
  );
};

export default Header;
