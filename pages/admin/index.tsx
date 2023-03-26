import React from "react";

const index = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              관리자 페이지
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              실시간으로 주문 데이터 받아와서 아래 뿌려주꼬에용 뿌뿌
            </p>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    주문자명
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    주문메뉴
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Option
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                    수락
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">홍다궁</td>
                  <td className="px-4 py-3">아이스 아메리카노</td>
                  <td className="px-4 py-3">연하게염</td>
                  <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                  <td className="w-10 text-center">
                    <div>수락하기</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">함세윤</td>
                  <td className="px-4 py-3">아이스 아메리카노</td>
                  <td className="px-4 py-3">투샷이염</td>
                  <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                  <td className="w-10 text-center">
                    <div>수락하기</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">오수민</td>
                  <td className="px-4 py-3">아보카토</td>
                  <td className="px-4 py-3">아이스크림 마니영</td>
                  <td className="px-4 py-3 text-lg text-gray-900">Free</td>
                  <td className="w-10 text-center">
                    <div>수락하기</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-yellow-500 inline-flex items-center md:mb-2 lg:mb-0">
              몰루 이거 쓸건가영
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
              Total : 3,000
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
