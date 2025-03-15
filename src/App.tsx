import Taskbar from "./components/Taskbar";
import Modal from "./components/Modal";
import Cursor from "./components/Cursor";

import { useRef } from "react";
import Folders from "./components/Folders";
import WindowsPage from "./components/WindowsPage";

function App() {
  const okButtonRef = useRef<HTMLButtonElement>(null);
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const modalDivRef = useRef<HTMLDivElement>(null);
  const windowsButtonRef = useRef<HTMLDivElement>(null);
  const windowsPageRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="w-screen h-[calc(100vh-40px)] fixed bg-[url('/windows_bg.png')] bg-no-repeat">
        <Folders />
        <Cursor
          scrollDivRef={scrollDivRef}
          okButtonRef={okButtonRef}
          modalDivRef={modalDivRef}
          windowsButtonRef={windowsButtonRef}
          windowsPageRef={windowsPageRef}
        />
        <Taskbar windowsButtonRef={windowsButtonRef} />
        <Modal okButtonRef={okButtonRef} modalDivRef={modalDivRef} />
        <WindowsPage windowsPageRef={windowsPageRef}/>
      </div>
      <div className="h-[10000px]" ref={scrollDivRef}></div>
    </>
  );
}

export default App;
