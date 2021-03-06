import { ConfigModule } from 'src/config/config.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresTypeOrmConfigService } from './postgres-typeorm-config';

@Module({

    imports: [
        TypeOrmModule.forRootAsync({
            imports: [Config],
            useClass: PostgresTypeOrmConfigService
        })
    ]
})
export class DatabaseModule {}
