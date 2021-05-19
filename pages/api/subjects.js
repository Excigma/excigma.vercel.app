// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fetch = require("petitio")

export default async (req, res) => {
  const res = await fetch("https://pastpaperarmyknife.up.railway.app/api/subjects").send().json()
  res.statusCode = 200
  res.json(res)
}
