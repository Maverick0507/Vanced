import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'


const ChannelDetail = () => {
  const { id } = useParams()
  const [ChannelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelID=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id])

  console.log(ChannelDetail)
  return (

    <Box minHeight='95vh'>
      <Box>
        <div style={{
          height: '300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }}>
        </div>
        <ChannelCard channelDetail={ChannelDetail} marginTop='-93px' />
      </Box>

      <Box display='flex' p='2'>
       <Box sx={{mr:{sm:'100px'}}}/>
       <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
