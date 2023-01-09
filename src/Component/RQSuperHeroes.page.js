// import { useQuery } from "react-query";
// import axios from "axios";
import { useSuperHerosData } from "./hooks/useSuperHeroesData";
import { Link } from "react-router-dom";

// const  RQfatchingdata =()=>{
//     return axios.get("http://localhost:30superheros/")
//    }02/

export default function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log(`api success after  data fetching`, data);
  };
  const onError = (error) => {
    console.log(`api encounter before  data fetching`, error);
  };
  // refech
  const { isLoading, data, isError, error, isFetching } = useSuperHerosData(
    onSuccess,
    onError
  );

  // console.log("data for super hero", data?.data);

  const heros = data?.data;

  //   useQuery(
  //           "super-hero",
  //           RQfatchingdata,
  //           {
  //             // cacheTime:5000,
  //             // staleTime:0,
  //             // refetchOnMount:true,
  //             // refetchOnWindowFocus:true,
  //             // refetchInterval:2000,
  //             // refetchIntervalInBackground:true,
  //             // enabled:false,
  //             onSuccess,
  //             onError,

  //             // select:(data)=>{
  //             //     const superHeroName= data.data.map((hero)=>hero.hero)
  //             // },

  //             }
  //           );

  //   console.log( {isLoading ,isFetching})

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>React Querry Fatching Data</h2>

      {/* <button onClick={refetch}>Fetch Hero</button> */}
      <hr />

      {/* {
                data?.data.map(hero => {
                    return <div key={hero.id}><Link to={`superheropagea/${hero.id}`}>{hero.hero}</Link> </div>
                })
            } */}

      {heros?.map((hero) => {
        return (
          <div key={hero?.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}
    </>
  );
}
