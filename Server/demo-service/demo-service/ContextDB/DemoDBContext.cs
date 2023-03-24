using demo_service.Entity;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace demo_service.ContextDB
{
    public class DemoDBContext : DbContext
    {
        public DemoDBContext(DbContextOptions<DemoDBContext> options) : base(options)
        {
        }

        public DbSet<Entity.DataSet> DataSets { get; set; }
       
    }
}
