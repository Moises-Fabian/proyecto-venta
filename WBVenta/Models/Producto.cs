﻿using System;
using System.Collections.Generic;

#nullable disable

namespace WBVenta.Models
{
    public partial class Producto
    {
        public Producto()
        {
            Conceptos = new HashSet<Concepto>();
        }

        public long Id { get; set; }
        public string Nombre { get; set; }
        public decimal PrecioUnitario { get; set; }
        public decimal Costo { get; set; }

        public virtual ICollection<Concepto> Conceptos { get; set; }
    }
}
