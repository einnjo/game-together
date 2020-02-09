import { Module } from "@nestjs/common";
import { EntityManagerProvider, ClassifiedRepositoryProvider } from "../../db";
import { ConfigProvider } from "../../config";
import { ClassifiedController } from "./classified.controller";
import { CreateClassified } from "./commands/create-classified";
import { DeleteClassified } from "./commands/delete-classified";
import { AddCommentToClassified } from "./commands/add-comment-to-classified";
import { DeleteCommentFromClassified } from "./commands/delete-comment-from-classified";
import { FindClassifieds } from "./queries/find-classifieds";
import { GetClassified } from "./queries/get-classified";

@Module({
  controllers: [ClassifiedController],
  providers: [
    ConfigProvider,
    EntityManagerProvider,
    ClassifiedRepositoryProvider,
    CreateClassified,
    DeleteClassified,
    AddCommentToClassified,
    DeleteCommentFromClassified,
    FindClassifieds,
    GetClassified
  ]
})
export class ClassifiedModule {}
