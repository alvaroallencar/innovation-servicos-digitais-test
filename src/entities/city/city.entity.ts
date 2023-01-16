import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cities")
export class City {
  @PrimaryGeneratedColumn("uuid")
  internalId: string;

  @Column()
  id: number;

  @Column({ length: 120 })
  name: string;
}
