import { Disclosure, Transition } from "@headlessui/react";
import IonIcon from "@reacticons/ionicons";
import Playbutton from "./Playbutton";

const CatagorySongBrand = ({ songname, songtitle }) => {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between mb-3 mt-3 w-full">
              <span>{songname}</span>
              <IonIcon
                name="chevron-forward-outline"
                className={`${
                  open
                    ? "rotate-90 transform transition-transform"
                    : "transform transition-transform"
                } `}
              />
            </Disclosure.Button>
            <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

            <Disclosure.Panel className="flex gap-2 items-center">
              <Playbutton />
              <span>{songtitle}</span>
            </Disclosure.Panel>
      </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default CatagorySongBrand;
