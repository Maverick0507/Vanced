import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar, SearchFeed, Feed, VideoDetail, ChannelDetail } from './components';
import { useTheme } from './context/Theme'; // Import your theme context

const App = () => {
  const { theme } = useTheme(); // Use the useTheme hook to access the theme context

  const backgroundColor = theme === 'light' ? '#fff' : '#000'; // Set the background color based on the theme

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor }}>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
