import React from "react";
import simple from "../../assets/simple.png";

function Value() {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        Konto
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Einfachheit
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Frei von Komplexität, Überflüssigkeit & Verwirrung
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Klarheit
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Frei von Verwirrung, Zweifel & Unklarheiten
          </p>
        </div>
        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <img src={simple} alt="" className="w-[70%]" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Leichtigkeit
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Frei von Schwere, Anstrenung & Belastung
          </p>
        </div>
      </div>

      <div className="card mt-[2rem] flex justify-between bg-[#f7edf5] p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">
            Bereit für einen Karrierewechsel?
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Lass uns anfangen
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-blueColor hover:bg-blue-300 border-blueColor">
          Loslegen
        </button>
      </div>
    </div>
  );
}

export default Value;
