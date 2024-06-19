export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  console.log(request);
  return Response.redirect(`${process.env.APP_URL}/main`);
}
