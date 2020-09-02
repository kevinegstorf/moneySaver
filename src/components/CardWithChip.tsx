import React, { FC } from "react";
import { Chip, Typography, Card, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  chipWrapper: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 50,
  },
  chip: {
    margin: "0 auto",
  },
  card: {
    padding: 8,
    display: "flex",
    justifyContent: "space-around",
    marginTop: 10,
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
});

type CardWithChipProps = {
  chipText: string;
  cardText: string;
  cardNumber: number;
  link: string;
};

const CardWithChip: FC<CardWithChipProps> = ({
  chipText,
  cardText,
  cardNumber,
  link,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.chipWrapper}>
      <Chip className={classes.chip} size="small" label={chipText} />
      <Card className={classes.card}>
        <Typography variant="h6">{cardText}:</Typography>
        <Typography variant="h5">€ {cardNumber},-</Typography>
        <Button color="secondary" variant="contained">
          <Link className={classes.link} to={link}>
            Go To Page
          </Link>
        </Button>
      </Card>
    </div>
  );
};

export default CardWithChip;
