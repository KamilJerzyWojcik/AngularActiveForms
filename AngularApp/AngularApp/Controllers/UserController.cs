using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularApp.Infrastructure;
using AngularApp.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AngularApp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IRepository _repository;

        public UserController(IRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("users")]
        public List<User> Get()
        {
            return _repository.Users;
        }
    }
}
