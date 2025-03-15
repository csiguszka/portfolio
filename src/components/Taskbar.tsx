import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Taskbar = ({
  windowsButtonRef,
}: {
  windowsButtonRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return (
    <div
      className="fixed bottom-0 h-[48px] w-full flex"
      style={{ backgroundColor: "rgb(30, 50, 62)" }}
    >
      {/* Windows ikon */}
      <div
        ref={windowsButtonRef}
        className="w-[48px] h-[48px] flex justify-center items-center text-white hover:text-blue-400 hover:bg-[rgb(57,77,85)]"
      >
        <FontAwesomeIcon icon={faWindows} size="lg" className="-m-1" />
      </div>

      {/* Kereső */}
      <div className="flex w-[288px] hover:bg-[rgb(63,63,63)] bg-[rgb(51,51,51)] border-[1px] border-solid border-gray-700 hover:border-gray-300 hover:border-[1.5px] cursor-text">
        <div className="w-[40px] flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="fa-flip-horizontal m-auto text-[rgb(220,220,220)]"
          />
        </div>
        <div className="flex items-center text-[rgb(220,220,220)]">
          <span>Írjon ide a kereséshez</span>
        </div>
      </div>

      {/* Task ikon */}
      <div>
        <img src="/task.png" alt="task" />
      </div>
    </div>
  );
};

export default Taskbar;
