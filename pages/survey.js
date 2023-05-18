import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
// import the component you want to use
import Rating from "@mui/material/Rating"
import { useState } from "react"
import Button from '@mui/material/Button';

// import Nav from '../components/nav';
// import SurveyComponent from "../../components/SurveyComponent";
// import Rating from '@mui/material/Rating';


export default function Survey() {
  // keep track of the selected rating within state
  const [score0, setScore0] = useState(0);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);


  function index(){
    if(score0 != 0 && score1 != 0 && score2 != 0 && score3 != 0 && score4 != 0){
        let idx = (score0 + score1 + score2 + score3 + score4)/5 * 2 * 10
        return (
            <Box sx={{
              alignItems: 'center',
              border: 2,
              padding: '10px',
              backgroundColor: '#fff3ec',
              color: 'black',
              borderRadius: '25px',
              fontFamily: 'sansSerif',
              width: '100%' 
              
              
              }}>
                <h2>
                     Your daily index score is {idx}%
                </h2>
                <Button 
                onClick={( () => 

                    fetch('/api', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({indexScore: idx })
                    })
                    
                    )}
                
                
                
                >Send score</Button>
            </Box>
        )
    }
  }


  return (
    <Container maxWidth="sm" sx={{position: 'relative', padding: 10}}>
      <Box sx={{
        position: 'relative', 
        width: '100%',
        textAlign: 'center',
        fontFamily: 'sansSerif',
        fontSize: '60px',
        padding: '10px'
        
        
        }}>
          Wellness Survey 
      </Box>
      <Box sx={{ 
        padding: '30px',
        backgroundColor: '#ffc0ad',
        color: 'black',
        borderRadius: '25px',
        alignItems: 'center',
        fontFamily: 'sansSerif',
        width: '100%' ,
        boxShadow: '2px 2px'
        }}>
        <h4>How energized are you feeling?</h4>
        <Rating
            name="simple-controlled"
            value={score0}
            onChange={(event, newValue) => {
              setScore0(newValue);
            }}
          />
        <h4>How hydrated are you?</h4>
        <Rating
            name="simple-controlled"
            value={score1}
            onChange={(event, newValue) => {
              setScore1(newValue);
            }}
          />
          <h4>How healthy was ur food or nutritional intake in the last 24 hrs?</h4>
        <Rating
            name="simple-controlled"
            value={score2}
            onChange={(event, newValue) => {
              setScore2(newValue);
            }}
          />
          <h4>How much sleep did you get last night?</h4>
        <Rating
            name="simple-controlled"
            value={score3}
            onChange={(event, newValue) => {
              setScore3(newValue);
            }}
          />
          <h4>How stressed are you?</h4>
        <Rating
            name="simple-controlled"
            value={score4}
            onChange={(event, newValue) => {
              setScore4(newValue);
            }}
          />

        {index()}
      </Box>

      

      <Box sx={{
        position: 'absolute',
        padding: '5px',
        borderRadius: '25px',
        color: 'white',
        bottom: 0,
        right: 0,
        backgroundColor: '#e78fb3',
        '&:hover': {
        backgroundColor: '#ffc0ad'
      }}}>
        <Link href="../" color="secondary">
                  back
        </Link>
        <Link href="/workout" color="secondary">
                  next
        </Link>
      </Box>
    </Container>
  );
}