import Category from "../src/Components/Category";
import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serviceurl";


// Upload new video
export const uploadVideoAPI = async(video)=>{
    return await commonAPI("POST", `${SERVER_URL}/allVideos`, video);
}

// Get all uploaded videos
export const getAllUploadedVideosAPI = async()=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "");
}

// Get a particular video
export const getAVideosAPI = async(id)=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos/${id}`, "");
}

// Add video to history
export const addVideosToHistoryAPI = async(video)=>{
    return await commonAPI("POST", `${SERVER_URL}/watchHistory`, video);
}

// Get history
export const getHistoryAPI = async()=>{
    return await commonAPI("GET", `${SERVER_URL}/watchHistory`, "");
}

// Delete history
export const deleteHistoryAPI = async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/watchHistory/${id}`, {});
}

// Delete video
export const deleteVideoAPI = async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${id}`, {});
}

// Add videos to category
export const addCategoryAPI = async(category)=>{
    return await commonAPI("POST", `${SERVER_URL}/categories`, category);
}

// get category
export const getAllCategoryAPI = async()=>{
    return await commonAPI("GET", `${SERVER_URL}/categories`, "");
}

// delete category
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/categories/${id}`, {});
}

// update videos to category
export const updateCategoryAPI = async(id, categoryDetails)=>{
    return await commonAPI("PUT", `${SERVER_URL}/categories/${id}`, categoryDetails);
}