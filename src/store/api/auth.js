import api from './api'

export async function login(){

}
export async function getAuthUser(){
    const user = await api.get('/me')
    if(user) {
        return user.data
    }else {
        return null
    }
}
export async function logout(){

}