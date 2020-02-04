import { Classified, PlayKind, Continent } from "../classified";
import { EntityRepository } from "mikro-orm";
import { Injectable, Inject } from "@nestjs/common";
import { Repositories } from "src/constants";

@Injectable()
export class CreateClassified {
  constructor(
    @Inject(Repositories.Classified)
    private readonly classifiedRepository: EntityRepository<Classified>
  ) {}

  async execute(params: CreateClassifiedDto): Promise<Classified> {
    const classified = new Classified(
      params.title,
      params.game,
      params.minAge,
      params.maxAge,
      params.continent,
      params.playKind
    );
    await this.classifiedRepository.persistAndFlush(classified);

    return classified;
  }
}

export interface CreateClassifiedDto {
  title: string;
  game: string;
  minAge: number;
  maxAge: number;
  continent: Continent;
  playKind: PlayKind;
}
