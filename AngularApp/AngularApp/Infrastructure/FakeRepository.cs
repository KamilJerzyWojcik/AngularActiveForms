using AngularApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp.Infrastructure
{
    public class FakeRepository : IRepository
    {
        private static List<User> _users { get; set; }

        static FakeRepository()
        {
            _users = FakeContext.seedData();
        }

        public List<User> Users => _users;

    }
}
