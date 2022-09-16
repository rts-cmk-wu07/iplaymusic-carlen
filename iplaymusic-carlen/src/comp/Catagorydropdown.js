/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Disclosure, Transition } from "@headlessui/react";
import CatagorySongBrand from "./sub-comp/Catagorysongbrand";
import IonIcon from "@reacticons/ionicons";
import { useContext } from "react";
import ColorContext from "../context/colorContext";

const CatagoryDropdown = ({ title, songname, catcolor, songtitle }) => {
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
  const colors = useContext(ColorContext)
const styles = {
  title: css`
  color: ${colors.text};
  `,

}

  return (
    <div className="flex flex-col">
      {title ? (
        <Disclosure>
          {({open}) => (
            <>
            <Disclosure.Button className={`${catcolor} flex justify-between items-center text-2xl text-white pb-5 pt-5 `}>
              {title}
              <IonIcon name="ellipsis-horizontal"/>
              </Disclosure.Button>
              <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

          <Disclosure.Panel css={styles.title}>
            
            <CatagorySongBrand songname={songname} songtitle={songtitle} />
          </Disclosure.Panel>
      </Transition>
            </>
            )}
        </Disclosure>
      ) : (
        <span>nothing avalible</span>
      )}
    </div>
  );
};

export default CatagoryDropdown;
