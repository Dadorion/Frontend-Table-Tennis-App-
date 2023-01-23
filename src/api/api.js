import axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "8fb233dd-cf30-4a1d-ae9b-c52215385e11"
   }

})

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
      return instance.put(`profile/status`, {status: status});
   },
}

export const authAPI = {
   me() {
      return instance
         .get(`auth/me`)
   },
}