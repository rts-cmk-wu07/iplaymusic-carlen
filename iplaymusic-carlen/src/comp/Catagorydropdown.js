import { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { Disclosure } from "@headlessui/react";
import CatagorySongBrand from "./sub-comp/Catagorysongbrand";
const CatagoryDropdown = ({ title, songname, catcolor }) => {
  // let topics = songname.map((topic) => topic.type);
  // //console.log(topics)
  // let sortedTopics = topics.filter((element, index) => {
  //   return topics.indexOf(element) === index;
  // });

  // title.map((item) => (
  //   <Disclosure key={item.id}>
  //     <Disclosure.Button>{item.name}</Disclosure.Button>
  //     <Disclosure.Panel>
  //       {sortedTopics.includes(item.name) ? (
  //         <CatagorySongBrand songname={songname} />
  //       ) : (
  //         <span>nothing exist</span>
  //       )}
  //     </Disclosure.Panel>
  //   </Disclosure>
  // ))
  return (
    <div className="flex flex-col">
      {title ? (
        <Disclosure>
          <Disclosure.Button className={`${catcolor} text-2xl text-white justify-start`}>{title}</Disclosure.Button>
          <Disclosure.Panel>
            <CatagorySongBrand songname={songname} />
          </Disclosure.Panel>
        </Disclosure>
      ) : (
        <span>nothing avalible</span>
      )}
    </div>
  );
};

export default CatagoryDropdown;
