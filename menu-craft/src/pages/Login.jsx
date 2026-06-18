import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Panel izquierdo */}
      <AuthHero
        title="Tu carta digital,"
        highlight="en un escaneo."
        description="La plataforma de menús QR pensada para restaurantes mexicanos."
        benefits={[
          "Menú actualizable en tiempo real",
          "Códigos QR personalizados para tu marca",
          "Compatible con todos los dispositivos",
        ]}
      />

      {/* Panel derecho */}
      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-slate-900">
            Bienvenido de nuevo
          </h2>

          <p className="text-gray-500 mt-2">
            Inicia sesión en tu cuenta para continuar
          </p>

          <form className="mt-8 space-y-5">
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

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-orange-600 hover:text-orange-700"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition"
            >
              Iniciar sesión
            </button>

            <div className="mt-6 text-center">
              <span className="text-gray-600">
                ¿No tienes cuenta?
              </span>{" "}
              <Link
                to="/register"
                className="text-orange-600 font-medium hover:text-orange-700"
              >
                Regístrate gratis
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;