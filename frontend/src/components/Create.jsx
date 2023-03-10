import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createAttachemt, createPost } from '../query/mutaions';
import { resizeImage } from '../utils/resize';

function Create() {
  const [formData, setFormData] = useState()
  const navigate = useNavigate()
  const { mutate } = useMutation(createPost)
  const { mutate: attachmentMutation } = useMutation(createAttachemt)

  const onChangeListner = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const dataURIToBlob = (dataURI) => {
    const splitDataURI = dataURI.split(',');
    const byteString =
      splitDataURI[0].indexOf('base64') >= 0
        ? atob(splitDataURI[1])
        : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
    return new Blob([ia], { type: mimeString });
  };

  const handleImageOnchange = async (e) => {
    const file = e.target.files[0];

    let data = new FormData();
    data.append('file', file);
    
    await attachmentMutation(data, {
      onSuccess(data) {
        console.log(data)
      }
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    await mutate(formData, {
      onSuccess(data) {
        navigate(`/routes/nested/blogs/${data.post.id}`)
      },
      onError(err) {
        alert(err)
      }
    })
  }

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Create a new post</h1>
            <form className='flex flex-col' onSubmit={handleSubmit} >
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="title"
                placeholder="Add a post"
                onChange={(e) => onChangeListner(e)}
              />
              <textarea
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="description"
                placeholder="Description"
                onChange={(e) => onChangeListner(e)}
              />
              <input
                type={'file'}
                accept='image/*'
                name='attachment'
                className='block border border-grey-light w-full p-3 rounded mb-4'
                onChange={(e) => handleImageOnchange(e)}
              />
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white hover:opacity-80 transition-all duration-500 focus:outline-none my-1"
              >
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Create