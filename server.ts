import express from 'express';
import { ReportItemSchema } from '@socket/api-types';

const app = express();
app.use(express.json());

app.post('/report-item', (req, res) => {
  // Use Zod to validate the incoming request body
  const result = ReportItemSchema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }

  console.log("Validated Item:", result.data);
  res.json({ message: "Item received!", data: result.data });
});

app.listen(3001, () => console.log('🚀 API running on http://localhost:3001'));