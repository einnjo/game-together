import { Classified, PlayKind, Continent, Platform } from "../classified";
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
      params.continent,
      params.platform
    );
    await this.classifiedRepository.persistAndFlush(classified);

    return classified;
  }
}

export interface CreateClassifiedDto {
  title: string;
  game: string;
  continent: Continent;
  platform: Platform;
}
