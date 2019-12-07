import { ITeamListUserState } from 'store/teams/types'

export const DRAG_AND_DROP = 'DRAG_AND_DROP'

export interface ITaskState {
  id: string
  title: string
  team: string
  attach: number
  status: string
  score?: string
  line: number
  type: string
  users: ITeamListUserState[]
}

export interface ITasksDragAndDropAction {
  type: typeof DRAG_AND_DROP
  payload: {
    e: any
    type: string
  }
}
