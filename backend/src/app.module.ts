import { Module } from "@nestjs/common";
import { ClassifiedModule } from "./features/classifieds/classified.module";

@Module({
  imports: [ClassifiedModule]
})
export class AppModule {}
