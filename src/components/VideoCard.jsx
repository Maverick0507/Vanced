import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { useTheme } from '../context/Theme';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const { theme } = useTheme(); 

  
  const cardStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#1e1e1e',
    boxShadow: 'none',
    borderRadius: 0,
  };

  const titleColor = theme === 'light' ? '#000' : '#fff';
  const channelTitleColor = theme === 'light' ? 'gray' : 'lightgray';

  return (
    <div style={{ margin: 5 }}>
      <Card className='video-card' sx={{ width: { md: '330px', xs: '100%', sm: '358px' }, ...cardStyle }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{ width: 'auto', height: 180 }}
          />
        </Link>
        <CardContent sx={{ backgroundColor: cardStyle.backgroundColor, height: '106px' }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography
              variant='subtitle1'
              fontWeight='bold'
              color={titleColor}
            >
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>

          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography
              variant='subtitle2'
              fontWeight='bold'
              color={channelTitleColor}
            >
              {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
              <CheckCircle sx={{ fontSize: 12, color: channelTitleColor, ml: '5px' }} />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoCard;
