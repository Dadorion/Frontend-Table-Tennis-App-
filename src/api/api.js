import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'http://localhost:5000/',
   headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAwMSwiaWF0IjoxNjkzOTc1NTg4LCJleHAiOjE3MDI2MTU1ODh9.AK2xD5MC09xtN_hJWD4U0GjXisSO5Leq-EQDZa8HQBk",
      'Content-Type': 'application/json'
   }

})
// ---------------------------
export const headerPageAPI = {
   getProfileInfo() {
      return instance
         .get(`api/profile/1483`)
         .then(response => response.data)
   }
}

export const registrationAPI = {
   registration(formData) {
      return instance
         .post(`auth/registration`, formData)
   }
}
// ---------------------------

export const authAPI = {
   me() { // TODO дописать аутенфикацию на бэкэнде
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
