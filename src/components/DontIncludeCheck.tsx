"use client";
import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import ConfirmDelete from "./ConfirmDelete";

function DontIncludeCheck({checkFunc,unCheckFunc}:{checkFunc:()=>void;unCheckFunc:()=>void}) {
    const [isChecked, setIsChecked] = useState(false)
  return (
    <div className="text-red-700 text-lg ">
      {!isChecked ? <ConfirmDelete
      toConfirm={<Checkbox id="not"
       checked={isChecked}
        onChange={(e) => e.stopPropagation()}
      />}
            dialogTitle="Confirm"
            dialogDescription="Are you sure you dont't want to include this Section?"
            dialogAction="Yes"
            dialogCancel="No"
            actionFunc={()=>{
                setIsChecked(true)
                checkFunc();
            }}
          /> : <Checkbox id="not"
          checked={isChecked}
           onClick={(e) => {
            e.stopPropagation()
            setIsChecked(false);
            unCheckFunc();
           }}
         />}
      <label htmlFor="not">
        {" "}Don't include this information in your resume. 
      </label>
    </div>
  );
}

export default DontIncludeCheck;


