import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresTypeOrmConfigService } from './postgres-typeorm-config';

@Module({

    imports: [
        TypeOrmModule.forRootAsync({
            imports: [Confi],
            useClass: PostgresTypeOrmConfigService
        })
    ]
})
export class DatabaseModule {}
