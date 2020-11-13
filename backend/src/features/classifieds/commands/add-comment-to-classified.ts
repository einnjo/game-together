import { Classified } from "../classified";
import { EntityRepository } from "mikro-orm";
import { Injectable, Inject } from "@nestjs/common";
import { Repositories } from "../../../constants";
import { Comment } from "../comment";

@Injectable()
export class AddCommentToClassified {
  constructor(
    @Inject(Repositories.Classified)
    private readonly classifiedRepository: EntityRepository<Classified>
  ) { }

  async execute(params: AddCommentToClassifiedDto): Promise<Classified> {
    const classified = await this.classifiedRepository.findOneOrFail(
      params.classifiedId
    );

    const comment = new Comment(params.content);
    classified.comments.push(comment);

    await this.classifiedRepository.flush();

    return classified;
  }
}

export interface AddCommentToClassifiedDto {
  classifiedId: string;
  content: string;
}
