import * as axios from 'axios'

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {'API-KEY': '4c9b63b1-3a0d-40a8-b4ef-422a6f36272c'}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {return response.data})
    },
    follow(userId){
        return instance.post(`follow/${userId}`).then(response => {
            return response.data.resultCode === 0
        })
    },
    unFollow(userId){ 
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data.resultCode === 0 
        })
    },
    setAuth(){
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfileUser(userId){
        return instance.get(`profile/` + userId)
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status){
        return instance.put(`/profile/status`, {status: status})
    }
}

