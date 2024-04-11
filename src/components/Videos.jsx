import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ChannelCard, VideoCard, Loader } from '.';
import { useTheme } from '../context/Theme';

const Videos = ({ videos, direction }) => {
  const { theme, toggleTheme } = useTheme(); // Always call useTheme unconditionally

  if (!videos?.length) return <Loader />;

  const containerStyle = {
    background: theme === 'light' ? 'white' : 'black',
  };

  return (
    <div style={containerStyle}>
      <Stack
        direction={direction || 'row'}
        flexWrap='wrap'
        justifyContent='start'
      >
        {videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Videos;
