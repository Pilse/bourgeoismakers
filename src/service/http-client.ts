import Cookies from "js-cookie";

export const httpClient = {
  get: async <Res = any>(url: string) => {
    return fetch(url, {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 0, tags: [url] },
    }).then<Res>((res) => res.json());
  },
  post: async <Req, Res = any>(url: string, body: Req) => {
    return fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then<Res>((res) => res.json());
  },
  delete: async <Res = any>(url: string) => {
    return fetch(url, {
      method: "DELETE",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
        "Content-Type": "application/json",
      },
    }).then<Res>((res) => res.json());
  },
};
