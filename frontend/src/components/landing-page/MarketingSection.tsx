/* eslint-disable react/jsx-key */
import React from "react";
import AnimateSvg from "./AnimateSvg";
import useScrollBreakpoint from "~/hooks/utils/useScrollBreakpoint";

export const MarketingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { ref: chatRef, breakpoint: chatBreakpoint } = useScrollBreakpoint(100);
  const { ref: multiDocRef, breakpoint: multiDocBreakpoint } =
    useScrollBreakpoint();
  const { ref: highlightRef, breakpoint: highlightBreakpoint } =
    useScrollBreakpoint();

  return (
    <>
    <br/>
    <br/>
    <br/>

      <div className="landing-page-gradient-4">
        <div className="item-center mt-10 flex justify-center pb-10 text-center">
          <div className="flex flex-col text-gray-60">
            <button
              onClick={scrollToTop}
              className="mb-4 font-bold text-gray-90"
            >
            </button>
            <div>© ST Engineering Ltd. 2024. All rights reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
};