import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { LinearProgress, Typography } from '@material-ui/core';
import Subheading from 'components/Subheading';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { useState } from 'react';

export default function PageContent() {
    const [videoSrc, setVideoSrc] = useState('');
    const [message, setMessage] = useState('Awaiting file upload');
    const [information, setInformation] = useState('');
    const [progress, setProgress] = useState(0);
    let ffmpeg = null;

    const transcode = async (files) => {
        const file = files[0];

        setMessage('Initializing...');
        
        if (ffmpeg === null) {
            ffmpeg = createFFmpeg({ log: true });
            ffmpeg.setProgress(({ ratio }) => setProgress(ratio*100));
        }
                
        setInformation(`Original file size: ${Math.round(file.size / 1024)} KB`);
        setMessage('Loading ffmpeg-core.js');
        
        if (!ffmpeg.isLoaded()) await ffmpeg.load();
        
        await ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(file));
        
        setMessage('Transcoding video to 720p...');
        await ffmpeg.run('-i','input.mp4', '-s', '1280×720', '-maxrate', '1M', 'compressed.mp4');

        setMessage('Cleaning up...');
        await ffmpeg.FS('unlink', 'input.mp4');
        
        setMessage('Completed transcoding!');
        const data = await ffmpeg.FS('readFile', 'compressed.mp4');

        setInformation(`Original file size: ${Math.round(file.size / 1024)} KB, Final file size: ${Math.round(data.length / 1024)} KB`);
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

            <video controls src={videoSrc}></video>
                            
            <DropzoneArea
                acceptedFiles={['video/mp4']}
                filesLimit={1}
                onAdd={transcode}
                onDrop={transcode}
                maxFileSize={150*1024*1024}
                useChipsForPreview={true}
                showFileNames={true}
                showFileNamesInPreview={true}
                showPreviews={true}
                showPreviewsInDropzone={false}
                previewText={'Files:'}
            />
            <LinearProgress variant="determinate" value={progress} />
            <Typography>
                {message}
            </Typography>

            <Typography>
                {information}
            </Typography>
        </>
    );
}

