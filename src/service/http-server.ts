import { cookies } from "next/headers";

export const httpServer = {
  get: async <Res = any>(url: string) => {
    return fetch(`${process.env.API_URL}${url}`, {
      credentials: "include",
      headers: {
        Authorization: `Bearer ${cookies().get("jwt")?.value}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 0, tags: [url] },
      cache: "no-store",
    })
      .then<Res>((res) => res.json())
      .catch(() => {
        return undefined;
      });
  },
  post: async <Req, Res = any>(url: string, body: Req) => {
    return fetch(`${process.env.API_URL}${url}`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${cookies().get("jwt")?.value}`,
      },
      body: JSON.stringify(body),
    })
      .then<Res>((res) => res.json())
      .catch(() => {
        return undefined;
      });
  },
};
