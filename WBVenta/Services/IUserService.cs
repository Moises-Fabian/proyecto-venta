using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WBVenta.Models.Request;
using WBVenta.Models.Response;

namespace WBVenta.Services
{
    public interface IUserService
    {   //token - Login
        UserResponse Auth(AuthRequest model);
    }
}
