import { Disclosure } from "@headlessui/react";

const CatagorySongBrand = ({songname}) => {
   
    return ( <div>
   <Disclosure>
    <Disclosure.Button>
        {songname}
    </Disclosure.Button>
    </Disclosure>     

    </div> );
}

export default CatagorySongBrand;