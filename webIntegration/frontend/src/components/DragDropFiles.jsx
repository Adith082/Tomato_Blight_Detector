import { useState, useRef } from "react";
import styles from './DragDropFiles.module.css'
import {GET, POST } from "../api/api";
const DragDropFiles = () => {

  const [up,setUp]=useState(0)
  const [res,setRes]=useState([])
  const fileInput = useRef(null);
  const [files,setFiles]=useState(null)
  const[image, setImage] = useState(null);
  const[previewUrl, setPreviewUrl] = useState(""); 
  const handleFile = file => {
      //you can carry out any file validations here...
     console.log(file)


      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setFiles(file)
  }
  const handleOndrop = (event) => {

    //let's grab the image file
    let imageFile = event.dataTransfer.files[0];
    console.log(imageFile)
    setFiles(imageFile)
    console.log(files)
    handleFile(imageFile);
}

  const handleOndragOver = (event) => {
    event.preventDefault();
}

const handleUpload=async()=>{
  
  // console.log(files)
  let formData=new FormData()
  formData.append("image",files)
  // console.log(imgFiles)
  
  const res=await POST("/prediction",formData,{

  })
  console.log(res.data)
  setRes(res.data)


}
const cancelHandler=()=>{

  setPreviewUrl("")
  setRes([])
  setImage(null)
  setUp(1)
}


if(!image)return (
  
  <div className={styles.wrapper}>
          <div className={styles.title}>Tomato Blight Detector</div>

      <div 
       className={styles.drop_zone}
       onDragOver = {(e)=>handleOndragOver(e)}
       onDrop = {(e)=>handleOndrop(e)}
       onClick = { () => fileInput.current.click()}
      > 
       <p>Click to select or Drag and drop image here....</p>
       <input 
           type="file" 
           accept='image/*' 
           ref={fileInput} hidden 
           onChange={e => handleFile(e.target.files[0])}
          />
         
     </div> 
   
</div>
)
return (
  <div>

<div className={styles.uploads}>
       
{ previewUrl && <div className={styles.image}>
  <img src={previewUrl} alt='image' /> 
  {/* <span> {image.name} </span> */}
</div> }
        <div className={styles.actions}>
            <button onClick={() => cancelHandler()}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
        <div>
          {res.length===0?null:<div><span className={styles.spacing}>{res.class}</span>
<span className={styles.spacing}>{res.confidence}%</span></div>}
        </div>
    </div>

</div>
)


};

export default DragDropFiles;