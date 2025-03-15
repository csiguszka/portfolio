import React, { useRef } from "react";
import { MousePointer2 } from "lucide-react";
import {
  animationMap_model,
  animtaion_model,
  scrollAnimationDatas_model,
} from "../models/animationModels";
import { scrollAnimationCreater } from "../helpers/scrollAnimationCreater";

function CursorWithScrollAnimation({
  scrollDivRef,
  okButtonRef,
  modalDivRef,
  windowsButtonRef,
  windowsPageRef,
}: {
  scrollDivRef: React.RefObject<HTMLDivElement | null>;
  okButtonRef: React.RefObject<HTMLButtonElement | null>;
  modalDivRef: React.RefObject<HTMLDivElement | null>;
  windowsButtonRef: React.RefObject<HTMLDivElement | null>;
  windowsPageRef: React.RefObject<HTMLDivElement | null>;
}) {
  const cursorRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      !okButtonRef.current ||
      !scrollDivRef.current ||
      !modalDivRef.current ||
      !cursorRef.current ||
      !windowsButtonRef.current || 
      !windowsPageRef.current
    ) {
      return;
    }

    console.log("betöltöttem.");

    const okButtonPos = okButtonRef?.current?.getBoundingClientRect();
    const windowsButtonPos = windowsButtonRef?.current?.getBoundingClientRect();

    const animationMap: animationMap_model[] = [
      { name: "cursor", duration: 1000 },
      { name: "okButton", duration: 200 },
      { name: "modal", duration: 200 },
      { name: "cursor", duration: 1000 },
      { name: "windowsButton", duration: 200},
      { name: "windowsPage", duration: 200},
      { name: "cursor", duration: 0},
    ];

    const cursorAnimations: animtaion_model[] = [
      { x: 0, y: 0 },
      {
        x: okButtonPos?.x + okButtonPos?.width / 2,
        y: okButtonPos?.y + okButtonPos?.height / 2,
      },
      {
        x: windowsButtonPos?.x + windowsButtonPos?.width / 2,
        y: windowsButtonPos?.y + windowsButtonPos?.height / 2,
      },
      {x: -100, y: -100}
    ];
    const okButtonAnimations: animtaion_model[] = [
      {},
      { borderBottom: 0.5, borderRight: 0.5 },
    ];
    const modalAnimations: animtaion_model[] = [{ opacity: 1 }, { opacity: 0 }];
    const windowsButtonAnimation: animtaion_model[] = [{ opacity: 1 }, { opacity: 1 }];
    const windowsPageAnimation: animtaion_model[] = [{ display: "none" }, { display: "block" }];

    const scrollAnimationDatas: scrollAnimationDatas_model = {
      cursor: {
        ref: cursorRef,
        animation: cursorAnimations,
      },
      okButton: {
        ref: okButtonRef,
        animation: okButtonAnimations,
      },
      modal: {
        ref: modalDivRef,
        animation: modalAnimations,
      },
      windowsButton: {
        ref: windowsButtonRef,
        animation: windowsButtonAnimation
      },
      windowsPage: {
        ref: windowsPageRef,
        animation: windowsPageAnimation
      }
    };

    scrollAnimationCreater(scrollDivRef, animationMap, scrollAnimationDatas);
  }, [okButtonRef, scrollDivRef, modalDivRef]);

  return (
    <div>
      <div ref={cursorRef} className="fixed z-10 pointer-events-none">
        <MousePointer2 size={26} color="black" fill="white" />
      </div>
    </div>
  );
}

export default CursorWithScrollAnimation;
