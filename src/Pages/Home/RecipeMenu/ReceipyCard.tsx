import {
  ReceipyCardProps,
  ReceipyCardType,
} from "../../../utils/RecipeMenuType";

export default function ReceipyCard({
  category,
  items,
  keyGenerator,
}: ReceipyCardProps) {
  return (
    <div key={keyGenerator()} className="flex flex-col gap-y-6">
      {items.items.map((data: ReceipyCardType) => (
        <div key={keyGenerator()}>
          <div className="flex">
            <div className="w-[16rem]">
              <p className="sm:text-lg font-semibold lg:text-xl">
                {data.serial}. {data.name} -
              </p>
              <p className="font-medium">{data.description} </p>
            </div>

            {category === "BANGLADESHISKT MAT" ||
            category === "TYPISKA RÄTTER" ? (
              <div className="grid grid-cols-2 gap-6 place-items-end place-content-start  w-[7rem]">
                <p>{data.specialPrice}</p>
                <p>{data.extraSpecialPrice}</p>
              </div>
            ) : (
              <p className="text-end text-xl">{data.price}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
