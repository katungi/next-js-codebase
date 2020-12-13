import {useEffect} from 'react';
import Cards from '../components/experienceCards/cards'
import axios from 'axios';
import Categories from '../components/categories'
import Footer from '../components/footer'
import { Divider } from '@material-ui/core';

export default function categories() {
    return(
        <div>
        <h1 className="text-4xl font-extrabold text-pink-600 uppercase">Categories</h1>
        <br/>
        <Divider/>
        <Categories/>
        <Footer/>
    </div>
    );
}