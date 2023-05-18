import Link from 'next/link';
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import {useState} from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


function arms(){
  //tricep exercises
  const tris_exercises = ["Skullcrushers: 12 reps", "Tricep Extension (cables): 15 reps", "Tricep-Overhead Extension (cables): 20 reps", "Close-Grip Bench Press: 10 reps", "Bench Dip: 10 reps", "Dumbbell Overhead Triceps Extension: 12 reps", "Single-Arm Cable Kick-Back: 15 reps each arm", "Close-Grip Push-Up: 25 reps"]
  //bicep  exercises
  const bis_exercises = ["Barbell Curls: 10 reps", "Bar Cable Curls: 10 reps", "EZ Bar Preacher Curls: 10 reps", "Incline Dumbbell Curls: 10 reps", "One arm Dumbbell Preacher Curls: 10 reps", "Reverse barbell curls: 10 reps", "Seated Dumbbell Curls: 10 reps", "Standing Biceps Cable Curl: 10 reps"]
  //shoulder exercises
  const shoulder_exercises = ["Lateral Raises: 10 reps", "Front Raises: 10 reps", "Shoulder Press: 10 reps", "High Pull: 10 reps", "Farmer's Walk", "Dumbbell Neutral Grip Overhead Press: 10 reps", "Shrugs: 20 reps", "Upright Row: 10 reps"];

  const arm_exercises = [" ", " ", " ", " ", " ", " "]

  // generating tricep exercises
  let idx = 0;
  while (idx != 2){
    // const random = A NUMBER 0-7 FOR TRIS_EXERSICES INDEX
    let again = 0;
    let rand = Math.floor(Math.random() * 7) + 0
    // console.log(rand)
    // loop through arm_exercises to look for duplicates
    for(let i = 0; i < arm_exercises.length; i++){
      if(arm_exercises[i] == tris_exercises[rand]){
        again = 1;
      }
    }

    if(again == 0){
      for(let i = 0; i < 6; i++){
        if(arm_exercises[i] == " "){
            arm_exercises[i] = (tris_exercises[rand])
            idx++;
            break;
        }
      }
    }
  }
  // generating bicep exercises  
  idx = 0
  while (idx != 2){
    let again = 0;
    let rand = Math.floor(Math.random() * 8) + 0
    // loop through arm_exercises to look for duplicates
    for(let i = 0; i < arm_exercises.length; i++){
      if(arm_exercises[i] == bis_exercises[rand]){
        again = 1;
      }
    }

    if(again == 0){
      for(let i = 0; i < 6; i++){
        if(arm_exercises[i] == " "){
            arm_exercises[i] = (bis_exercises[rand])
            idx++;
            break;
        }
      }
    }
  }
  // generating shoulder exercises  
  idx = 0
  while (idx != 2){
    let again = 0;
    let rand = Math.floor(Math.random() * 8) + 0
    // loop through arm_exercises to look for duplicates
    for(let i = 0; i < arm_exercises.length; i++){
      if(arm_exercises[i] == shoulder_exercises[rand]){
        again = 1;
      }
    }

    if(again == 0){
      for(let i = 0; i < 6; i++){
        if(arm_exercises[i] == " "){
            arm_exercises[i] = (shoulder_exercises[rand])
            idx++;
            break;
        }
      }
    }
  }
  return arm_exercises
}

function abs(){
    const abs_exercises = ["Ab Wheel Rollout: 10 reps" ,"Barbell Rollout: 15 reps", "Barbell Russian Twist: 30 reps", "Flutter Kick: 30 reps", "Leg Raise: 15 reps", "Medicine Ball Russian Twist: 15 reps", "Plank: 1 minute", "Pullup to Knee Raise: 15 reps", "Reverse Crunch: 15 reps", "Side Plank: 30 seconds each side", "Straight-Leg Barbell Situp: 12 reps", "Swiss Ball V-Up and Pass: 10 reps", "Sit-Ups: 20 reps", "Crunch: 15 reps", "Toe Touches: 20 reps"];
    const ab_exercises = [" ", " ", " ", " ", " ", " "]

    // generating tricep exercises
    let idx = 0;
    while (idx != 6){
        // const random = A NUMBER 0-7 FOR TRIS_EXERSICES INDEX
        let again = 0;
        let rand = Math.floor(Math.random() * 15) + 0
        // console.log(rand)
        // loop through arm_exercises to look for duplicates
        for(let i = 0; i < ab_exercises.length; i++){
            if(ab_exercises[i] == abs_exercises[rand]){
                again = 1;
            }
        }

        if(again == 0){
            for(let i = 0; i < 6; i++){
                if(ab_exercises[i] == " "){
                    ab_exercises[i] = (abs_exercises[rand])
                    idx++;
                    break;
                }
            }
        }
    }

    return ab_exercises
}

