using System;
using System.Collections.Generic;

#nullable disable

namespace WBVenta.Models
{
    public partial class Ventum
    {
        public Ventum()
        {
            Conceptos = new HashSet<Concepto>();
        }

        public long Id { get; set; }
        public DateTime Fecha { get; set; }
        public decimal? Total { get; set; }

        public virtual ICollection<Concepto> Conceptos { get; set; }
    }
}
