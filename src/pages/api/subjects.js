// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const response = await fetch("https://pastpaperarmyknife.up.railway.app/api/subjects")
  res.statusCode = 200
  res.json(await response.json())
}