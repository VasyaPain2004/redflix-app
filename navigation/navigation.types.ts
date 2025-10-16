import { ComponentType } from "react"

export type TypeRootStackParamList = {
  auth: undefined
  home: undefined
} & TypeRootStackAdminList

type TypeRootStackAdminList = {
  admin: undefined
}

export interface IRoute {
  name: keyof TypeRootStackParamList
  component: ComponentType
  isAdmin?: boolean
}