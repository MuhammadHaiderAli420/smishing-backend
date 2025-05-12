import mongoose from 'mongoose';

const ReportLogSchema = new mongoose.Schema({
  sender: String,
  reportedAt: {
    type: Date,
    default: Date.now
  }
});

const ReportLog = mongoose.model('ReportLog', ReportLogSchema);
export default ReportLog;
