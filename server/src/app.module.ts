import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    NotesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'combyne-client/build'),
      renderPath: '/',
      serveStaticOptions: {
        redirect: true,
      },
    }),
  ],
})
export class AppModule {}
