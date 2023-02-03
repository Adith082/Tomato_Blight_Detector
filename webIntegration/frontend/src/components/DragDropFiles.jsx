import { useState, useRef } from "react";
import styles from './DragDropFiles.module.css'
import {GET, POST } from "../api/api";
import Button from './Button/Button'
import { useNavigate } from "react-router-dom";
import Nav from "./nav/Nav";
const DragDropFiles = (props) => {

  const navigate=useNavigate()
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
  props.getValue(res.data)
  navigate("/result")

}
const cancelHandler=()=>{

  setPreviewUrl("")
  setRes([])
  setImage(null)
  setUp(1)
}


if(!image)return (
<div>
  <div className={styles.navbar2}>
  <Nav />
  </div>

<div className={styles.wrapper}>
     
     <div 
      className={styles.drop_zone}
      onDragOver = {(e)=>handleOndragOver(e)}
      onDrop = {(e)=>handleOndrop(e)}
      onClick = { () => fileInput.current.click()}
     > 
      <p style={{fontWeight:700}}>Click to select or Drag and drop image here....</p>
      <input 
          type="file" 
          accept='image/*' 
          ref={fileInput} hidden 
          onChange={e => handleFile(e.target.files[0])}
         />
        
    </div> 
  
</div>

</div>
 
)
return (
  <div>
    <Nav/>
  <div  className={styles.main}>
    
<div className={styles.uploads}>
       <div className={styles.imgcon}>
        { previewUrl && <div className={styles.image}>
  <img src={previewUrl} alt='image' /> 
</div> }
       </div>
        <div className={styles.actions}>
          <div onClick={cancelHandler}>
          <Button type={"cancel"} value={"Cancel"} ></Button>

          </div>
          <div  onClick={handleUpload}>
          <Button type={"has"} value={"Upload"}></Button>

          </div>
        </div>
        <div>
        </div>
    </div>

</div>
</div>
)


};

export default DragDropFiles;