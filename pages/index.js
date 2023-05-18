// import Head from 'next/head';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{position: 'relative', padding: 10}}>
      <Box sx={{
        position: 'relative', 
        width: '100%',
        textAlign: 'center',
        fontFamily: 'sansSerif',
        fontSize: '60px',
        padding: '10px', 
        }}>
          Tank Gainz
      </Box>

      <Box sx={{
        position: 'relative', 
        width: '100%',
        textAlign: 'center',
        fontFamily: 'sansSerif',
        fontSize: '20px',
        padding: '40px'
        
        
        }}>
          Attack each day at a time. Any step forward is still a step forward.
      </Box>

      <Box sx={{
        padding: '30px',
        backgroundColor: '#ffc0ad',
        color: 'black',
        borderRadius: '25px',
        alignItems: 'center',
        fontFamily: 'sansSerif',
        width: '100%',
        boxShadow: '2px 2px'
        }}>
        <a>
              <h3>About Us</h3>
              <p>At Tank Gainz your health is a priority. We make it easy to generates workouts and track wellness with each use. Listening to your body and being safe is vital to longer prosperity.</p>
            </a>

            <a>
              <h3>Wellness</h3>
              <p>It is important to excercise safely and within your body's limits. Not everyday can you go 100%. At Tank Gainz we track users wellness with each workout to recommend different intensities.</p>
            </a>



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
            },
        }} >

                <Link href="/survey">Get Started!</Link>

      </Box>

    </Container>
  )
  
}
