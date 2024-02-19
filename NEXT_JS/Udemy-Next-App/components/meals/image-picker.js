'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

const ImagePicker = ({ label, name }) => {
    const imageInputRef = useRef()
    const [pickedImage, setPickedImage] = useState('')

    const handleUploadImage = () => {
        imageInputRef.current.click()
    }

    const handleOnChange = (event) => {
        const file = event.target.files[0]
        if (!file) {
            return setPickedImage(null)
        }

        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <label>No Image is picked</label>}
                    {!!pickedImage && <Image  fill alt='User Selected Image' src={pickedImage}></Image>}
                </div>
                <input
                    type="file"
                    accept='image/png, image/jpeg, image/jpg'
                    name={name}
                    className={classes.input}
                    ref={imageInputRef}
                    onChange={handleOnChange}
                    required
                />
                <button type="button" onClick={handleUploadImage} className={classes.button}>Upload Image</button>
            </div>
        </div>
    )
}
export default ImagePicker