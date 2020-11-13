import { Classified } from "../classified";
import { EntityRepository } from "mikro-orm";
import { Injectable, Inject } from "@nestjs/common";
import { Repositories } from "../../../constants";
import { Comment } from "../comment";

@Injectable()
export class DeleteCommentFromClassified {
  constructor(
    @Inject(Repositories.Classified)
    private readonly classifiedRepository: EntityRepository<Classified>
  ) { }

  async execute(params: DeleteCommentFromClassifiedDto): Promise<Classified> {
    const classified = await this.classifiedRepository.findOneOrFail(
      params.classifiedId
    );

    classified.comments = classified.comments.filter(
      (c: Comment) => c.id !== params.commentId
    );

    await this.classifiedRepository.flush();

    return classified;
  }
}

export interface DeleteCommentFromClassifiedDto {
  classifiedId: string;
  commentId: string;
}
