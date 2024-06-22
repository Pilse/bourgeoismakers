"use client";

import { Oval } from "react-loader-spinner";

export const LoadingModal = () => {
  return (
    <div className="absolute top-0 left-0 bg-[#F0F0F0]/85 w-full h-full flex justify-center items-center flex-col">
      <Oval
        visible={true}
        height="48"
        strokeWidth="6"
        width="48"
        color="#089E83"
        secondaryColor="#089e8333"
      />
    </div>
  );
};
