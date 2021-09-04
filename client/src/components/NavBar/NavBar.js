import {
  AppBar,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Box from "@material-ui/core/Box";
import FilterByPrice from "./../FilterByPrice/FilterByPrice";
import Grid from "@material-ui/core/Grid";
import React from "react";
import TextField from "@material-ui/core/TextField";
import logo from "../../assets/myLogo.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      color: "#00acc1",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    palette: {
      primary: {
        main: "#00acc1",
      },
      secondary: {
        main: "#467eac",
      },
      title: {
        fontsize: 20,
      },
    },
  },
}));

const NavBar = ({ categories, onChoose, value, handleChange }) => {
  let index = 1;
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.root}>
          <img
            src={logo}
            alt="Alexander shop"
            height="55px"
            className={classes.image}
          />
          My Shop
        </Typography>
        <Box width={1} component="span" display="block">
          <Grid
            container="fixed"
            direction="row"
            justifyContent="space-evenly"
            alignItems="baseline"
          >
            <Grid item xs={12} sm={6}></Grid>
          </Grid>
        </Box>
        <Grid item xs={6} sm={3}>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Filter by category:"
                variant="outlined"
                onChange={onChoose}
              >
                {categories.map((p) => (
                  <MenuItem key={index++} value={p} color="primary">
                    {p}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div align="left" dir="ltr">
            <FilterByPrice value={value} handleChange={handleChange} />{" "}
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
