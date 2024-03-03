import Card from "./Card";

export default function WeekendLunchItems() {
  const weekendMenuList = [
    {
      weekName: "MÅNDAG",
      menuList: [
        {
          name: "Chicken Tikka Butter Masala",
          des: "Grillade Kyckling Filéer Med Mald Mandel Cashewnötter Och Smör i Krämig Tomatsås",
          price: "125",
        },
        {
          name: "Paneer Palak",
          des: "Handgjord Ost, Vitlök, Ingefära, Bladspenat Tillagat Med Krämig Currysås",
          price: "120",
        },
        {
          name: "Kyckling Balti (Medium Stark)",
          des: "Med Färsk Koriander Ingefära Och Stekt Paprika Tillagat i Baltisås Med Mango",
          price: "139",
        },
        {
          name: "Lamm Korai (Mycket Stark)",
          des: "Med Ost Färsk Koriander Vitlök Stekt Paprika Och Tillagas i Currysås",
          price: "135",
        },
        {
          name: "Chicken Tikka Sizler",
          des: "Grillade Kyckling Filéer, Serveras På En Rykande Het Järnorem Med Strimlade Grönsaker Och Krämig Tomatsås",
          price: "115",
        },
        {
          name: "Mix Vegetable",
          des: "Säsongens Färska Grönsaker, Ost, Vitlök, Ingefära, Koriander Med Currysås",
          price: "115",
        },
        {
          name: "Chana Masala",
          des: "Gula Linser Med Kummin, Lök, Vitlök, Grön Chili, Koriander Med Masalasås",
          price: "125",
        },
      ],
    },
    {
      weekName: "TISDAG",
      menuList: [
        {
          name: "Chicken Tikka Butter Masala",
          des: "Grillade Kyckling Filéer Med Mald Mandel Cashewnötter Och Smör i Krämig Tomatsås",
          price: "125",
        },
        {
          name: "Lamm Balti (Medium Stark)",
          des: "Med Färsk Koriander, Ingefära Och Stekt Paprika Tillagas i Baltisås",
          price: "139",
        },
        {
          name: "Kyckling Korai (Mycket Stark)",
          des: "Med Färsk Koriander, Vitlök, Stekt Paprika Och Tillagas i Currysås",
          price: "125",
        },
        {
          name: "Paneer Palak",
          des: "Handgjord Ost, Vitlök, Ingefära, Bladspenat Tillagas Med Krämig Currysås",
          price: "125",
        },
        {
          name: "Chicken Tikka Sizier",
          des: "Grillade Kyckling Filéer, Serveras På En Rykande Het Järnorem Med Strimlade Grönsaker Och Krämig Tomatsås",
          price: "135",
        },
        {
          name: "Spenat Vaji",
          des: "Spenat Med Vitlök, Lök",
          price: "115",
        },
        {
          name: "Kyckling Jhal Frezy (Mycket Stark)",
          des: "Tillagas Med Yoghurt, Paprika, Koriander Och Syrlig",
          price: "125",
        },
      ],
    },
    {
      weekName: "ONSDAG",
      menuList: [
        {
          name: "Chicken Tikka Butter Masala",
          des: "Grillade Kyckling Filéer Med Mald Mandel Cashewnötter Och Smör i Krämig Tomatsås",
          price: "125",
        },
        {
          name: "Lamm Rezala",
          des: "Tillagad Med Grön Chili, Mild Russin Och Pistagenötter i Krämig Cashewnötsås",
          price: "139",
        },
        {
          name: "Kyckling Madras Curry (Stark)",
          des: "Tillagas Med Kokos, Senafrö, Chili Pickles",
          price: "125",
        },
        {
          name: "Paneer Palak",
          des: "Handgjord Ost, Vitlök, Ingefära, Bladspenat Tillagat Med Krämig Currysås",
          price: "125",
        },
        {
          name: "Mix Kyckling Sizlar",
          des: "Grillade Kycklingfiléer Serveras På En Rykande Het Järnform Med Strimlade Grönsaker Och Krämig Tomatsås",
          price: "135",
        },
        {
          name: "Dal Makhani",
          des: "Tillagad Med Olika Typer Av Linser, Grädde, Koriander i Currysås",
          price: "120",
        },
        {
          name: "Kyckling Spenat",
          des: "Spenat Med Cashewnötter, Currysås",
          price: "120",
        },
      ],
    },
    {
      weekName: "TORSDAG",
      menuList: [
        {
          name: "Chicken Tikka Butter Masala",
          des: "Grillade Kyckling Filéer Med Mald Mandel Cashewnötter Och Smor i Krämig Tomatsås",
          price: "125",
        },
        {
          name: "Paneer Butter Masala",
          des: "Ost Med Mald Mandel, Cashewnötter Och Kokos i Krämig Tomatås",
          price: "130",
        },
        {
          name: "Bangla Chicken Bhuna",
          des: "Kycklingfilé Med Färsk Koriander, Tärnad LÖk Tillagas i Currysås",
          price: "120",
        },
        {
          name: "Dal Spenat",
          des: "Spenat, Blandade Linser Och Kokos i Currysås",
          price: "115",
        },
        {
          name: "Chicken Tikka Sizlar",
          des: "Grillade Kyckling Filéer Serveras På En Rykande Het Järnforem Med Strimlade Grönsaker Och Krämig Tomatsås",
          price: "135",
        },
        {
          name: "Lamm Sambal Masala (Medium Stark)",
          des: "Tillagad Med Sydindish Sambalkryddat Tomatsås",
          price: "120",
        },
        {
          name: "Kurma Chicken",
          des: "Kycklingfilé Med Cashewnötsås",
          price: "125",
        },
      ],
    },
    {
      weekName: "FREDAG",
      menuList: [
        {
          name: "Chicken Tikka Butter Masala",
          des: "Grillade Kyckling Filéer Med Mald Mandel Cashewnötter Och Smör i Krämig Tomatsås",
          price: "125",
        },
        {
          name: "Paneer Palak",
          des: "Handgjord Ost, Vitlök, Ingefära, Bladspenat Spenat Tillagas Med Krämig Currysås",
          price: "120",
        },
        {
          name: "Kyckling Balti (Medium Stark)",
          des: "Med Färsk Koriander Ingefära Och Stekt Paprika Tillagas I Baltisås",
          price: "139",
        },
        {
          name: "Lamm Korai (Mycket Stark)",
          des: "Med Färsk Koriander Vitlök, Stekt Paprika Och Tillagas i Currysås",
          price: "115",
        },
        {
          name: "Mix Vegetable",
          des: "Säsong Färska Grönsaker, Ost. Vitlök, Ingefära, Koriander Med Currysås",
          price: "135",
        },
        {
          name: "Mix Sizier (Kyckling)",
          des: "Grillade Kycklingfilé Serveras På En Rykande Het Järnform Med Strimlade Grönsaker Och Krämig Tomatsås",
          price: "125",
        },
        {
          name: "Kock Specialmat",
          price: "125",
        },
      ],
    },
    
   
  ];
  return (
    <>
      <div className="mt-[8rem] w-full flex flex-col justify-center items-center">

      <p className="text-3xl text-center lg:text-5xl font-bold">Dagens Lunch</p>
        
      <section className="w-full flex font-bold flex-col gap-[5px] text-center mt-[3rem] mb-[5rem]">
        <p className="text-lg lg:text-xl">
          Mån-Fre: <span className="text-red-600">Kl. 10.30 - 14.00</span>
        </p>
        <p className="text-lg lg:text-xl mt-[-5px]">
          Ingår: Ris, Sallad, kaffe a saft
        </p>
      </section>


        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
          {weekendMenuList.map((data, index) => (
            <div key={index}>
              <Card data={data} />
            </div>
          ))}
<section className="w-[25rem] text-center">
<p className="text-3xl text-center lg:text-3xl font-bold">Onsdag & Fredag</p>
<p className="text-lg font-bold">Vindaloo (kyckling eller lamm) 125-139 kr 🌶️🌶️🌶️🌶️🌶️</p>
<p className="text-sm">Tillagad med extra stark tomat & currysås och koriander</p>
      
</section>
        </div>




      </div>
    </>
  );
}
