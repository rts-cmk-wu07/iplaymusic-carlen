import CatagoryDropdown from "../comp/Catagorydropdown";

const Catagory = () => {
    // const tempData = {
        
    //     "catagory": [

    //         {
    //             id: 1,
    //             name: "Alternative",
    //         },
    //         {
    //             id: 2,
    //             name: "Dance",
                
    //         },

    //     ],
    //     "innercatagory": [
            
    //         {
    //             id: 1,
    //             name: "pop",
    //             type: "Dance",
            
    //         },
    //         {
    //             id: 2,
    //             name: "piano",
    //             type: "Dance",
            
    //         },
    //         {
    //             id: 3,
    //             name: "Classic",
    //             type: "Alternative",
            
    //         }


    //     ]



    // };

    
    return ( <div className="flex flex-col">
        <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-primary-100 to-primary-200 pb-5">Catagory</h1>
        <CatagoryDropdown title="Alternative" catcolor="bg-primary-100" songname="POP"/>
        <CatagoryDropdown title="Classic" songname="Dance" catcolor="bg-catColor-800"/>
        <CatagoryDropdown title="Classic" songname="Dance" catcolor="bg-gradient-200"/>
        <CatagoryDropdown title="Classic" songname="Dance" catcolor="bg-catColor-700"/>
        <CatagoryDropdown title="Classic" songname="Dance" catcolor="bg-catColor-500"/>
        <CatagoryDropdown title="Classic" songname="Dance" catcolor="bg-catColor-400"/>
        <CatagoryDropdown title="Classic" songname="Dance" catcolor="bg-catColor-300"/>
        <CatagoryDropdown title="Classic" songname="Dance" catcolor="bg-catColor-200"/>
    </div> );
}
 
export default Catagory;