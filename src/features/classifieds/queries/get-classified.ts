import { Classified } from "../classified";
import { EntityRepository } from "mikro-orm";
import { Injectable, Inject } from "@nestjs/common";
import { Repositories } from "src/constants";

@Injectable()
export class GetClassified {
  constructor(
    @Inject(Repositories.Classified)
    private readonly classifiedRepository: EntityRepository<Classified>
  ) {}

  async execute(params: GetClassifiedDto): Promise<Classified> {
    const classified = await this.classifiedRepository.findOneOrFail(
      params.classifiedId
    );

    await this.classifiedRepository.flush();

    return classified;
  }
}

export interface GetClassifiedDto {
  classifiedId: string;
}
