import "./Sidebar.css";
import { BiMenu, BiLink } from "react-icons/bi";
import { BsTags } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbSpeakerphone } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>{BiMenu}</div>
      <div>{BiLink}</div>
      <div>{BiLink}</div>
      <div>{BiLink}</div>
      <div>{BiLink}</div>
      <div>{BiMenu}</div>
      <div>{BiMenu}</div>
      <div>{BiMenu}</div>
      <div>{BiMenu}</div>
      <div>{TbSpeakerphone}</div>
      <div>{TfiHeadphoneAlt}</div>
      <div>{TfiHeadphoneAlt}</div>
      <div>{TfiHeadphoneAlt}</div>
      <div>{TfiHeadphoneAlt}</div>
      <div>{BsTags}</div>
    </div>
  );
}
