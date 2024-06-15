import { KIMM_bold } from "@/fonts";
import { IconAI } from "@/icons";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="h-[457px] flex flex-col min-w-[1440px]">
        <h1 className="text-display/xl flex flex-col items-center mt-[166px]">
          <span className="flex items-end">
            <span className={`${KIMM_bold.className} text-primary`}>부농 메이커스</span>로
          </span>

          <span className="flex mt-[4px]">
            <span>1분만에 만드는 손쉬운 마케팅</span>
            <IconAI />
          </span>

          <span className="text-primary mt-[10px]">바로 시작해 보세요!</span>
        </h1>
      </section>

      <section className="h-[500px] bg-primary flex flex-col items-center min-w-[1440px]">
        <h2 className="text-white text-display/s mt-[40px]">내 농장 리스트</h2>
        <p className="text-white text-body/l/500 pt-[8px]">농장은 최대 3개까지 관리 가능합니다</p>

        <ul className="flex gap-10 mt-[40px]">
          <Link
            className="w-[240px] h-[240px] bg-white rounded-3xl flex justify-center items-center"
            href="/app/branding/1"
          >
            <svg
              width="158"
              height="181"
              viewBox="0 0 158 181"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M73.9102 1.98177C64.5947 1.98177 54.5488 0.928861 45.4341 3.02077C34.0952 5.62313 25.7413 13.5501 19.921 23.3004C13.5583 33.9594 8.75283 45.7157 5.79841 57.7796C2.98801 69.2553 0.392268 83.2649 4.7979 94.76C7.91199 102.885 11.333 105.611 20.883 106.381C28.1575 106.968 35.5648 106.443 42.7404 105.111C60.8866 101.745 86.7155 92.7991 103.002 84.1007C115.929 77.1963 129.692 67.893 127.668 51.7765C126.511 42.555 121.421 34.232 115.085 27.6103C98.4427 10.2177 76.6269 10.2937 54.5156 10.2937"
                stroke="#089E83"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path d="M44.8184 25.5312V42.8478" stroke="#089E83" stroke-width="3" stroke-linecap="round" />
              <path d="M68.3689 22.7617V49.0829" stroke="#089E83" stroke-width="3" stroke-linecap="round" />
              <path
                d="M37.1991 57.3933C41.499 70.2931 63.2883 74.2548 74.5644 71.9392C85.9564 69.5997 99.814 58.9206 105.08 48.3887"
                stroke="#089E83"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M33.0862 106.363C33.0862 130.526 31.9875 154.695 31.9875 178.875"
                stroke="#089E83"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M89.1183 93.1797C116.892 99.3516 134.305 126.789 148.141 149.273C153.144 157.402 154.296 168.573 156.137 177.777"
                stroke="#089E83"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </Link>

          <Link
            className="w-[240px] h-[240px] bg-white rounded-3xl flex justify-center items-center"
            href="/app/branding/preference"
          >
            <svg width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M40.3333 53.6673H0.333328V40.334H40.3333V0.333984H53.6667V40.334H93.6667V53.6673H53.6667V93.6673H40.3333V53.6673Z"
                fill="#D1D5DB"
              />
            </svg>
          </Link>
        </ul>
      </section>
    </>
  );
}
