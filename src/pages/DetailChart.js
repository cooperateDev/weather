import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import LineChart from '../components/LineChart';
import SunStatus from '../assets/sunStatus.svg';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    color: 'white',
    height: 650
  },
  leftBackground: {
    position: 'relative',
    backgroundColor: '#2D4392',
    height: 650,
    width: '50%'
  },
  rightBackground: {
    backgroundColor: '#09112D',
    width: '50%'
  },
  backShape: {
    position: 'absolute',
    width: '50%',
    bottom: '0%',
    left: '0%'
  },
  sunStatus: {
    marginTop: 45
  },
  weather: {
    color: 'black'
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 10,
    borderRight: '1px solid #ECEDF2',
  },
  weatherInfo: {
    padding: '60px 60px 60px 30%',
    textAlign: 'left'
  },
  weatherItem: {
    backgroundColor: '#09112D',
    color: 'white',
  },
  title: {
    fontSize: 24,
    marginTop: 76,
    marginLeft: 79,
    textAlign: 'left'
  },
  titleDesc: {
    fontSize: 16,
    color: '#B0BCC8'
  },
  currentInfo: {
    fontSize: 24
  },
  currentInfoDesc: {
    fontSize: 16,
    color: '#B0BCC8'
  },
  todayTitle: {
    fontSize: 20,
    marginTop: 75,
    marginLeft: 75,
    textAlign: 'left',
  },
  timeInfo: {
    fontSize: 18,
    marginTop: 75,
    color: '#B0BCC8',
    textAlign: 'right', 
  },
  chart: {
    padding: 20,
    marginTop: 100
  },
  temperature: {
    fontSize: 14
  },
  weatherData: {
    fontSize: 20,
    color: '#454F58'
  },
  weekday: {
    fontSize: 14,
    color: '#6F7A85'
  },
  backBtn: {
    textDecoration: 'auto',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
        color: '#2D4392'
    }
  }
});

export default function Home () {
  
  const classes = useStyles();

  return (    
    <div className={classes.root}>
      <Grid container item xs={12}>
        <Grid item md={12} className={classes.rightBackground}>
          <Grid item xs={12} container>
            <Grid item xs={4} className={classes.todayTitle}>
                <Link to="/" className={classes.backBtn}>
                    <ArrowBackIcon /> 
                    Back to home 
                </Link>
            </Grid>
            <Grid item xs={3}>
                <Grid className={classes.sunStatus}>
                <img src={SunStatus} alt="sun-cloud" /><br/>
                <div style={{fontSize: 14}}>
                    34° / 31°<br/>
                    Sunny
                </div>
                </Grid>
            </Grid>
            <Grid item xs={4} container>
              <Grid item xs={12} className={classes.timeInfo}>
                Tuesday 25 Nov, 2021
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.chart} >
            <LineChart />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.weather} container>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={2} container>
          <Grid item xs={10} className={classes.weatherInfo}>
            <WbSunnyOutlinedIcon /><br/>
            <span className={classes.temperature}>
            28° / 19°<br/>
            </span>
            <span className={classes.weatherData}>
            Rain<br/>
            </span>
            <span className={classes.weekday}>
            Tomorrow
            </span>
          </Grid>
          <Grid item xs={2} className={classes.arrow}>
            <ArrowForwardOutlinedIcon />
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item xs={10} className={classes.weatherInfo}>
            <WbSunnyOutlinedIcon /><br/>
            <span className={classes.temperature}>
            28° / 19°<br/>
            </span>
            <span className={classes.weatherData}>
            Rain<br/>
            </span>
            <span className={classes.weekday}>
            Tomorrow
            </span>
          </Grid>
          <Grid item xs={2} className={classes.arrow}>
            <ArrowForwardOutlinedIcon />
          </Grid>
        </Grid>
        <Grid item xs={2} container className={classes.weatherItem}>
          <Grid item xs={10} className={classes.weatherInfo}>
            <AcUnitOutlinedIcon /><br/>
            <span className={classes.temperature}>
            28° / 19°<br/>
            </span>
            <span className={classes.weatherData}>
            Rain<br/>
            </span>
            <span className={classes.weekday}>
            Tomorrow
            </span>
          </Grid>
          <Grid item xs={2} className={classes.arrow}>
            <ArrowForwardOutlinedIcon />
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item xs={10} className={classes.weatherInfo}>
            <WbSunnyOutlinedIcon /><br/>
            <span className={classes.temperature}>
            28° / 19°<br/>
            </span>
            <span className={classes.weatherData}>
            Rain<br/>
            </span>
            <span className={classes.weekday}>
            Tomorrow
            </span>
          </Grid>
          <Grid item xs={2} className={classes.arrow}>
            <ArrowForwardOutlinedIcon />
          </Grid>
        </Grid>
        <Grid item xs={2} container>
          <Grid item xs={10} className={classes.weatherInfo}>
            <FilterDramaOutlinedIcon /><br/>
            <span className={classes.temperature}>
            28° / 19°<br/>
            </span>
            <span className={classes.weatherData}>
            Rain<br/>
            </span>
            <span className={classes.weekday}>
            Tomorrow
            </span>
          </Grid>
          <Grid item xs={2} className={classes.arrow}>
            <ArrowForwardOutlinedIcon />
          </Grid>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  )
}