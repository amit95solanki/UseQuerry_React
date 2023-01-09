import { useQuery } from "react-query";
import axios from "axios";

const  RQfatchingdata =()=>{
  return axios.get("http://localhost:3002/superheroes")
 }


export const useSuperHerosData = (onSuccess,onError)=>{
     return useQuery(
        "super-hero", 
        RQfatchingdata,
        {
          // cacheTime:5000,
          // staleTime:0,
          // refetchOnMount:true,
          // refetchOnWindowFocus:true,
          // refetchInterval:2000,
          // refetchIntervalInBackground:true,
          // enabled:false,
          onSuccess,
          onError,


          // select:(data)=>{
          //     const superHeroName= data.data.map((hero)=>hero.hero)
          // },



          }
        )
}