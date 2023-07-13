import { useParams } from "react-router-dom";
import { useDataContext } from "../Context/DataContext";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export const MeetingDetails = () => {
  const { meetingData } = useDataContext();
  const { meetId } = useParams();
  const findMeet = meetingData?.meetups?.find((item) => item?.id === meetId);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between p-8">
        <img
          className="w-[100px] h-[50px]"
          src="https://logos-download.com/wp-content/uploads/2016/10/Meetup_logo.png"
          alt=""
          srcset=""
        />
        <input
          type="text"
          placeholder="search by title and tags"
          className="border border-solid border-black-color px-4 rounded-[1rem]"
        />
      </div>
      <div className="flex justify-center gap-16">
        <div className=" flex flex-col gap-4 basis-[40%]">
          <div className="flex flex-col gap-4">
            <p className="text-3xl font-bold">{findMeet?.title}</p>
            <div>
              <p>Hosted by:</p>
              <p className="text-2xl font-medium">{findMeet?.hostedBy}</p>
            </div>
            <img
              src={findMeet?.eventThumbnail}
              alt="event img"
              className="w-[500px] h-[500px] rounded-[1rem]"
            />
            <div className="flex flex-col gap-4">
              <p className="text-2xl font-medium">Details:</p>
              <p>{findMeet?.eventDescription}</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-medium mb-4">Addtional Information:</p>
            <p>
              <strong>Dress Code</strong>:{" "}
              {findMeet?.additionalInformation?.dressCode}
            </p>
            <p>
              <strong>Age Restriction</strong>:{" "}
              {findMeet?.additionalInformation?.ageRestrictions}
            </p>
          </div>
          <div>
            <p>Event Tags:</p>
            <ul className="flex gap-4 mt-4">
              {findMeet?.eventTags?.map((tag) => (
                <p className="bg-primary-color text-white-color p-2 rounded-[0.5rem]">
                  {tag}
                </p>
              ))}
            </ul>
          </div>
        </div>

        <div className=" flex flex-col gap-4 basis-[20%] ">
          <div className="flex items-center gap-4">
            <AccessTimeOutlinedIcon />
            <div>
              <p>{findMeet?.eventStartTime}</p>
              <p>{findMeet?.eventEndTime}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <LocationOnOutlinedIcon />
            <div>
              <p>{findMeet?.location}</p>
              <p>{findMeet?.address}</p>
            </div>
          </div>
          <p> ₹ {findMeet?.price}</p>
          <div className="flex flex-col gap-4">
            <p>Speakers:</p>
            <ul className="flex gap-16 justify-center">
              {findMeet?.speakers.map((item) => (
                <li className="flex flex-col justify-center items-center">
                  <img
                    src={item?.image}
                    className="w-[80px] h-[80px] rounded-[50%]"
                  />
                  <p>{item?.name}</p>
                  <p>{item?.designation}</p>
                </li>
              ))}
            </ul>
            <button className="bg-primary-color mx-auto w-[200px] mt-8 text-white-color p-2 rounded-[0.5rem]">
              RSPV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
