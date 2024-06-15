import Link from "next/link";

export default function Page() {
  return (
    <div className="h-full flex">
      <aside className="w-[260px] h-full bg-[#F9FAFB]">
        <ul className="flex flex-col gap-4">
          <Link href="/app/branding/1" className="text-heading/s">
            농장 브랜딩
          </Link>
          <Link href="/app/contents/new" className="text-heading/s">
            콘텐츠 생성
          </Link>
        </ul>
      </aside>

      <div className="flex flex-col bg-[#F3F4F6]">
        <section className="w-[860px] flex flex-col overflow-y-auto">
          <div className="grow flex flex-col gap-3 p-4">
            <div className="bg-white w-3/4 self-start p-3">
              <h2 className="text-body/l/500 font-bold">건강한 단맛의 비밀, 신선한 고구마 판매 시작!</h2>
              <p className="whitespace-pre-wrap">
                {`건강한 단맛의 비밀, 신선한 고구마 판매 시작!
안녕하세요, 여러분! 😊
오늘은 여러분께 건강하고 맛있는 간식, 고구마를 소개해드리려고 합니다. 저희는 신선한 고구마를 직접 재배하고 판매하고 있습니다. 
자연 그대로의 달콤함을 지닌 고구마는 누구나 좋아하는 인기 간식이죠!

🍠 고구마의 매력 포인트 🍠
1. 자연이 준 달콤함 설탕 없이도 충분히 달콤한 고구마는 자연 그대로의 맛을 자랑합니다. 다이어트를 하시는 분들도 부담 없이 즐기실 수 있습니다.
2. 다양한 건강 효과 고구마는 식이섬유가 풍부해 소화를 돕고, 비타민과 미네랄이 가득해 건강에도 좋습니다. 특히 비타민 A는 눈 건강에 도움을 줍니다.
3. 남녀노소 누구나 즐길 수 있는 간식 아이들 간식부터 어른들의 간식까지! 온 가족이 함께 즐길 수 있는 고구마입니다.
4. 간편한 조리법 찌고, 굽고, 튀기고! 간편하게 조리할 수 있어 바쁜 현대인에게 딱 맞는 건강 간식입니다.

🥇 저희 고구마의 특별함 🥇
1. 신선함 보장 저희 고구마는 직접 재배하여 수확 후 바로 배송해드립니다. 신선하고 맛있는 고구마를 집에서 편하게 받아보세요.
2. 엄격한 품질 관리 철저한 품질 관리를 통해 최고의 상태로 배송해드립니다. 크기, 색상, 당도 모두 만족스러운 고구마를 제공해드리겠습니다.
3. 다양한 패키지 구성 소량 구매부터 대량 구매까지 다양한 패키지를 준비했습니다. 가족 단위로, 또는 개인적으로도 필요한 양만큼 구매하실 수 있습니다.

📦 주문 방법 및 배송 안내 📦
1. 주문 방법 아래 링크를 통해 간편하게 주문하세요! 고구마 주문하기
2. 배송 안내
전국 어디든 신속하고 안전하게 배송해드립니다.
신선한 상태를 유지하기 위해 최적의 포장으로 보내드립니다.

🎉 지금 주문하고 혜택을 누리세요! 🎉
첫 구매 고객 10% 할인!
지금 첫 주문하시는 고객님께는 10% 할인 혜택을 드립니다. 건강하고 맛있는 고구마를 더욱 저렴하게 만나보세요!
고객 후기 이벤트
구매 후기를 남겨주시면 추첨을 통해 소정의 선물을 드립니다!
건강한 단맛의 비밀, 고구마와 함께 행복한 시간을 누려보세요. 많은 관심과 사랑 부탁드립니다! 😊
#고구마 #고구마판매 #신선한고구마#건강간식 #자연간식 #다이어트간식 #건강식품 #비타민가득 #홈쿡 #아이간식 #어른간식 
#신선한배송 #직접재배 #고구마효능 #고구마요리 #간편요리 #달콤한고구마 #홈메이드간식 #건강한먹거리`}
              </p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#7DEFA4] to-[#00BEE8] p-[2px] mx-[40px] rounded-[99px] min-h-[56px] my-[40px]">
          <input type="text" className="w-full h-full rounded-[99px] px-4" />
        </div>
      </div>

      <aside className="w-[320px] h-full bg-white">
        <div className="flex flex-col p-4 border-b border-[#E5E7EB]">
          <Link
            href="/app/contents/new"
            className="bg-primary h-[40px] text-white flex items-center justify-center"
          >
            새 콘텐츠 만들기
          </Link>
        </div>

        <ul className="flex flex-col gap-4 p-4">
          <span>콘텐츠 생성 내역</span>
          <Link href="/app/contents/1" className="hover:bg-[#F3F4F6] h-[54px] flex flex-col justify-center">
            <span className="text-heading/s">건강한 단맛의 비밀, 신선한 고구마</span>
            <span className="text-body/xs/400 text-[#6B7280]">딸기 / 인스타그램</span>
          </Link>
        </ul>
      </aside>
    </div>
  );
}
