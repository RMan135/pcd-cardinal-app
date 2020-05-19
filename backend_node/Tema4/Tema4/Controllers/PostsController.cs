using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Tema4.Entities;

namespace Tema4.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Post>> Get()
        {
            return Ok(Database.posts.Select(p => new
            {
                Title = p.Title,
                Description = p.Description,
                Image = Database.images[p.Image]
            }));
        }

        [HttpPost]
        public ActionResult<IEnumerable<Post>> Post([FromQuery]Post post)
        {
            Database.posts.Add(post);

            return Ok(post);
        }

        [HttpPost("photo")]
        public async Task<ActionResult> Post()
        {
            var id = Guid.NewGuid();

            using (var reader = new StreamReader(Request.Body))
            {
                var body = await reader.ReadToEndAsync();
                Database.images.Add(id, body);
            }
            return Ok(new { Id = id });
        }

        [HttpGet("photo/{id}")]
        public ActionResult Post(Guid id)
        {
            return Ok(Database.images[id]);
        }
    }
}
