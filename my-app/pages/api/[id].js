
import { executeQuery } from './db';



const handler = async (req, res) => {
  const { method, body, query } = req;

  const selectDataId = async () => {
    
    let data = await executeQuery('select * from myTest', [query.id]);
    res.json(data);
  }

  const updateDataId = async () => {
    let {name, email, date} = body;
    let data = await executeQuery('update myTest set name=?, email=?, date=? where id=?', [name,email,date,query.id]);
    res.json();
  }

  const deleteDataId = async () => {
    let data = await executeQuery('delete from myTest where id=?', [query.id]);
    res.json(data);
  }


  switch (method) {

    case "GET": selectDataId(); break;
    case "PUT": updateDataId(); break;
    case "DELETE": deleteDataId(); break;
  }

}

export default handler;

