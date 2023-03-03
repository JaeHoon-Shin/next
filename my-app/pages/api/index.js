
import { executeQuery } from './db';

const handler = async (req, res) => {

  const { method, body } = req;
  /*    function getData() {
      let data = executeQuery('select * from myTest',[]);
      console.log(data)
      res.send(data);
      
    } */


  const getData = async () => {
    try {
      let data = await executeQuery('select * from myTest order by id DESC', []);
      res.json(data)
    } catch (err) {
      res.send(err);
    }
  }

  const insertData = async () => {
    let { name, email, date } = body;

    let data = await executeQuery(
      'insert into myTest(name,email,date) value (?,?,?)',
      [name, email, date]
    );
    res.json(data)
  }

  switch (method) {
    case "GET": getData(); break;
    case "POST": insertData(); break;
  }
}


export default handler;

