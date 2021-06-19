import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 } from "uuid";
import User from "./User";

@Entity("sugestions")
export default class Sugestion {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_name: string;

  @Column()
  text: string;

  @Column()
  votes: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = v4();
    }
  }
}
