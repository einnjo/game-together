import { Classified } from "../classified";
import { EntityRepository } from "mikro-orm";
import { Injectable, Inject } from "@nestjs/common";
import { Repositories } from "src/constants";

@Injectable()
export class DeleteClassified {
  constructor(
    @Inject(Repositories.Classified)
    private readonly classifiedRepository: EntityRepository<Classified>
  ) {}

  async execute(params: DeleteClassifiedDto): Promise<void> {
    await this.classifiedRepository.nativeDelete(params.classifiedId);
    await this.classifiedRepository.flush();
  }
}

export interface DeleteClassifiedDto {
  classifiedId: string;
}
