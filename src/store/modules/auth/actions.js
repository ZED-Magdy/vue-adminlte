import api from '../../api/api'
import jsCookies from 'js-cookie'
import { getAuthUser, login, logout } from '../../api/auth'

// this function is dispatched before every auth route
// only if the getters.isLoggedIn is false
// the saved access token will be removed if this returns false
// that means access token is expired or server refuesed it for whatever reason
async function init ({commit, getters}){
    //add the access token to the api headers if existed then,
    //Check if the user is already logged in
    setHeaders();
    const user = await getAuthUser(); // return object or null
    commit("AUTH_USER_CHANGED",user);
    return getters.isLoggedIn;
}

function setHeaders(){
    let token = jsCookies.get('access_token');
    api.defaults.headers.common.Authorization = token ? "Bearer " + token : ''
}
export default { init }