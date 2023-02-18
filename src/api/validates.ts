import { object, string, enums, date, optional } from 'superstruct'

export const createValidate = object({
  userId: string(),
  type: enums(['user', 'bot']),
})

export const getValidate = object({
  userId: optional(string()),
  type: optional(enums(['user', 'bot'])),
  createdAt: optional(date()),
  start: optional(string()),
  limit: optional(string()),
  sort: optional(enums(['asc', 'desc'])),
})
