import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardWithChips from "../components/CardWithChip";
import { Card, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  budgetCard: {
    padding: 10,
  },
});

export default function Home() {
  const classes = useStyles();
  const [budget, setBudget] = React.useState<number>(300);
  const [moneySpend, setMoneySpend] = React.useState<number>(0);

  const handleBudgetButton = () => {
    const newBudget = budget - moneySpend;
    setBudget(newBudget);
  };

  const handleChange = (e: any) => {
    setMoneySpend(e.target.value);
    // post to backend moneyspend with date
  };
  return (
    <div>
      <Card elevation={7} className={classes.budgetCard}>
        <p> reload budget aan het einde van de maand</p>

        <CardWithChips
          chipText="Budget"
          cardText="Amount"
          cardNumber={budget}
          link="/budget"
        />
        <p>Amount Spend</p>
        <TextField value={moneySpend} onChange={(e) => handleChange(e)} />
        <TextField placeholder="description" />
        <button onClick={handleBudgetButton}>Add</button>
      </Card>
      <p>add balance aanpassing per maand door salaris mee te nemen</p>
      <CardWithChips
        chipText="Balance"
        cardText="Amount"
        cardNumber={1300}
        link="/balance"
      />
      <p>add balance aanpassing per maand door vast lasten mee te nemen</p>
      <CardWithChips
        chipText="Fixed Costs"
        cardText="Amount"
        cardNumber={1000}
        link="/fixed-costs"
      />
    </div>
  );
}
