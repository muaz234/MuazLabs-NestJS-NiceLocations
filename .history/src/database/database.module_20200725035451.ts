import { ConfigModule } from './../config/config.module';
import { ConfigModule } from 'src/config/co nfig.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresTypeOrmConfigService } from './postgres-typeorm-config';

@Module({

    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: PostgresTypeOrmConfigService
        })
    ]
})
export class DatabaseModule {}
