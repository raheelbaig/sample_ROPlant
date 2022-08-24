import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductCard.css'

export default function ProductCard({title,img}) {
  return (
    <div className="card1" style={{width:300}}>
    <div className='ads-img'>
    <img className="card-img" src={img} alt="ads" height="170" />
    
      <div className='title-bar'>
      <p className="card-title">{title}</p>
    </div>
  </div>
  </div>
  );
}