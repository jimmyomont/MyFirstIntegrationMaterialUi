import * as React from 'react';
import './style.scss'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Card from '../card';

export default function Main() {
  return (
    <>
    <div className='main'>
    <Card />
    <Card />
    <Card />
    <Card />        
    </div>

    </>

  );
}