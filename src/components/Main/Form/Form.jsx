import React, { useState, useContext } from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseTrackerContext } from '../../../context/context';

import useStyles from './styles';
import { incomeCategories, expenseCategories } from '../../../constant/categories';
import formatDate from '../../../utils/formatDate';

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatDate(new Date()),
}


const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const { addTransaction } = useContext(ExpenseTrackerContext);
  
  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4 }
    
    addTransaction(transaction);
    setFormData(initialState);
  }
  
  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>유형</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">수입</MenuItem>
            <MenuItem value="Expense">지출</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl>
          <InputLabel>항목</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => <MenuItem value={c.type}>{c.type}</MenuItem>)}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="금액" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="날짜" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: formatDate(e.target.value) })} />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>추가하기</Button> 
    </Grid>
  )
}

export default Form;
