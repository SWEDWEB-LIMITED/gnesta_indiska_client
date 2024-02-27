import { ItemsType } from "../../utils/RecipeMenuType";
import Cart from "./Cart";

export default function GridForCarts({ data }: { data: ItemsType[] }) {
  return (
    <>
      {data.map((data, index) => {
        return (
          <div key={index}>
            <h1 className="text-4xl my-10 font-bold text-center">
              {data.category}
            </h1>
            <div className="flex flex-wrap w-full justify-center items-center gap-7">
              {data.items.map((item, index) => {
                return (
                  <div key={index + 2}>
                    <Cart item={item} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
