import request from "@/utils/request";

export function login(data) {
  // login是做登陆用的,最终会返回一个token
  // 改为真实的接口后 url里面都要换一下
  return request({
    url: "/vue-admin-template/user/login",
    method: "post",
    data,
  });
}

export function getInfo(token) {
  // 根据token返回用户信息
  return request({
    url: "/vue-admin-template/user/info",
    method: "get",
    params: { token },
  });
}

export function logout() {
  return request({
    url: "/vue-admin-template/user/logout",
    method: "post",
  });
}