function legs(){
    const legs_exercises = ["Squats: 5 reps" ,"Back Squat: 5-10 reps", "Pause Squat: 5-10 reps", "Front Squat: 5-10 reps", "Box Squat: 5-10 reps", "Barbell Split Squat: 5-10 reps each leg", "The Goblet Squat: 10 reps", "Reverse Lunge: 5-10 reps each leg", "Bulgarian Split Squat: 5-10 reps each leg", "Step Ups: 5-10 reps each leg", "Pistols Thrusters: 5-10 reps each leg", "Wall Sits: 1 minute", "Leg Extensions: 12-20 reps", "Leg Curls: 10-15 reps", "RDL's: 10 reps"];
    const leg_exercises = [" ", " ", " ", " ", " ", " "]

    // generating leg exercises
    let idx = 0;
    while (idx != 6){
        let again = 0;
        let rand = Math.floor(Math.random() * 15) + 0
        // loop through leg_exercises to look for duplicates
        for(let i = 0; i < leg_exercises.length; i++){
            if(leg_exercises[i] == legs_exercises[rand]){
                again = 1;
            }
        }

        if(again == 0){
            for(let i = 0; i < 6; i++){
                if(leg_exercises[i] == " "){
                    leg_exercises[i] = (legs_exercises[rand])
                    idx++;
                    break;
                }
            }
        }
    }
    return leg_exercises
}

function glutes_hammstrings(){
    const legs_exercises = ["Conventional Barbell Deadlift: 5-10 reps", "Romanian Deadlift: 10 reps", "Trap Bar Deadlift: 10 reps", "Goodmornings: 10 reps", "Dumbbell RDL's: 10 reps each leg", "Back Raise: 10 reps", "Cable Pull Through: 10 reps each leg", "Kettle Bell Swings: 10 reps", "The Suit Case Deadlift: 10 reps"];
    const glutes_ham_exercises = [" ", " ", " ", " ", " ", " "]
    // generating glute/ham exercises
    let idx = 0;
    while (idx != 6){
        let again = 0;
        let rand = Math.floor(Math.random() * 9) + 0
        for(let i = 0; i < glutes_ham_exercises.length; i++){
            if(glutes_ham_exercises[i] == legs_exercises[rand]){
                again = 1;
            }
        }

        if(again == 0){
            for(let i = 0; i < 6; i++){
                if(glutes_ham_exercises[i] == " "){
                    glutes_ham_exercises[i] = (legs_exercises[rand])
                    idx++;
                    break;
                }
            }
        }
    }
    return glutes_ham_exercises
}

function pull(){
    const back_exercises = ["Deadlifts 5 reps", "Barbell Row: 10-12 reps", "Underhand EZ Bar Row: 10-12 reps", "Pull-ups/Chin-ups: 5-10 reps", "Power Cleans: 5-8 reps", "Lat Pulldowns: 10-12 reps", "Seated Cable Rows: 10 reps", "Dumbbell Rows: 8-12 reps each arm", "Face Pulls: 10-12 reps", "Chest Supported Rows: 8-10 reps"];
    const bis_exercises = ["Barbell Curls: 8-10 reps", "Bar Cable Curls: 8-10 reps", "EZ Bar Preacher Curls: 8-10 reps", "Incline Dumbbell Curls: 8-10 reps", "One arm Dumbbell Preacher Curls: 8-10 reps each arm", "Reverse barbell curls: 8-10 reps", "Seated Dumbbell Curls: 5-10 reps each arm", "Standing Biceps Cable Curl: 8-10 reps"]
    const pull_exercises = [" ", " ", " ", " ", " ", " "]

    // generating pull exercises
    let idx = 0;
    while (idx != 4){
        let again = 0;
        let rand = Math.floor(Math.random() * 10) + 0
        // loop through pull_exercises to look for duplicates
        for(let i = 0; i < pull_exercises.length; i++){
            if(pull_exercises[i] == back_exercises[rand]){
                again = 1;
            }
        }

        if(again == 0){
            for(let i = 0; i < 6; i++){
                if(pull_exercises[i] == " "){
                    pull_exercises[i] = (back_exercises[rand])
                    idx++;
                    break;
                }
            }
        }
    }

    idx = 0;
    while (idx != 2){
        let again = 0;
        let rand = Math.floor(Math.random() * 8) + 0
        // loop through pull_exercises to look for duplicates
        for(let i = 0; i < pull_exercises.length; i++){
            if(pull_exercises[i] == bis_exercises[rand]){
                again = 1;
            }
        }

        if(again == 0){
            for(let i = 0; i < 6; i++){
                if(pull_exercises[i] == " "){
                    pull_exercises[i] = (bis_exercises[rand])
                    idx++;
                    break;
                }
            }
        }
    }


    return pull_exercises
}

