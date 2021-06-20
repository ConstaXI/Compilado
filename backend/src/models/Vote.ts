import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { v4 } from "uuid";
import Suggestion from "./Suggestion";
import User from "./User";

@Entity("votes")
export default class Vote {
  @PrimaryColumn()
  readonly id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @OneToOne(() => Suggestion)
  @JoinColumn({ name: "suggestion_id" })
  suggestion: Suggestion;

  @Column()
  suggestion_id: string;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
