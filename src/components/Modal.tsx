import React, { useState } from "react";

const Modal = ({
  okButtonRef,
  modalDivRef,
}: {
  okButtonRef: React.RefObject<HTMLButtonElement | null>;
  modalDivRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    console.log("Button clicked");
  };

  return (
    <div
      ref={modalDivRef}
      className="fixed w-[300px] h-[150px] left-1/2 top-1/2 -mt-[190px] -ml-[150px] bg-[rgb(240,240,240)] flex flex-col justify-between border-[1px] border-black"
    >
      {/* Fejléc */}
      <div className="flex justify-between">
        <span className="cursor-default mx-[8px] my-[2px]">Szabó Taddeus</span>
        <button className="w-[25px] h-[25px] hover:bg-[rgb(232,17,35)] hover:text-white">
          X
        </button>
      </div>

      {/* Tartalom */}
      <div className="flex justify-center gap-2 items-center">
        <img src="/info.png" alt="info"></img>
        <span className="text-sm/4 max-w-[70%]">
          <p>Köszöntelek a portfóliómon!</p>
          <p>Görgess az egereddel lefelé és tudj meg rólam többet!</p>
        </span>
      </div>

      {/* OK gomb */}
      <div className="flex justify-end">
        <div className="flex justify-center mx-[16px] my-[10px]">
          <button
            ref={okButtonRef}
            onClick={handleClick}
            className={`ok-button text-sm w-[70px] border-[2px] ${
              isActive
                ? "border-r-gray-400 border-b-gray-400 shadow-inner"
                : "border-t-white border-l-white shadow-xl"
            }`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
