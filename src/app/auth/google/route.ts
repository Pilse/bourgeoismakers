import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const loginRes = await fetch(`${process.env.API_URL}/api/v1/auth/google`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });

  const cookieStore = cookies();
  cookieStore.set("jwt", loginRes.headers.getSetCookie()[0].split("=")[1].split(" ")[0]);

  return Response.redirect(`${process.env.APP_URL}/main`);
}
