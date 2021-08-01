import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { Typography } from '@material-ui/core';
import Subheading from 'components/Subheading';
import React, { useState } from 'react';

export default function PageContent() {
    const [videoSrc, setVideoSrc] = useState('');
    const [message, setMessage] = useState('Click Start to transcode');
    const ffmpeg = createFFmpeg({
        log: true,
    });

    const doTranscode = async () => {
        setMessage('Loading ffmpeg-core.js');
        await ffmpeg.load();
        setMessage('Start transcoding');
        ffmpeg.FS('writeFile', 'test.avi', await fetchFile('/flame.avi'));
        await ffmpeg.run('-i', 'test.avi', 'test.mp4');
        setMessage('Complete transcoding');
        const data = ffmpeg.FS('readFile', 'test.mp4');
        setVideoSrc(URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' })));
    };
    return (
        <>
            <Subheading>
                Compressing videos
            </Subheading>

            <Typography>
                Mainly for uploading videos onto Discord lol
            </Typography>
      
            <video src={videoSrc} controls></video><br />
            <button onClick={doTranscode}>Start</button>
            <p>{message}</p>
        </>
    );
}
