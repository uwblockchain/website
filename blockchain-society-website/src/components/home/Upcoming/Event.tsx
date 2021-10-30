import { FaRegClock, FaMapPin } from "react-icons/fa";

interface eventInfo {
  title: string;
  type: string;
  time: string;
  month: string;
  day: string;
  location: string;
}

function Event({ title, type, time, month, day, location }: any) {
  return (
    <div className="flex mb-4">
      <div className="h-24 w-16 bg-black text-white flex flex-col justify-center items-center">
        <span className="">{month}</span>
        <span className="">{day}</span>
      </div>
      <div className="w-full h-24 bg-gray-100 flex flex-col justify-center">
        <span className="text-red-600 font-light pl-4">{type}</span>
        <span className="font-semibold pl-4">{title}</span>
        <div className="pl-4 flex">
          <FaRegClock className="relative top-1"/>
          <span className="mx-2">{time}</span>
          <FaMapPin className="relative top-1"/>
          <span className="mx-2">{location}</span>
        </div>
      </div>
    </div>
  );
}

export default Event;
