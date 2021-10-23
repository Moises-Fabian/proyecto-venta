﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WBVenta.Models.Request
{
    public class VentaRequest
    {
        public int IdCliente { get; set; }

        public int Total { get; set; }
        public List<Concepto> Conceptos { get; set; }

        public VentaRequest()
        {
            this.Conceptos = new List<Concepto>();     
        }
    }

    public class Concepto
    {
        public int Cantidad { get; set; }

        public decimal PrecioUnitario { get; set; }

        public decimal Importe { get; set; }

        public int IdProducto { get; set; }
    }
}
