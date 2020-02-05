import { Classified, Continent, Platform } from "../classified";
import { EntityRepository } from "mikro-orm";
import { Injectable, Inject } from "@nestjs/common";
import { Repositories } from "src/constants";

@Injectable()
export class FindClassifieds {
  constructor(
    @Inject(Repositories.Classified)
    private readonly classifiedRepository: EntityRepository<Classified>
  ) {}

  async execute(params: FindClassifiedsDto): Promise<Classified[]> {
    const classifieds = await this.classifiedRepository.find(
      this.queryFromFindClassifiedsDto(params)
    );
    await this.classifiedRepository.flush();

    return classifieds;
  }

  private queryFromFindClassifiedsDto(
    params: FindClassifiedsDto
  ): FindClassifiedsQuery {
    const query: FindClassifiedsQuery = {};

    // Mongo driver does not respect undefined.
    // driver.find({continent: undefined})
    // will not return all documents as expected.
    // We must therefore only add a key to the query
    // if an explicit value is specified.
    if (params.continent !== undefined) {
      query.continent = params.continent;
    }
    if (params.platform !== undefined) {
      query.platform = params.platform;
    }
    if (params.titleOrGame !== undefined) {
      query.$text = { $search: params.titleOrGame };
    }

    return query;
  }
}

interface FindClassifiedsQuery {
  platform?: Platform;
  continent?: Continent;
  $text?: { $search: string };
}

export interface FindClassifiedsDto {
  platform?: Platform;
  continent?: Continent;
  titleOrGame?: string;
}
