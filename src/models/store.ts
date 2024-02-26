import { Column, Entity, OneToMany } from "typeorm"
import {
  Store as MedusaStore,
} from "@medusajs/medusa"
import { User } from "./user";
import { Product } from "./product";

@Entity()
export class Store extends MedusaStore {
  // TODO add relations
  @Column({ type: 'varchar' })
  address: string;

  @OneToMany(() => User, (user) => user?.store)
  members?: User[];

  @OneToMany(() => Product, (product) => product?.store)
  products?: Product[];
}