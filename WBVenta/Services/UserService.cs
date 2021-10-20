using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WBVenta.Models;
using WBVenta.Models.Common;
using WBVenta.Models.Request;
using WBVenta.Models.Response;
using WBVenta.Tools;

namespace WBVenta.Services
{
    public class UserService : IUserService
    {
        private readonly AppSetting _appSetting;

        public UserService(IOptions<AppSetting> appSetting)
        {
            _appSetting = appSetting.Value;
        }

        public UserResponse Auth(AuthRequest model)
        {
            UserResponse userResponse = new UserResponse();

            using (var db = new Venta_systemContext())
            {
                string sPassword = Encrypt.GetSHA256(model.Password);

                var usuario = db.Usuarios.Where(d => d.Email == model.Email &&
                                                    d.Password == sPassword).FirstOrDefault();

                if (usuario == null) return null;

                userResponse.Email = usuario.Email;
                userResponse.Token = GetToken(usuario);
            }

            return userResponse;
        }

        private string GetToken(Usuario usuario)
        {
            var tokenHundler = new JwtSecurityTokenHandler();

            var llave = Encoding.ASCII.GetBytes(_appSetting.SecretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(ClaimTypes.NameIdentifier, usuario.Id.ToString()),
                        new Claim(ClaimTypes.Email, usuario.Email)
                    }
                    ),
                    Expires = DateTime.UtcNow.AddDays(60),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(llave), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHundler.CreateToken(tokenDescriptor);

            return tokenHundler.WriteToken(token);
        }
    }
}
