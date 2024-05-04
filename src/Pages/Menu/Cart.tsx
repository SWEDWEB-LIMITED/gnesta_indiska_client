import { ReceipyCardType } from "../../utils/RecipeMenuType";

export default function Cart({ item }: { item: ReceipyCardType }) {
  return (
    <div className="card   shadow-xl bg-[#ffaa36] h-[11rem]">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title ">{item.name}</h2>
          <div className="badge badge-neutral  p-4">{item.price}</div>
        </div>

        <p>{item.description}</p>
      </div>
    </div>
  );
}
