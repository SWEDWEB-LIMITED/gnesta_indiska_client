import { ReceipyCardType } from "../../utils/RecipeMenuType";

export default function Cart({ item }: { item: ReceipyCardType }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl h-[28rem] max-h-[28rem]">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title w-[30rem] grid grid-cols-2">
          {item.name}
          <div className="badge badge-secondary">SEK {item.price}</div>
        </h2>
        <p>{item.description}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
}
