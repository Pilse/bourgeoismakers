export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");

  const loginRes = await fetch(`${process.env.API_URL}/api/v1/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  });
  console.log("loginRes", loginRes);

  return Response.redirect(`${process.env.APP_URL}/main`);
}
