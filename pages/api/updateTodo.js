import { table, getMinifiedRecord } from './utils/Airtable';
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import OwnsRecord from './middleware/OwnsRecord';

export default OwnsRecord(async (req, res) => {
  const { user } = await getSession(req, res);
  const { id, fields } = req.body;
  try {
    const updatedRecords = await table.update([{ id, fields }]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(updatedRecords[0]));
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: 'something went wrong!' });
  }
});
