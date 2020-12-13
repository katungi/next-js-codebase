import {useEffect} from 'react';
import { useQuery, useMutation, useQueryCache, QueryCache, ReactQueryCacheProvider } from 'react-query'
import Cards from '../components/experienceCards/cards'
import Categories from '../components/categories'
import Footer from '../components/footer'
import { Divider } from '@material-ui/core';
import { useAxiosGet } from '../Hooks/HttpRequests';

const queryCache = new QueryCache();  

export default function experiences() {

    const url = 'http://localhost:3001/api/v1/meetups'
    const experiences = useAxiosGet(url);
    console.log(experiences);

   return(
    <div>
        <h1 className="text-4xl font-extrabold text-pink-600 uppercase">Experiences</h1>
        <br/>
        <Divider/>
        <Cards></Cards>
        <Footer/>
    </div>
   );
}