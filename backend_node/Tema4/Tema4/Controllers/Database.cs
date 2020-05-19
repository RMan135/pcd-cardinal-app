using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tema4.Entities;

namespace Tema4.Controllers
{
    public class Database
    {
        public static readonly List<Post> posts = new List<Post>();

        public static readonly Dictionary<Guid, string> images = new Dictionary<Guid, string>();
    }
}
