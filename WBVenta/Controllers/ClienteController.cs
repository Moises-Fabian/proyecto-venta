using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WBVenta.Models;

namespace WBVenta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        [HttpGet]
        public ActionResult get()
        {
            using (Venta_systemContext db = new Venta_systemContext())
            {
                var lst = db.Clientes.ToList();
                return Ok(lst);
            }
        }
    }
}
