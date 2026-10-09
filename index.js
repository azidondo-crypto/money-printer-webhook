const express = require('express');
const app = express();
app.use(express.text({ type: '*/*' }));

const BOT_TOKEN = '8984850102:AAEtYA5_ctg8HNMB2nQLRyq3uAnYn89aLPg';
const CHAT_ID = '-1003853245247';

app.post('/webhook', async (req, res) => {
  const message = req.body || 'Alert fired but no message content was sent';

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message })
  });

  res.status(200).send('OK');
});

app.get('/', (req, res) => res.send('Webhook is live'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
