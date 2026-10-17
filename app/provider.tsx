"use client";
import React, { useEffect,useState } from "react";
import axios from "axios";
import { UserDetailsContext } from "@/context/UserDetailsContext";

function Provider({ children }: { children: React.ReactNode }) {
    const [userDetail, setUserDetail] = useState<any>();


    useEffect(() => {
        createNewUser();
    }, []);
        
  const createNewUser = async () => {
    const result = await axios.post('/api/users');
    console.log(result.data);
    setUserDetail(result.data);
  };
  return (
    <UserDetailsContext.Provider value={{userDetail, setUserDetail}}>
  <div>{children}</div>
  </UserDetailsContext.Provider>)
}

export default Provider;
