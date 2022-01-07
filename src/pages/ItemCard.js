
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';


// function ItemCard({item}) {
//     return (
//         <div>
//             <h1>{item.name}</h1>
//         </div>
//     )
// }

// export default ItemCard

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: '35vw',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginTop: '1%',// 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
  // avatar: {
  //   backgroundColor: red[500],
  // },
}));

export default function ItemCard({ item, name, addItem, currentUser, handleDeleteItem }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function handleDeleteClick(e) {
    e.preventDefault()

    fetch(`http://127.0.0.1:3000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((r => r.json()))
      .then(data => handleDeleteItem(data));

    handleDeleteItem(item.id);
  }

  function deleteButton() {
    if (item.seller_id == currentUser.id)
      <IconButton onClick={handleDeleteClick} aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>
  }




  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }

        title={item.name}
        subheader={`seller: ${name}`}
      />
      <CardMedia
        className={classes.media}
        image={item.image}
        title="Seller:"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Category: {item.category}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        {/* {(item.seller_id ==  currentUser.id)?
        <IconButton aria-label="delete">
            <FavoriteIcon />
          </IconButton> : ""} */}
         { (item.seller_id == currentUser.id)?
      <IconButton onClick={handleDeleteClick} aria-label="delete" size="large">
        <DeleteIcon />
      </IconButton>:""}


        <IconButton onClick={() => addItem(item)} aria-label="add to cart">
          < AddCircleIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />

        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Price:${item.price}</Typography>
          <Typography paragraph>
            No description Added
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
