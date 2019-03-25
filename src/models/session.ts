import { Vote } from './vote'

export class Session {
  public votes: Vote[] = []
  public flipped: boolean = false
}
