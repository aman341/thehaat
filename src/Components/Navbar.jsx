import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Navbar(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [position, setPosition] = React.useState(null);

  const getCurrentPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor: '#3c006b',
            borderRadius: '0px',
            width: '100%',
          }}
        >
          <Toolbar>
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 'bold',
                fontFamily: 'cursive',
              }}
            >
             <b> The Haat</b>
            </Typography>
            <Box>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Button
                  variant="contained"
                  style={{ height: '1.5rem', marginTop: '' }}
                  onClick={getCurrentPosition}
                >
                  Location
                </Button>
                {position ? (
                  <div style={{ marginLeft: '10px' }}>
                    <Button>
                      <Typography variant="body2" component="p">
                        Latitude: {position.latitude}
                      </Typography>
                      <Typography variant="body2" component="p">
                        Longitude: {position.longitude}
                      </Typography>
                    </Button>
                  </div>
                ) : (
                  <Typography variant="body2" component="p">
                    {/* Current Location */}
                  </Typography>
                )}
              </div>
            </Box>
            <Box style={{ display: 'flex' }}>
              <div>
                <Button style={{ fontWeight: 'bold', color: 'white' }}>
                  <i className="bi bi-bag-heart-fill" style={{ fontSize: '24px' }}></i>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ marginLeft: isMobile ? '5px' : '10px', fontWeight: 'bold',
                    fontFamily: 'cursive', }}
                  >
                    Cart
                  </Typography>
                </Button>

              </div>
              <div>
                <Button style={{ fontWeight: 'bold', color: 'white' }}>
                  <i className="bi bi-person-circle" style={{ fontSize: '24px' }}></i>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ marginLeft: isMobile ? '5px' : '10px', fontWeight: 'bold',
                    fontFamily: 'cursive' }}
                  >
                    Login
                  </Typography>
                </Button>
              </div>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
