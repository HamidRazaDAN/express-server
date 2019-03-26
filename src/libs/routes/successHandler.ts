export default (message: string, status: number, data: any) => ({
  data,
  message: message || 'Success',
  status: status || 200,
  success: 'OK',
});
