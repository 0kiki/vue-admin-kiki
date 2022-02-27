import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    // return出来的是一个state对象
    token: getToken(), // 登陆后的token存储(登陆后只返回token),先从cookies当中获取,获取不到再登陆第一次设置
    name: "", // 获取用户信息之后存储的名称
    avatar: "", // 获取用户信息之后存储的用户头像
  };
};

const state = getDefaultState();

const mutations = {
  // 把getDefaultState重新调用了一下 又返回一个新的
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  // 登陆后设置用户token  存储到state中
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
  // 获取用户信息之后设置用户信息 存储到state中
  // SET_USERINFO : (state , userInfo)=>{
  //   state.name=userInfo.name;
  //   state.avatar=userInfo.avatar
  // }
};

const actions = {
  // user login
  // 这里的login是自己定义的
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      // 这里的login是api
      login({ username: username.trim(), password: password })
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN", data.token);
          setToken(data.token); // 存储token到cookie中    也可以改成用localstrage操作
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token)
        .then((response) => {
          const { data } = response;

          if (!data) {
            return reject("Verification failed, please Login again.");
          }

          const { name, avatar } = data;

          commit("SET_NAME", name);
          commit("SET_AVATAR", avatar);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)
        .then(() => {
          removeToken(); // must remove  token  first
          resetRouter();
          commit("RESET_STATE");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
