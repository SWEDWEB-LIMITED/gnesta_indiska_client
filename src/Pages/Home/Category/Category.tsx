const Category = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="text-center text-4xl font-bold mb-10">Kategorier</div>
      <div className="flex flex-wrap items-center gap-6 justify-evenly px-4">
        <div className="relative h-[350px] w-[350px]">
          <img
            className="h-full w-full object-cover"
            src={"https://i.ibb.co/1vQq3ds/Krustader-med-r-kr-ra.jpg"}
            alt=""
          />
          <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl bg-[#FFAA36] p-3 font-semibold">
            FÖRRÄTTER
          </h4>
        </div>
        <div className="relative h-[350px] w-[350px]">
          <img
            className="h-full w-full object-cover"
            src={"https://i.ibb.co/rwMqwhC/1.webp"}
            alt=""
          />
          <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl bg-[#FFAA36] p-3 font-semibold">
            HUVUDRÄTTER
          </h4>
        </div>
        <div className="relative h-[350px] w-[350px]">
          <img
            className="h-full w-full object-cover"
            src={"https://i.ibb.co/PcP1tbZ/Swedish-Semlor-Buns-683x1024.png"}
            alt=""
          />
          <h4 className="absolute left-1/2 -translate-x-1/2 text-center -mt-16 text-3xl bg-[#FFAA36] p-3 font-semibold">
            EFTERRÄTTER
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Category;
