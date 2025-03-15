import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  animationMap_model,
  scrollAnimationDatas_model,
} from "../models/animationModels";
gsap.registerPlugin(ScrollTrigger);

export function scrollAnimationCreater(
  scrollDivRef: React.RefObject<HTMLDivElement | null>,
  animationMap: animationMap_model[],
  scrollAnimationDatas: scrollAnimationDatas_model
) {
  let first = true;
  let sumDuration = 0;

  animationMap.forEach((mapItem) => {
    const element = scrollAnimationDatas[mapItem.name];
    console.log(element.animation);
    gsap.fromTo(
      element.ref.current,
      {
        x: element.animation[0].x,
        y: element.animation[0].y,
        opacity: element.animation[0].opacity,
        display: element.animation[0].display
      },
      {
        scrollTrigger: {
          trigger: scrollDivRef.current,
          start: `top+=${sumDuration}`,
          end: `+=${mapItem.duration}`,
          scrub: true,
          toggleActions: "restart none none none",
          markers: true,
        },
        x: element.animation[1].x,
        y: element.animation[1].y,
        borderRight: element.animation[1].borderRight,
        borderBottom: element.animation[1].borderBottom,
        opacity: element.animation[1].opacity,
        display: element.animation[1].display,
        invalidateOnRefresh: first ? true : false,
      }
    );
    element.animation.shift();
    sumDuration += mapItem.duration;
    if (first) {
      first = false;
    }
  });
}

//     gsap.fromTo(
//       cursorRef.current,
//       {
//         x: cursorPositions[1].x,
//         y: cursorPositions[1].y,
//       },
//       {
//         scrollTrigger: {
//           trigger: scrollDivRef.current,
//           start: `top+=${duration[0]}`,
//           end: `+=${duration[1] - duration[0]}`,
//           scrub: true,
//           toggleActions: "restart none none none",
//           markers: true,
//         },
//       }
//     );

// gsap.fromTo(
//   cursorRef.current,
//   {
//     x: 100,
//     y: 100,
//   },
//   {
//     scrollTrigger: {
//       trigger: scrollDivRef.current,
//       start: `top+=0`,
//       end: `+=500`,
//       scrub: true,
//       toggleActions: "restart none none none",
//       markers: true,
//     },
//     x: 300,
//     y: 300,
//   }
// );
