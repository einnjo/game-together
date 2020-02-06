import {
  Controller,
  Body,
  Get,
  Post,
  Query,
  Param,
  Delete,
  Response
} from "@nestjs/common";
import {
  CreateClassified,
  CreateClassifiedDto
} from "./commands/create-classified";
import {
  AddCommentToClassified,
  AddCommentToClassifiedDto
} from "./commands/add-comment-to-classified";
import {
  FindClassifieds,
  FindClassifiedsDto
} from "./queries/find-classifieds";
import { DeleteClassified } from "./commands/delete-classified";
import { DeleteCommentFromClassified } from "./commands/delete-comment-from-classified";
import { Classified } from "./classified";
import { GetClassified } from "./queries/get-classified";
import * as express from "express";

@Controller("classifieds")
export class ClassifiedController {
  constructor(
    private readonly createClassifiedCommand: CreateClassified,
    private readonly deleteClassifiedCommand: DeleteClassified,
    private readonly addCommentToClassifiedCommand: AddCommentToClassified,
    private readonly deleteCommentFromClassifiedCommand: DeleteCommentFromClassified,
    private readonly findClassifiedsQuery: FindClassifieds,
    private readonly getClassifiedQuery: GetClassified
  ) {}

  @Post()
  async createClassified(
    @Body() params: CreateClassifiedDto,
    @Response() res: express.Response
  ): Promise<Classified> {
    const classified = await this.createClassifiedCommand.execute(params);

    return classified;
  }

  @Delete(":classifiedId")
  async deleteClassified(
    @Param("classifiedId") classifiedId: string
  ): Promise<void> {
    await this.deleteClassifiedCommand.execute({ classifiedId });
  }

  @Post(":classifiedId/comments")
  async addCommentToClassified(
    @Param("classifiedId") classifiedId: string,
    @Body() params: Pick<AddCommentToClassifiedDto, "content">,
    @Response() res: express.Response
  ): Promise<Classified> {
    const classified = await this.addCommentToClassifiedCommand.execute({
      ...params,
      classifiedId
    });

    return classified;
  }

  @Delete(":classifiedId/comments/:commentId")
  async deletCommentFromClassified(
    @Param("classifiedId") classifiedId: string,
    @Param("commentId") commentId: string
  ): Promise<void> {
    await this.deleteCommentFromClassifiedCommand.execute({
      classifiedId,
      commentId
    });
  }

  @Get()
  async findClassifieds(
    @Query() params: FindClassifiedsDto
  ): Promise<Classified[]> {
    const classifieds = await this.findClassifiedsQuery.execute(params);

    return classifieds;
  }

  @Get(":classifiedId")
  async getClassified(
    @Param("classifiedId") classifiedId: string
  ): Promise<Classified> {
    const classified = await this.getClassifiedQuery.execute({
      classifiedId
    });

    return classified;
  }
}
