export default (msg: string, status: number, data: any) => ({
  data: data,
  message: msg || 'Success',
  status: status || 200,
  success: 'OK'
});
