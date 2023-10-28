import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   // baseURL: 'http://localhost:5000/',
   headers: { "API-KEY": "8fb233dd-cf30-4a1d-ae9b-c52215385e11" }

})
// 'http://localhost:5000/auth/registration'
// for testing with my backend on lockalhost:5000
const ttapp = axios.create({
   withCredentials: true,
   baseURL: 'http://localhost:5000/api/',
   headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMSwiaWF0IjoxNjkzOTc1NTg4LCJleHAiOjE3MDI2MTU1ODh9.AK2xD5MC09xtN_hJWD4U0GjXisSO5Leq-EQDZa8HQBk",
      'Content-Type': 'application/json'
   }

})
// ---------------------------
export const headerPageAPI = {
   getProfileInfo() {
      return ttapp
         .get(`profile/1483`)
         .then(response => response.data)
   }
}
export const API = {
   getProfileInfo() {
      return ttapp
         .get(`profile/1483`)
         .then(response => response.data)
   }
}
// ---------------------------

export const usersAPI = {
   getUsers(pageNumber = 1, pageSize = 5) {
      return instance
         .get(`users?page=${pageNumber}&count=${pageSize}`)
         .then(response => response.data)
   },
   follow(userId) {
      return instance
         .post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance
         .delete(`follow/${userId}`)
   },
   getProfile(userId) {
      console.warn('Obsolete, use profileAPI instead.');
      return profileAPI.getProfile(userId);
   }
}
export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`)
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`);
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status: status });
   },
   savePhoto(photoFile) {
      const formData = new FormData();
      formData.append('image', photoFile);
      return instance.put(
         `profile/photo/`,
         formData,
         // {
         //    headers: {
         //       'Content-Type': 'multipart/form-data'
         //    }
         // }
      );
   },
}

export const registrationAPI = {
   registration(name, surname, city, birthday, email, password) {
      return ttapp
         .post(`auth/registration`, { name, surname, city, birthday, email, password })
   }
}

export const authAPI = {
   me() {
      return instance
         .get(`auth/me`)
   },
   login(email, password, rememberMe = false, captcha = null) {
      return instance
         .post(`auth/login`, { email, password, rememberMe, captcha })
   },
   logout() {
      return instance
         .delete(`auth/login`)
   },
}

export const securityAPI = {
   getCaptchaUrl() {
      return instance
         .get(`security/get-captcha-url`)
   }
}