import { useEffect, useState, createContext } from "react";
import axios, { AxiosResponse } from "axios";
//import api from './services/api';

export const oAuth: any = createContext({});

export default function Context({ children }: any) {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getuser", { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setUserObject(res.data);
          console.log("data", res.data);
        }
      })
      .catch((e) => console.log("Catch", e))
      .finally(function () {
        console.log("finally");
      });
    /*api.get("http://localhost:3000/getuser")
        .then( (r)=> {
            console.log("data",r.data) 
            setUserObject(r.data);
        })
        .catch( e => console.log("Catch", e))
        .finally( function(){ console.log("finally")});*/
  }, []);
  return <oAuth.Provider value={userObject}>{children}</oAuth.Provider>;
}