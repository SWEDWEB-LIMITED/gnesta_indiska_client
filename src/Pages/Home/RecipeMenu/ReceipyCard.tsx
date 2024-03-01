import {
  ReceipyCardProps,
  ReceipyCardType,
} from "../../../utils/RecipeMenuType";

export default function ReceipyCard({ items, keyGenerator }: ReceipyCardProps) {
  return (
    <div key={keyGenerator()} className="flex flex-col gap-y-6">
      {items.items.map((data: ReceipyCardType) => (
        <div key={keyGenerator()}>
          <div className="flex">
            <div className="w-[17rem]">
              <p className="text-lg lg:text-2xl">
                {data.serial}. {data.name} -
              </p>
              <p>{data.description} </p>
            </div>
            <p className="text-end text-2xl">{data.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
