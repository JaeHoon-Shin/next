// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from "next-connect";
var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'svc.sel3.cloudtype.app',
  port: '32513',
  user: 'user1',
  password: '1234',
  database: 'animal'

})
const handler = nc();

handler.get(async (req, res) => {

  db.query("select * from member", (err, result) => {
    console.log(result);
    res.send(result)
  })
})
export default handler
// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })

//   db.connect();

//   db.query('select * from member' , function(err,res){
//     console.log(res)
//   })

// }
