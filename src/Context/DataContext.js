import { createContext, useContext, useState } from "react";
import { data } from "../Data";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [meetingData, setMeetingData] = useState(data);

  return (
    <DataContext.Provider value={{ meetingData, setMeetingData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
