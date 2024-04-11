import React from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useTheme } from '../context/Theme'; // Import the useTheme hook from your ThemeContext
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark theme icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light theme icon

const Navbar = () => {
    const { theme, toggleTheme } = useTheme(); // Use the useTheme hook to access the theme context

    // Define background colors for "light" and "dark" themes
    const backgroundColor = theme === 'light' ? 'white' : 'black'; // Adjust these colors as needed

    return (
        <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{
                position: 'sticky',
                background: backgroundColor, // Set the background color dynamically
                justifyContent: 'space-between',
                top: '0',
                zIndex: "10"
            }}
        >
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                <p className="logo">Vanced</p>
            </Link>
            <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <div style={{display:'flex', alignItems:"center", gap:"1rem"}}>
                    <span>{theme === 'dark' ? <p style={{ color: 'white' }}>Light</p> : <p>Dark</p>}</span>
                    {theme === 'dark' ? <Brightness4Icon style={{ color: 'white' }} /> : <Brightness7Icon />}

                </div>
            </button>
            <SearchBar />
        </Stack>
    );
};

export default Navbar;
