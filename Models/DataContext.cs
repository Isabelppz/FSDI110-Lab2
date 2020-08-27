using Microsoft.EntityFrameworkCore;

namespace ERP.Models 
{
    /* 
        Class to handle connection between DB and model classes

        **If you modify, change the models:
        1-Create a migration: dotnet ef migrations add someName
        2-Update database: dotnet ef database update 
    */

    public class DataContext: DbContext
    {
    public DataContext(DbContextOptions<DataContext> options): base(options) {

    }
    //specify the list of models (classes) that you want to become a table on the DB
    
    public DbSet<Car> Cars {get; set;}
    //public DbSet<Employee> Employee {get; set;}

    }
}