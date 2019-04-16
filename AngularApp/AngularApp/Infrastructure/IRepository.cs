using AngularApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularApp.Infrastructure
{
    public interface IRepository
    {
        List<User> Users { get; }
    }
}
