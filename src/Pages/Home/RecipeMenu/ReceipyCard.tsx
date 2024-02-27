import { ReceipyCardProps, ReceipyCardType } from "./RecipeMenuType";

export default function ReceipyCard({ items, keyGenerator }: ReceipyCardProps) {
  return (
    <div key={keyGenerator()} className="flex flex-col gap-y-4">
      {items.items.map((data: ReceipyCardType) => (
        <div key={keyGenerator()}>
          <div className="flex flex-row text-sm">
            <div className="w-[25rem]">
              <p className="text-lg">
                {data.serial}. {data.name} -
              </p>
              <p>{data.description} </p>
            </div>
            <p className="text-end">{data.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
