using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace demo_service.Migrations
{
    /// <inheritdoc />
    public partial class MyFirstMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DataSets",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Start = table.Column<int>(type: "int", nullable: true),
                    End = table.Column<int>(type: "int", nullable: true),
                    Event = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DataSets", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DataSets");
        }
    }
}
