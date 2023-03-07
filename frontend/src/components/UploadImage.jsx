import React, { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'

function UploadImage() {
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: 'image/*',
        maxSize: 1000,
        multiple: false,
        onDrop
    })

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
    )
}

export default UploadImage