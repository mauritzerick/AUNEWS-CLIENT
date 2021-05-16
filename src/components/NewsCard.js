import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  root: {
    maxWidth: 299,
    minHeight: 340,
  },
  media: {
    height: 150,
  },
  fontStyle:{
    fontWeight: 800,
    fontSize: 14,
  },
  bodyFontStyle:{
    fontSize: 10,
  },
});

export default function NewsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" className={classes.fontStyle}>
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.bodyFontStyle}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={props.link} target="_blank" rel="noopener">
          Read More
        </Link>
      </CardActions>
    </Card>
  );
}
