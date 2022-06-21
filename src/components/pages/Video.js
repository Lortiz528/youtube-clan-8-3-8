import React from 'react';
import Form from './Form';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

function Video() {
  const videoId = useParams().id;

  return (
    <div className='video'>
      <section>
        <YouTube videoId={videoId} />
      </section>
      <section>
      <hr></hr>
        <Form />
      </section>
    </div>
  );
}

export default Video;
