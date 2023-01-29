// import React, {useState} from "react";
// import ImagePicker  from "react-native-image-crop-picker";
// import AddRecipe from "./AddRecipe";
// const AddPosts = () =>{
//     const [image, setImage] = useState([]);
//     const imageList = [];
//     const openImagePicker = () =>{
//       ImagePicker.openPicker({
//             multiple:true,
//             width:300,
//             height:300,
            
//         }).then(response =>{
//             console.log("response", response);
//             response.map((images, index)=>{
                
//                 imageList.push({
//                             path: images.path
//                         });
                        
//             })
//             setImage(imageList)
//         })
        
       

//     }

//     return(
//         <AddRecipe
        
//         newImage={image}
//         addImage={openImagePicker}
//         ></AddRecipe>
//     )

// }

// export default AddPosts