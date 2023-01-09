import { IoArrowBackOutline, IoArrowForwardOutline, IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";

export type DirectionIconProps ={
  direction?: string
} ;

export const DirectionIcon: React.FC<DirectionIconProps> = props => {
  switch(props.direction) {
    case "left": return <IoArrowBackOutline />
    case "right": return <IoArrowForwardOutline />
    case "top": return <IoArrowUpOutline />
    case "bottom": return <IoArrowDownOutline />
    default: return null
  };
};