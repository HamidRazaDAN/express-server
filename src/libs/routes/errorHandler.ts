export default function errorHandler(error: string, message: string, status: number) {
  return {
    error: error,
    message: message,
    status: status,
    timestamp: new Date
  };
}
