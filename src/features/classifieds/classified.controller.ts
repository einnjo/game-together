import {
  Controller,
  Body,
  Get,
  Post,
  Query,
  Param,
  Delete,
  Render,
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

@Controller()
export class ClassifiedController {
  constructor(
    private readonly createClassifiedCommand: CreateClassified,
    private readonly deleteClassifiedCommand: DeleteClassified,
    private readonly addCommentToClassifiedCommand: AddCommentToClassified,
    private readonly deleteCommentFromClassifiedCommand: DeleteCommentFromClassified,
    private readonly findClassifiedsQuery: FindClassifieds,
    private readonly getClassifiedQuery: GetClassified
  ) {}

  @Post("classifieds")
  async createClassified(
    @Body() params: CreateClassifiedDto,
    @Response() res: express.Response
  ): Promise<void> {
    const classified = await this.createClassifiedCommand.execute(params);

    return res.redirect(303, `/classifieds/${classified.id}`);
  }

  @Delete("classifieds/:classifiedId")
  async deleteClassified(
    @Param("classifiedId") classifiedId: string
  ): Promise<void> {
    await this.deleteClassifiedCommand.execute({ classifiedId });
  }

  @Post("classifieds/:classifiedId/comments")
  async addCommentToClassified(
    @Param("classifiedId") classifiedId: string,
    @Body() params: Pick<AddCommentToClassifiedDto, "content">,
    @Response() res: express.Response
  ): Promise<void> {
    const classified = await this.addCommentToClassifiedCommand.execute({
      ...params,
      classifiedId
    });

    return res.redirect(303, `/classifieds/${classified.id}`);
  }

  @Delete("classifieds/:classifiedId/comments/:commentId")
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
  @Render("index")
  async findClassifieds(
    @Query() params: FindClassifiedsDto
  ): Promise<{ classifieds: Classified[] }> {
    const classifieds = await this.findClassifiedsQuery.execute(params);

    return { classifieds };
  }

  @Get("classifieds/:classifiedId")
  @Render("classified")
  async getClassified(
    @Param("classifiedId") classifiedId: string
  ): Promise<{ classified: Classified }> {
    const classified = await this.getClassifiedQuery.execute({
      classifiedId
    });

    return { classified };
  }
}
