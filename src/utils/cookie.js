import cookie from "react-cookie";

export const getCookie = name => cookie.load(name);

export const mutateCookie = (name, mutate) => {
  const replace = mutate(cookie.load(name));
  cookie.save(name, replace, {path: "/", expires: getCookieExp()});
  return replace
};

export const setCookie = (name, data) => {
  cookie.save(name, data, {path: "/", expires: getCookieExp()});
  return data;
};

function getCookieExp() {
  let d = new Date();
  d.setTime(d.getTime() + (3600 * 60 * 1000));
  return d;
}