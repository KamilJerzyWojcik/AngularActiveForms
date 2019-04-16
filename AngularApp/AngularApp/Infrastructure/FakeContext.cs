using AngularApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp.Infrastructure
{
    public class FakeContext
    {

        public static List<User> seedData()
        {
            List<User> data = new List<User>();

            data.Add(new User
            {
                Id = 1,
                Username = "Eduweb user",
                Email = "Sincere@april.biz",
                Address = new Address
                {
                    Street = "Kulas light",
                    Suite = "Apt. 556",
                    City = "Gwenborough",
                    Zipcode = "92998-3847",
                    Geo = new Geo
                    {
                        Lat = -37.3159M,
                        Lng = 81.1496M
                    }
                },
                Phone = "1-770-736-8031 x56442",
                Website = "hildegard.pl",
                Company = new Company
                {
                    Name = "Romaguera-Crona",
                    CatchPhrase = "Multi-Layered client-server neural-net",
                    Bs = "harness real-time e-markets"
                },
                Roles = new List<Role>() { Role.USER }

            });

            data.Add(new User
            {
                Id = 2,
                Username = "scary Admin",
                Email = "Admin@july.biz",
                Address = new Address
                {
                    Street = "Victor night",
                    Suite = "Suite 26",
                    City = "London",
                    Zipcode = "21398-3847",
                    Geo = new Geo
                    {
                        Lat = -46.3159M,
                        Lng = 34.1496M
                    }
                },
                Phone = "1-345-346-8561 x12342",
                Website = "admin.pl",
                Company = new Company
                {
                    Name = "Karol-Corona",
                    CatchPhrase = "Single-Layered server nonneural-net",
                    Bs = "honey nonreal-time e-markets"
                },
                Roles = new List<Role>() { Role.ADMIN }
            });

            data.Add(new User
            {
                Id = 3,
                Username = "Nice VIP",
                Email = "SuperVIP@august.biz",
                Address = new Address
                {
                    Street = "Imperial shine",
                    Suite = "road 226",
                    City = "Brighton",
                    Zipcode = "21398-1297",
                    Geo = new Geo
                    {
                        Lat = -12.3159M,
                        Lng = 98.1496M
                    }
                },
                Phone = "8-546-987-1234 x18742",
                Website = "VIPcompany.pl",
                Company = new Company
                {
                    Name = "Super-VIP",
                    CatchPhrase = "cookies server neural-net",
                    Bs = "harness nonreal-time e-markets"
                },
                Roles = new List<Role>() { Role.VIP }
            });

            return data;
        }
    }
}
