import express from 'express';
import { logReportAndCheckAlert } from '../controllers/reportlog.controller.js';

const router = express.Router();

// Dummy route to simulate a user reporting a scam message
router.post('/simulate-report', async (req, res) => {
  const { sender } = req.body;

  if (!sender) return res.status(400).json({ message: 'Sender is required' });

  await logReportAndCheckAlert(sender);
  res.status(200).json({ message: `Report for sender ${sender} logged.` });
});

export default router;
