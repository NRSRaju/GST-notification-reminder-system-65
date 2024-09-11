import axios from "axios";

const API_URL = "https://gst-reminder-notification-system-65.onrender.com/api";

export const registerGST = (recruiterData) =>
  axios.post(`${API_URL}/recruiters/register`, recruiterData);
export const generateInvoice = (invoiceData) =>
  axios.post(`${API_URL}/invoices/generate`, invoiceData);
export const downloadInvoice = (invoiceId) =>
  axios.get(`${API_URL}/invoices/download/${invoiceId}`);
export const getNotifications = (recruiterId) =>
  axios.get(`${API_URL}/notifications/${recruiterId}`);
