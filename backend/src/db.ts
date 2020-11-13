import { EntityManager, MikroORM } from "mikro-orm";
import { Config } from "./config";
import { Repositories } from "./constants";
import { BaseEntity } from "./features/classifieds/base-entity";
import { Classified } from "./features/classifieds/classified";

export const EntityManagerProvider = {
  provide: EntityManager,
  useFactory: async (config: Config) => {
    const db = await MikroORM.init({
      type: "mongo",
      entities: [BaseEntity, Classified],
      dbName: config.X_MONGO_DB,
      clientUrl: `mongodb://${config.X_MONGO_HOST}/?retryWrites=true&w=majority`
    });
    return db.em;
  },
  inject: [Config]
};

export const ClassifiedRepositoryProvider = {
  provide: Repositories.Classified,
  useFactory: (entityManager: EntityManager) => {
    return entityManager.getRepository(Classified);
  },
  inject: [EntityManager]
};
