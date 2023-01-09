import React from 'react'
import { useQuery } from 'react-query';
import axios from "axios";

const fetchSuperHeroes = () =>{

    return axios.get("http://localhost:3002/superheroes")
}

const fetchFriends =() => {

    return axios.get("http://localhost:3002/friends")
}




export const ParallelQueriespage = () => {

    const { data: superHeroes } = useQuery('super-heroes', fetchSuperHeroes)
    const { data: friends } = useQuery('friends', fetchFriends)

    console.log(superHeroes, friends)

  return (
    <div>ParallelQueriespage</div>
  )
}
