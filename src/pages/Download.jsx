import React from "react";
import BookBox from "../components/BookBox";


export default function Download(){

return (<>


<div className="h-[85.5vh] w-[100%] bg-zinc-700 m-auto flex justify-center overflow-x-hidden overflow-y-auto">


{/* Download Box */}
<div className="h-[25vw] w-[70%] flex justify-center items-center mt-5">

<div className="w-[40%] h-[90%] bg-slate-400 flex justify-center items-center pb-5">

<BookBox name="Robbin Hood" className="-mt-5"/>

</div>

<div className="w-[60%] h-[90%] bg-blue-400">

<div className="bg-orange-200"><h1 className="text-3xl text-center"><span className="text-xl">written by : </span>Ethan Parker</h1></div>
<div className=""><h1 className="text-2xl text-start mt-4">Description</h1></div>
<div className=""><p className="text-xl text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut tempora ducimus dicta nobis tenetur, eius, tempore ipsam similique consectetur sequi rem rerum provident est illo animi atque culpa beatae.</p></div>


</div>
</div>


</div>


</>);

}