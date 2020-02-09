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
  | "Asia"
  | "Africa"
  | "North America"
  | "South America"
  | "Antartica"
  | "Europe"
  | "Australia";

export type PlayKind = "Casual" | "Serious" | "Any";

export type Platform =
  | "Wii"
  | "Wii U"
  | "Switch"
  | "PS3"
  | "PS4"
  | "Xbox 360"
  | "Xbox One"
  | "PC";

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
  continent: Continent;

  @Property()
  platform: Platform;

  @Property()
  comments: Comment[];

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  constructor(
    title: string,
    game: string,
    continent: Continent,
    platform: Platform
  ) {
    this.title = title;
    this.game = game;
    this.continent = continent;
    this.platform = platform;
    this.comments = [];
  }
}
