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
      <div className="">
        {jsonData.map((data, index) => (
          <div key={index}>
            <p className="text-center text-2xl lg:text-3xl xl:text-4xl mb-10 font-bold">
              {data.category}
            </p>
            <ReceipyCard items={data} keyGenerator={keyGenerator} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="bg-[#ffaa36] font-semibold  py-[3rem] overflow-hidden mt-[6rem]">
        <h1 className="text-4xl font-bold mb-[6rem] text-center">Menylista</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-[5rem]">
          <div className="flex flex-col gap-[5rem] items-center ">
            {dynamicMapData(items_1)}
            {dynamicMapData(items_2)}
            {dynamicMapData(items_3)}
          </div>
          <div className="flex flex-col gap-[5rem] items-center ">
            {dynamicMapData(items_4)}
            <img
              src="logo.png"
              alt="gnesta indiscA"
              className="w-[16rem] h-[16rem]"
            />
            {dynamicMapData(items_5)}
          </div>
          <div className="flex flex-col gap-[5rem] items-center ">
            {dynamicMapData(items_6)}
            {dynamicMapData(items_7)}

            <div className="flex sm:flex md:hidden xl:flex flex-col gap-[5rem] items-center ">
              {dynamicMapData(items_8)}
              {dynamicMapData(items_9)}

              <div className={`mt-[5rem] text-center text-xl `}>
                <p className="font-bold"> Stora Torget 5, 64631 Gnesta</p>
                <p className="font-bold">Telefon: +46 722 44 03 00</p>
                <p className="mt-5">Öppettider:</p>
                <p className="font-bold">
                  Måndag-Fredag 10:30-21:00 (lunchtider 10:30-14:00)
                </p>
                <p className="font-bold">
                  Helger (lördag och söndag) - 12:00-21:00
                </p>
                <p className=" font-bold mt-5">
                  {" "}
                  För avhämtning och beställining:- <br className="sm:block" />{" "}
                  0722 44 03 00
                </p>
              </div>
            </div>
          </div>

          <div className="hidden sm:hidden md:flex xl:hidden md:mt-[-9rem] flex-col gap-[5rem] items-center ">
            {dynamicMapData(items_8)}
            {dynamicMapData(items_9)}
            <div className={`mt-[5rem] text-center text-xl `}>
              <p className="font-bold"> Stora Torget 5, 64631 Gnesta</p>
              <p className="font-bold">Telefon: +46 722 44 03 00</p>
              <p className="mt-5">Öppettider:</p>
              <p className="font-bold">
                Måndag-Fredag 10:30-21:00 (lunchtider 10:30-14:00)
              </p>
              <p className="font-bold">
                Helger (lördag och söndag) - 12:00-21:00
              </p>
              <p className=" font-bold mt-5">
                {" "}
                För avhämtning och beställining:- <br className="sm:block" />{" "}
                0722 44 03 00
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
