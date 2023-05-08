import { BaseEntity } from "../../../application/entities/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;
}
