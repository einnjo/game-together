import { Module } from "@nestjs/common";
import { EntityManagerProvider, ClassifiedRepositoryProvider } from "./db";
import { ConfigProvider } from "./config";
import { ClassifiedController } from "./features/classifieds/classified.controller";
import { CreateClassified } from "./features/classifieds/commands/create-classified";
import { DeleteClassified } from "./features/classifieds/commands/delete-classified";
import { AddCommentToClassified } from "./features/classifieds/commands/add-comment-to-classified";
import { DeleteCommentFromClassified } from "./features/classifieds/commands/delete-comment-from-classified";
import { FindClassifieds } from "./features/classifieds/queries/find-classifieds";
import { GetClassified } from "./features/classifieds/queries/get-classified";

@Module({
  imports: [],
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
export class AppModule {}
