export default (msg: string, status: number, data: any) => ({
  data,
  message: msg || 'Success',
  status: status || 200,
  success: 'OK',
});
