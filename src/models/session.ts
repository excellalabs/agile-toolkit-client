import { Vote } from './vote'

export class Session {
  public name: string = ''
  public votes: Vote[] = []
  public flipped: boolean = false
}
