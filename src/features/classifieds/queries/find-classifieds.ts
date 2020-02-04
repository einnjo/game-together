import { Classified } from "../classified";
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
      params.classifiedId
    );

    await this.classifiedRepository.flush();

    return classifieds;
  }
}

export interface FindClassifiedsDto {
  classifiedId: string;
}
