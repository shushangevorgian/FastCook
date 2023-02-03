import { Image, View } from "react-native"

export const renderTrendListData = (style = {borderRadius: 30}) => {
    return [
        {
            id:0,
            title: "Microwave Sweet Potato",
            body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
            image: <View  style={style}><Image 
            style={style}
            source={require('./ImagesForTrendData/Potato.png')} /></View>
            // image: './ImagesForTrendData/Potato.png'
        },
        {
            id:1,
            title: "First Picture",
            body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
            image: <View  style={style}><Image 
            style={style}
            source={require('./ImagesForTrendData/Potato.png')} /></View>
        },
        {
            id:2,
            title: "Microwave Sweet Potato",
            body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
            image: "./ImagesForTrend/Potato.png",
        },
        {
            id:3,
            title: "Microwave Sweet Potato",
            body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
            image: "./ImagesForTrend/Potato.png",
        },
        {
            id:4,
            title: "Microwave Sweet Potato",
            body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
            image: "./ImagesForTrend/Potato.png",
        }
    
    ]
}
// export const TrendListdata = [
//     {
//         id:0,
//         title: "Microwave Sweet Potato",
//         body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
//         image: <View  style={{height: 200,
//             width:270,  borderRadius: 30,}}
//             ><Image 
//         style={style}
//         source={require('./ImagesForTrendData/Potato.png')} /></View>
//         // image: './ImagesForTrendData/Potato.png'
//     },
//     {
//         id:1,
//         title: "First Picture",
//         body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
//         image: "./ImagesForTrendData/Potato.png",
//     },
//     {
//         id:2,
//         title: "Microwave Sweet Potato",
//         body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
//         image: "./ImagesForTrend/Potato.png",
//     },
//     {
//         id:3,
//         title: "Microwave Sweet Potato",
//         body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
//         image: "./ImagesForTrend/Potato.png",
//     },
//     {
//         id:4,
//         title: "Microwave Sweet Potato",
//         body: " For a super quick side or main dish, simply split open the microwaved sweet potato, top with salt and pepper and your choice of butter, sour cream, shredded cheese, chives, chopped bacon, chili, or a combo. Go sweet with a light sprinkling of brown sugar and cinnamon.",
//         image: "./ImagesForTrend/Potato.png",
//     }

// ]