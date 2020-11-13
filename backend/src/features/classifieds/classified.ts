import {
  Entity,
  Property,
} from "mikro-orm";
import { BaseEntity } from "./base-entity";
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
export class Classified extends BaseEntity {
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

  constructor(
    title: string,
    game: string,
    continent: Continent,
    platform: Platform
  ) {
    super();
    this.title = title;
    this.game = game;
    this.continent = continent;
    this.platform = platform;
    this.comments = [];
  }
}
