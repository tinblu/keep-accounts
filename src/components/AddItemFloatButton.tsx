import React from "react";
import { Icon } from "./Icon";

export const AddItemFloatButton: React.FC = () => {
  return (
    <button p-4px w-56px h-56px  rounded="50%" b-none text-white 
      fixed bottom-16px right-16px flex justify-center items-center bg-white>
      <svg style={{ fill: 'red', width: '11.2em', height: '11.2em', color:'#accbee'}}>
         <Icon name="add" className="w-48px h-48px" />
      </svg>
    </button>
  )
}