function push(){
    const comp_exercises = ["Push-ups: 10-25 reps", "Incline Bench Press: 5-10 reps", "Overhead Press: 8-12 reps", "Dumbbell Press: 5-10 reps", "Dumbbell Incline Press: 8-12 reps", "Bench Press: 5 reps", "Dips: 8-12 reps", "Shoulder Press: 8-12 reps"];
    const iso_exercises = ["Tricep Extension: 10-15 reps", "Chest Flys: 10-15 reps", "Lateral raises: 10 reps", "Overhead Tricep Extension: 10-20 reps", "Kickbacks: 15-30 reps", "Landmine Press: 10 reps"]
    const push_exercises = [" ", " ", " ", " ", " ", " "]

    // generating pull exercises
    let idx = 0;
    while (idx != 2){
        let again = 0;
        let rand = Math.floor(Math.random() * 7) + 0
        // loop through pull_exercises to look for duplicates
        for(let i = 0; i < push_exercises.length; i++){
            if(push_exercises[i] == comp_exercises[rand]){
                again = 1;
            }
        }

        if(again == 0){
            for(let i = 0; i < 6; i++){
                if(push_exercises[i] == " "){
                    push_exercises[i] = (comp_exercises[rand])
                    idx++;
                    break;
                }
            }
        }
    }

    idx = 0;
    while (idx != 4){
        let again = 0;
        let rand = Math.floor(Math.random() * 6) + 0
        // loop through pull_exercises to look for duplicates
        for(let i = 0; i < push_exercises.length; i++){
            if(push_exercises[i] == iso_exercises[rand]){
                again = 1;
            }
        }

        if(again == 0){
            for(let i = 0; i < 6; i++){
                if(push_exercises[i] == " "){
                    push_exercises[i] = (iso_exercises[rand])
                    idx++;
                    break;
                }
            }
        }
    }

    return push_exercises
}

export default function SecondPost() {
    const options = ["Arms", "Legs"]

    const [workoutType, setWorkoutType] = useState("Arms")

    const handleChange = (event) => {
        setWorkoutType(event.target.value);
      };

    function rename() {
        if(workoutType === "Arms"){
            return arms()
        }
        if(workoutType === "Legs"){
            return legs()
        }
        if(workoutType === "Pull"){
            return pull()
        }
        if(workoutType === "Push"){
            return push()
        }
        if(workoutType === "Abs"){
            return abs()
        }
        if(workoutType === "Glutes and Hamstring"){
            return glutes_hammstrings()
        }
        
    }

    const workout = rename()

  return (
    <Container maxWidth="sm" sx={{position: 'relative', padding: 10}}>
      <Box sx={{
        position: 'relative', 
        width: '100%',
        textAlign: 'center',
        fontFamily: 'sansSerif',
        fontSize: '60px',
        padding: '20px', 
      }}>
        Generate Workouts
      </Box>

      <Box sx={{
        padding: '30px',
        backgroundColor: '#ffc0ad',
        color: 'black',
        borderRadius: '25px',
        alignItems: 'center',
        width: '100%',
        boxShadow: '2px 2px',
        fontFamily: 'sansSerif',
        }}>

        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Workout Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={workoutType}
                    label="Workout Type"
                    onChange={handleChange}
                >
                    <MenuItem value={"Arms"}>Arms</MenuItem>
                    <MenuItem value={"Legs"}>Legs</MenuItem>
                    <MenuItem value={"Pull"}>Pull</MenuItem>
                    <MenuItem value={"Push"}>Push</MenuItem>
                    <MenuItem value={"Abs"}>Abs</MenuItem>
                    <MenuItem value={"Glutes and Hamstring"}>Glutes and Hamstrings</MenuItem>
                </Select>
        </FormControl>



        <Stack>
            <p>{workout[0]}</p>
            <p>{workout[1]}</p>
            <p>{workout[2]}</p>
            <p>{workout[3]}</p>
            <p>{workout[4]}</p>
            <p>{workout[5]}</p>
        </Stack>
      </Box>
      <Box sx= {{
        position: 'absolute',
        padding: '5px',
        borderRadius: '25px',
        color: 'white',
        bottom: 0,
        right: 22,
        backgroundColor: '#e78fb3',
        '&:hover': {
        backgroundColor: '#ffc0ad'
      }}}>
        
        <Link href="/">Home</Link>
        
      </Box>
    </Container>
  );
}