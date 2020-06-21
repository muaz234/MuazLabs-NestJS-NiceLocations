import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from 'src/config/config.module';
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
