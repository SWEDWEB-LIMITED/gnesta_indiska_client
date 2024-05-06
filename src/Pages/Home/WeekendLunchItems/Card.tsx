export default function Card({ data }: { data: any }) {
  const bottomMenuList = [
    {
      name: "Plain Naan",
      price: "20",
      description: "",
    },
    {
      name: "Vitlök Naan",
      price: "25",
      description: "",
    },
    {
      name: "Peshawari Naan",
      price: "45",
      description: "Mandel, Kokos, Cashewnötter",
    },
  ];

  return (
    <div className="font-bold w-[25rem] h-full flex flex-col items-center bg-[#ffaa36] border-b-[35px] border-[#731A12]">
      <p className="uppercase text-xl lg:text-2xl bg-[#FF9304] text-center w-full py-[20px] border-b-[5px] border-[#761C17]">
        {data.weekName}
      </p>

      {/* map menu list */}
      {data.menuList.map((data: any, index: any) => (
        <div
          className="flex w-full items-center flex-col gap-y-6 my-12"
          key={index}
        >
          <div className="flex w-full justify-center px-[3rem]">
            <div className="w-[17rem]">
              <p className="text-xl lg:text-2xl">{data.name}</p>
              <p className="font-normal">{data.des}</p>
            </div>
            <p className="text-end text-2xl">{data.price}</p>
          </div>
        </div>
      ))}

      <section
        className={`w-[20rem] my-8 ${
          data.weekName === "Onsdag & Fredag" ? "hidden" : ""
        }`}
      >
        <p className="text-3xl lg:text-2xl text-start mb-6">Bröd</p>

        {bottomMenuList.map((data, index) => (
          <BottomCardComponent
            key={index}
            description={data.description}
            name={data.name}
            price={data.price}
          />
        ))}
      </section>

      <section
        className={`w-[20rem] my-8 ${
          data.weekName === "Onsdag & Fredag" ? "hidden" : ""
        }`}
      >
        <p className="text-3xl lg:text-2xl text-start mb-6">Dricka</p>

        <div className="flex flex-col gap-y-6 my-2">
          <div>
            <div className="flex justify-between w-full">
              <div className="w-fit text-lg">
                <p className="">Pepsi / Coca-Cola / Sprite / Fanta</p>
                <p>Loca Citron / Natural Vatten</p>
              </div>
              <p className="text-end text-lg w-[4rem]">20</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const BottomCardComponent = ({
  name,
  price,
  description,
}: {
  name: string;
  price: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-y-6 my-2">
      <div>
        <div className="flex justify-between w-full">
          <div className="w-fit">
            <p className="text-lg">{name}</p>
            <p className="font-normal text-sm">{description}</p>
          </div>
          <p className="text-end text-lg w-[4rem]">{price}</p>
        </div>
      </div>
    </div>
  );
};
