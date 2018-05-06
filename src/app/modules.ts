import { SharedModule } from "./shared/shared.module";
import { HomeModule } from "./home/home.module";
import { AuthModule } from "./auth/auth.module";

export const MODULES = [
  SharedModule,
  HomeModule,
  AuthModule
]