// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from '../data.json'
export default function handler(req, res) {
  const name = req.query.name;
  res.status(200).json(data.photo.filter(obj => obj.name == name))
}
