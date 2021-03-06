import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateSuggestion1624126147061
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "suggestions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "text",
            type: "varchar",
          },
          {
            name: "votes",
            type: "integer",
          },
          {
            name: "user_name",
            type: "varchar",
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp"
          }
        ],
        foreignKeys: [
          {
            name: "SuggestionUser",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("suggestions");
  }
}
