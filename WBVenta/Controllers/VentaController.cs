using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WBVenta.Models;
using WBVenta.Models.Request;
using WBVenta.Models.Response;

namespace WBVenta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VentaController : ControllerBase
    {
        [HttpPost]
        public IActionResult add(VentaRequest model)
        {
            Respuesta respuesta = new Respuesta();

            try
            {
                using (Venta_systemContext db = new Venta_systemContext())
                {
                    var venta = new Ventum();
                    venta.Total = model.Total;
                    venta.Fecha = DateTime.Now;
                    venta.IdCliente = model.IdCliente;
                    db.Venta.Add(venta);
                    db.SaveChanges();

                    foreach (var modelConcepto in model.Conceptos)
                    {
                        var concepto = new Models.Concepto();
                        concepto.Cantidad = modelConcepto.Cantidad;
                        concepto.IdProducto = modelConcepto.IdProducto;
                        concepto.PrecioUnitario = modelConcepto.PrecioUnitario;
                        concepto.IdVenta = venta.Id;
                        db.Conceptos.Add(concepto);
                        db.SaveChanges();
                    }

                    respuesta.Exito = 1;
                }
            }
            catch (Exception ex)
            {

                respuesta.Mensaje = ex.Message;
            }

            return Ok();
        }
    }
}
