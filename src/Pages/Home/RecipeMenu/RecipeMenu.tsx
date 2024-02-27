import items_1 from "../../../../public/items_1.json";
import items_2 from "../../../../public/items_2.json";
import items_3 from "../../../../public/items_3.json";
import items_4 from "../../../../public/items_4.json";
import items_5 from "../../../../public/items_5.json";
import items_6 from "../../../../public/items_6.json";
import items_7 from "../../../../public/items_7.json";
import items_8 from "../../../../public/items_8.json";
import items_9 from "../../../../public/items_9.json";

import ReceipyCard from "./ReceipyCard";
import { ItemsType } from "../../../utils/RecipeMenuType";

export default function RecipeMenu() {
  const keyGenerator = (() => {
    let key = 0;
    return (): number => (key += 1);
  })();

  const dynamicMapData = (jsonData: ItemsType[]) => {
    return (
      <div>
        {jsonData.map((data, index) => (
          <div key={index}>
            <h2 className="text-4xl mb-10 font-bold">{data.category}</h2>
            <ReceipyCard items={data} keyGenerator={keyGenerator} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="bg-[#ffaa36] font-bold mt-[-3rem] py-[3rem]">
        <h1 className="text-4xl font-bold mb-[6rem] text-center">Menu List</h1>

        <div className="flex w-full justify-center flex-wrap gap-[48px]">
          {/* 1 */}
          <div className="flex flex-col gap-[5rem]">
            {dynamicMapData(items_1)}
            {dynamicMapData(items_2)}
            {dynamicMapData(items_3)}
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-[5rem] items-center">
            {dynamicMapData(items_4)}
            <img
              src="logo.png"
              alt="gnesta indiscA"
              className="w-[16rem] h-[16rem]"
            />
            {dynamicMapData(items_5)}
          </div>

          {/* 3 */}
          <div className="flex flex-col gap-[5rem]">
            {dynamicMapData(items_6)}
            {dynamicMapData(items_7)}
            <div className="flex flex-col gap-[5rem] sm:flex md:hidden lg:hidden xl:hidden 2xl:flex">
              {dynamicMapData(items_8)}
              {dynamicMapData(items_9)}
            </div>
          </div>

          <div className="flex flex-col gap-[5rem] sm:hidden md:flex lg:flex xl:flex 2xl:hidden">
            {dynamicMapData(items_8)}
            {dynamicMapData(items_9)}
          </div>
        </div>

        <div className="mt-[5rem] text-center text-xl">
          <p> Stora Torget 5, 64631 Gnesta</p>
          <p className="font-bold">Telefon: 0158 106 68</p>
          <p className="mt-5">Öppettider:</p>
          <p className="font-bold">Mân-fre 11:00-21:00</p>
          <p className="font-bold"> Lör-sön 13:00-21:00</p>
          <p className=" font-bold mt-5"> För avhämtning och beställining:- 0158 106 68</p>
        </div>
      </div>
    </>
  );
}
