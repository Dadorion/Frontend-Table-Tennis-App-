import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/",
});

// Добавляем interceptor для запросов
instance.interceptors.request.use(
  (config) => {
    // Получаем токен из локального хранилища
    const token = localStorage.getItem("token");

    // Если токен существует, добавляем его в заголовки запроса
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ---------------------------
export const registrationAPI = {
  async registration(formData) {
    try {
      return await instance.post(`auth/registration`, formData);
    } catch (e) {
      console.log(e);
    }
  },
};
// ---------------------------

export const authAPI = {
  me() {
    try {
      return instance.get(`auth/me`);
    } catch (e) {
      console.log(e);
    }
  },
  login(formData) {
    const { email, password, rememberMe = false } = formData;

    return instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const usersAPI = {
  async getUsers(page, pageSize) {
    try {
      const response = await instance.get(`api/players`);
      return response.data.body;
    } catch (error) {
      console.error("Ошибка при запросе за игроками: ", error);
      throw error;
    }
  },
  async getUsersWithName(name) {
    try {
      const response = await instance.post(`api/players`, {name});
      return response.data.body;
    } catch (error) {
      console.error("Ошибка при запросе поиска по имени: ", error);
      throw error;
    }
  },
};
export const profileAPI = {
  async getMyProfile() {
    try {
      const response = await instance.get(`api/profile/me`);
      return response.data;
    } catch (error) {
      console.error("Ошибка при запросе за профилем: ", error);
      throw error;
    }
  },
  async updateMyProfile(newProfileData) {
    try {
      const response = await instance.put(
        `api/profile/update_my_profile`,
        newProfileData
      );
      return response.data;
    } catch (error) {
      console.error("Ошибка при обновлении профиля: ", error);
      throw error;
    }
  },
  async updateStatus(status) {
    try {
      const response = await instance.put(`api/profile/update_my_status`, {
        status,
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка при обновлении статуса: ", error);
      throw error;
    }
  },
  async updatePhoto(file) {
    try {
      const response = await instance.put(`api/profile/upload`, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Ошибка при обновлении аватара: ", error);
      throw error;
    }
  },
};
