

import axios from "axios";

import { getSession } from "next-auth/react";



// import { Cagliostro } from "next/font/google";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session?.accessToken}`;
    } else {
      console.warn("No token in session");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;


export async function forgetPassword(email:string) {
  try{
         const res= await api.post(`/auth/forget-password`,{email:email});
         return res.data;
  }catch(error){
    if(error instanceof  Error){
      throw new Error(error.message || 'failed to forget password')
    }
  }
  
}
export async function sentOtp(otp:string,email:string) {
  try{
         const res= await api.post(`/auth/verify-code`,{otp:otp, email:email});
         return res.data;
  }catch(error){
    if(error instanceof  Error){
      throw new Error(error.message || 'failed to forget password')
    }
  }
  
}

export async function resetPassword(newPassword:string,email:string) {
  try{
         const res= await api.post(`/auth/reset-password`,{email:email,newPassword:newPassword});
         return res.data;
  }catch(error){
    if(error instanceof  Error){
      throw new Error(error.message || 'failed to forget password')
    }
  }
  
}


// Get reviews all with pagination and dynamic params
export async function getAllReview(page = 1, limit = 10) {
  try {
    const res = await api.get(`/reviews/all?page=${page}&limit=${limit}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching reviewss:", err);
    throw new Error("Failed to fetch all reviews with pagination");
  }
}

export async function getSubscription() {
  try {
    const res = await api.get(`/subscription/get-all`);
    return res.data;
  } catch (err) {
    console.error("Error fetching reviewss:", err);
    throw new Error("Failed to fetch all reviews with pagination");
  }
}

export async function registerForm(data: FormData) {
  try {
    const res = await api.post('/auth/register', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return res.data
  } catch (err) {
    if(err instanceof Error){

      throw new Error(err?.message || 'Failed to send your data')
    }
  }
}


export async function Payment(userId:string,planId:string) {
  
  try{
    const  res= await api.post("/subscription/payment/create-checkout",{userId:userId,planId:planId})
    return res.data
  }catch(err){
    if(err instanceof Error){
      throw new Error(err.message || 'fail to payment')
    }
  }
} 
export async function postAskForHelp(data: { issue: string; description: string; email: string }) {
  try {
    const res = await api.post("/contact", data);
    return res.data;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message || "Fail to send contact request");
    }
  }
}
