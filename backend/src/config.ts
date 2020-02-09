import * as envalid from "envalid";
import path from "path";

const { str } = envalid;

export class Config {
  public static fromEnv(): Config {
    const env = envalid.cleanEnv(
      process.env,
      {
        X_MONGO_USER: str(),
        X_MONGO_PASSWORD: str(),
        X_MONGO_DB: str(),
        X_MONGO_HOST: str()
      },
      { strict: true, dotEnvPath: path.resolve(__dirname, "../.env") }
    );
    return new Config(
      env.X_MONGO_USER,
      env.X_MONGO_PASSWORD,
      env.X_MONGO_DB,
      env.X_MONGO_HOST
    );
  }

  constructor(
    public readonly X_MONGO_USER: string,
    public readonly X_MONGO_PASSWORD: string,
    public readonly X_MONGO_DB: string,
    public readonly X_MONGO_HOST: string
  ) {}
}

export const ConfigProvider = {
  provide: Config,
  useFactory: async () => {
    return Config.fromEnv();
  }
};
