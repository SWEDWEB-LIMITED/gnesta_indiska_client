import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./style.css";
import GridForCarts from "./GridForCarts";
import items_1 from "../../../public/items_1.json";
import items_2 from "../../../public/items_2.json";
import items_3 from "../../../public/items_3.json";
import items_4 from "../../../public/items_4.json";
import items_5 from "../../../public/items_5.json";
import items_6 from "../../../public/items_6.json";
import items_7 from "../../../public/items_7.json";
import items_8 from "../../../public/items_8.json";
import items_9 from "../../../public/items_9.json";

export default function Menu({
  defaultItemsNumber,
}: {
  defaultItemsNumber?: number;
}) {
  return (
    <div className="overflow-hidden">
      <div className="bg h-screen flex w-full justify-center items-center text-white text-center">
        <div className="p-[5rem] w-full bg-black bg-opacity-60">
          <p className="text-8xl">Beställ Mat</p>
          <p className="text-4xl mt-4">Vill du prova en rätt?</p>
        </div>
      </div>

      <div className="w-full px-[2rem] my-[5rem]">
        <Tabs defaultIndex={defaultItemsNumber || 0}>
          <TabList className={"font-bold"}>
            <Tab>FÖRRÄTTER</Tab>
            <Tab>MILD OCH KRÄMIG</Tab>
            <Tab>TANDOORI SIZLAR</Tab>
            <Tab>TYPISKA RÄTTER</Tab>
            <Tab>BANGLADESHISKT MAT</Tab>
            <Tab>VEGETARISKT</Tab>
            <Tab>BRÖD</Tab>
            <Tab>TILLBEHÖR</Tab>
            <Tab>DESSERT</Tab>
          </TabList>
          <TabPanel>
            <GridForCarts data={items_1} />
          </TabPanel>
          <TabPanel>
            <GridForCarts data={items_2} />
          </TabPanel>
          <TabPanel>
            <GridForCarts data={items_3} />
          </TabPanel>
          <TabPanel>
            <GridForCarts data={items_4} />
          </TabPanel>
          <TabPanel>
            <GridForCarts data={items_5} />
          </TabPanel>
          <TabPanel>
            <GridForCarts data={items_6} />
          </TabPanel>
          <TabPanel>
            <GridForCarts data={items_7} />
          </TabPanel>
          <TabPanel>
            <GridForCarts data={items_8} />
          </TabPanel>
          <TabPanel>
            <GridForCarts data={items_9} />
          </TabPanel>
        </Tabs>
      </div>

      {/* <Cart/> */}
    </div>
  );
}
