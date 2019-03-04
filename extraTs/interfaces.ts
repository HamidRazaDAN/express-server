export interface EmailType {
  traineeEmail: string,
  reviewerEmail: string
}

export interface UserType {
  all: string[],
  read: string[],
  write: string[],
  delete: string[]
}
