import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950">
        <div className="p-10 w-full">
          <h1 className="text-white text-2xl font-bold">
            MenuCraft
          </h1>

          <div className="mt-32">
            <h2 className="text-5xl font-bold text-white leading-tight">
              Empieza gratis en
              <br />
              <span className="text-orange-500">
                menos de 2 minutos.
              </span>
            </h2>

            <p className="text-gray-400 mt-6 text-lg">
              Crea tu cuenta y publica tu menú digital en cuestión de minutos.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border border-orange-500"></div>

              <span className="text-gray-300">
                Sin tarjeta de crédito para empezar
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border border-orange-500"></div>

              <span className="text-gray-300">
                Tu menú publicado en minutos
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border border-orange-500"></div>

              <span className="text-gray-300">
                Actualiza tu carta en tiempo real
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Panel derecho */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 w-full max-w-lg">
          {/* Stepper */}
          <div className="flex items-center mb-8">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm font-medium">
                1
              </div>

              <span className="text-xs text-orange-600 mt-2">
                Tu cuenta
              </span>
            </div>

            <div className="flex-1 h-px bg-gray-300 mx-4"></div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center text-sm">
                2
              </div>

              <span className="text-xs text-gray-400 mt-2">
                Tu restaurante
              </span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            Crea tu cuenta
          </h2>

          <p className="text-gray-500 mt-2">
            Después configuras tu restaurante
          </p>

          <form className="mt-8 space-y-5">
            {/* Nombre */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Nombre completo *
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="María García"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>

            {/* Correo */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Correo electrónico *
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="tu@restaurante.com"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Contraseña *
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Confirmar contraseña */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Confirmar contraseña *
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repite tu contraseña"
                  className="w-full border border-gray-300 rounded-lg pl-10 pr-10 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Términos */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1"
              />

              <p className="text-sm text-gray-600">
                Acepto los{" "}
                <span className="text-orange-600 cursor-pointer">
                  Términos de servicio
                </span>{" "}
                y la{" "}
                <span className="text-orange-600 cursor-pointer">
                  Política de privacidad
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition"
            >
              Continuar →
            </button>

            <div className="text-center mt-6">
              <span className="text-gray-600">
                ¿Ya tienes cuenta?
              </span>{" "}
              <Link
                to="/login"
                className="text-orange-600 font-medium hover:text-orange-700"
              >
                Inicia sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;