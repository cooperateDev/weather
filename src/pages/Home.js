import React from 'react';
import SunStatus from '../assets/sunStatus.svg';
import BackShape from '../assets/backShape.svg';
import Sun from '../assets/sun.svg';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import LineChart from '../components/LineChart';
import { Link } from 'react-router-dom';
import BooheePixiuSemiCircleMeter from "../components/SemiCircle/BooheePixiuSemiCircleMeter";

const useStyles = makeStyles({
  root: {
    color: 'white'
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
    position: 'absolute',
    right: '10%',
    // top: '10%',
    // float: 'right'
    marginTop: 48
  },
  weather: {
    color: 'black'
  },
  arrow: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 10,
    '&:hover': {
      border: '0px'
    }
  },
  weatherInfo: {
    padding: '60px 60px 60px 30%',
    textAlign: 'left',
  },
  weatherItem: {
    borderRight: '1px solid #ECEDF2',
    '&:hover': {
      backgroundColor: '#09112D',
      color: 'white',
    }
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
    fontSize: 18,
    color: '#B0BCC8',
    marginTop: 95,
    marginLeft: 75,
    textAlign: 'left'
  },
  time: {
    fontSize: 32,
    textAlign: 'right',
    marginTop: 70,
    marginRight: 75
  },
  timeInfo: {
    fontSize: 18,
    color: '#B0BCC8',
    textAlign: 'right',
    marginRight: 75
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
  toDetail: {
    textDecoration: 'auto',
    color: 'black',
    width: '100%',
    display: 'flex',
    '&:hover': {
      color: 'white'
    }
  },
  semiCircle: {
    zoom: 2
  }
});

export default function Home () {
  
  const classes = useStyles();

  return (    
    <div className={classes.root}>
      <Grid container item xs={12}>
        <Grid item md={5} className={classes.leftBackground}>
          <img src={BackShape} alt="backgroundShap" className={classes.backShape}/>
          <Grid item xs={12} container>
            <Grid className={classes.title}>
              Good Morning<br/>
              <div className={classes.titleDesc}>
                Spend some quality time lt's sunny!
              </div>
            </Grid>
            <Grid className={classes.sunStatus}>
              <img src={SunStatus} alt="sun-cloud" /><br/>
              <div style={{fontSize: 14}}>
                34° / 31°<br/>
                Partly Cloudy
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} style={{marginTop: 50, position: 'absolute', left: '25%'}}>
            <img src={Sun} alt="sun"/>
            <BooheePixiuSemiCircleMeter value={50} className={classes.semiCircle}/>
          </Grid>
          <Grid item xs={12} container style={{position: 'absolute', bottom: '10%'}}>
            <Grid item md="4">
              <span className={classes.currentInfo}>
                800mb<br/>
              </span>
              <span className={classes.currentInfoDesc}>
              Preesure
              </span>
            </Grid>
            <Grid item md="4">
              <span className={classes.currentInfo}>
                87%<br/>
              </span>
              <span className={classes.currentInfoDesc}>
                Humadity
              </span>
            </Grid>
            <Grid item md="4">
              <span className={classes.currentInfo}>
                4.3km<br/>
              </span>
              <span className={classes.currentInfoDesc}>
                Visibility
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7} className={classes.rightBackground}>
          <Grid item xs={12} container>
            <Grid item xs={4} className={classes.todayTitle}>
              Houly Weather 
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={4} container>
              <Grid item xs={12} className={classes.time}>
                07:32 AM
              </Grid>
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
        
        <Grid item xs={2} container className={classes.weatherItem}>
          <Link to="/detailChart" className={classes.toDetail}>  
            <Grid item xs={10} className={classes.weatherInfo}>
              <WbSunnyOutlinedIcon /><br/>
              <span className={classes.temperature}>
              28° / 19°<br/>
              </span>
              <span className={classes.weatherData}>
              Sunny<br/>
              </span>
              <span className={classes.weekday}>
              Tomorrow
              </span>
            </Grid>
            <Grid item xs={2} className={classes.arrow}>
              <ArrowForwardOutlinedIcon />
            </Grid>
          </Link>
        </Grid>
        
        <Grid item xs={2} container className={classes.weatherItem}>
          <Link to="/detailChart" className={classes.toDetail}>  
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
          </Link>
        </Grid>
        <Grid item xs={2} container className={classes.weatherItem}>
          <Link to="/detailChart" className={classes.toDetail}>  
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
          </Link>
        </Grid>
        <Grid item xs={2} container className={classes.weatherItem}>
          <Link to="/detailChart" className={classes.toDetail}>  
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
          </Link>
        </Grid>
        <Grid item xs={2} container className={classes.weatherItem}>
          <Link to="/detailChart" className={classes.toDetail}>  
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
          </Link>
        </Grid>
        <Grid item xs={1}>
        </Grid>
      </Grid>
    </div>
  )
}