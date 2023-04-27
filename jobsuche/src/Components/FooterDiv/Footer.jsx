import React from "react";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blue-300 rounded-[10px] gap-[8] grid grid-cols-5 m-auto items-start justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-black pb-[1.5rem]">
            <strong>Job</strong> Suche
          </h1>
        </div>
      </div>

      <div className="grid">
        <span className="divTitel text-[18px] font-semibold pb-[1.5rem] text-black">
          Firma
        </span>
        <div className="grid gap-3">
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Über uns
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Merkmale
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Neuigkeiten
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitel text-[18px] font-semibold pb-[1.5rem] text-black">
          Konto
        </span>
        <div className="grid gap-3">
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Hilfecenter
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Feedback
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Kontaktiere uns
          </li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitel text-[18px] font-semibold pb-[1.5rem] text-black">
          Hilfe
        </span>
        <div className="grid gap-3">
          <li className="text-black opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">Demo</li>
          <li className="text-black opacity-[.7] hover:opacity-[1]">
            Karriere
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitel text-[18px] font-semibold pb-[1.5rem] text-black">
          Kontaktinformation
        </span>
        <div className="">
          <small className="text-[14px] text-black">
            gera.konradi@gmail.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            {/* ICONS EINFÜGEN */}
            <AiFillInstagram className="bg-black p-[8px] w-[35px] h-[35px] rounded-full icon text-blueColor" />
            <AiFillInstagram className="bg-black p-[8px] w-[35px] h-[35px] rounded-full icon text-blueColor" />
            <AiFillInstagram className="bg-black p-[8px] w-[35px] h-[35px] rounded-full icon text-blueColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
