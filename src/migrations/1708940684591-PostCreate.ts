import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, TableUnique } from "typeorm";

export class PostCreate1708940684591 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createUniqueConstraint('store', new TableUnique({
            columnNames: ['name']
        }));
       
        await queryRunner.addColumn(
            "store",
            new TableColumn({
                name: "address",
                type: "varchar",
            },
            ),
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("store", "address")
    }

}
