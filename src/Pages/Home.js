import { useState } from "react";
import { useDataContext } from "../Context/DataContext";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const { meetingData } = useDataContext();

  const searchByTitleAndTag =
    search?.length >= 0
      ? meetingData?.meetups?.filter((item) =>
          item?.title?.toLowerCase().includes(search?.toLocaleLowerCase())
        ) ||
        meetingData?.meetups?.filter((item) =>
          item?.eventTags?.every((tag) =>
            tag?.toLocaleLowerCase().includes(search?.toLocaleLowerCase())
          )
        )
      : meetingData;

  const searchByType =
    type?.length >= 0
      ? searchByTitleAndTag?.filter((item) => item?.eventType.includes(type))
      : searchByTitleAndTag;
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between p-8">
        <img
          className="w-[100px] h-[50px]"
          src="https://logos-download.com/wp-content/uploads/2016/10/Meetup_logo.png"
          alt=""
          srcset=""
        />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="search by title and tags"
          className="border border-solid border-black-color px-4 rounded-[1rem]"
        />
      </div>

      <div className="flex justify-between items-center px-8">
        <p className=" font-medium text-3xl">Meetup Events</p>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">Select Event Type</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>
      <ul className="flex gap-8 flex-wrap items-center justify-center">
        {searchByType?.map((item) => (
          <li className=" relative rounded-[1rem] shadow-xl p-4 flex flex-col justify-center items-center">
            <img
              src={item?.eventThumbnail}
              alt="meeting img"
              className="w-[200px] h-[200px] rounded-[1rem]"
            />
            <div className="flex ">
              <p>{item?.eventStartTime}</p>
            </div>
            <p className="font-medium text-2xl">{item?.title}</p>
            <p className=" absolute  bg-white-color  rounded-[0.5rem]">
              {item?.eventType}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
