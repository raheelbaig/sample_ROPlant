import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from './ProductCard.module.css'

export default function ProductCard({title,img}) {
  return (
    <div className={styles.card1} style={{width:300}}>
    <div className={styles.ads-img}>
    <img className={styles.card-img} src={img} alt="ads" height="300" />
    
      <div className={styles.titleBar}>
      <p className={styles.card-title}>{title}</p>
    </div>
  </div>
  </div>
  );
}