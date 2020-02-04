import {
  IdEntity,
  Entity,
  PrimaryKey,
  Property,
  SerializedPrimaryKey
} from "mikro-orm";
import { ObjectId } from "mongodb";
import { Comment } from "./comment";

export type Continent =
  | "ASIA"
  | "AFRICA"
  | "NORTH_AMERICA"
  | "SOUTH_AMERICA"
  | "ANTARTICA"
  | "EUROPE"
  | "AUSTRALIA";
export type PlayKind = "Casual" | "Serious" | "Any";

@Entity()
export class Classified implements IdEntity<Classified> {
  @PrimaryKey()
  _id: ObjectId;

  @SerializedPrimaryKey()
  id!: string;

  @Property()
  title!: string;

  @Property()
  game: string;

  @Property()
  minAge: number;

  @Property()
  maxAge: number;

  @Property()
  playKind: PlayKind;

  @Property()
  continent: Continent;

  @Property()
  comments: Comment[];

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(
    title: string,
    game: string,
    minAge: number,
    maxAge: number,
    continent: Continent,
    playKind: PlayKind
  ) {
    this.title = title;
    this.game = game;
    this.continent = continent;
    this.playKind = playKind;
    this.minAge = minAge;
    this.maxAge = maxAge;
    this.comments = [];
  }
}
