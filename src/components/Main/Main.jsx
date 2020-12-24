import React from 'react';
import { Card, CardContent, CardHeader, Divider, Typography, Grid } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="당신의 이번달 지출은?" subheader="말로 추가해보세요!" />
      <CardContent>
        <Typography align="center" variant="h5">총 수입지출: ₩100,000</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          {/* Info Card */}
          음성인식 예시 : 월요일에 십만원의 급여에 대한 수입이 들어왔다!
        </Typography>
        <Divider />
          <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main;
