/*
 * Copyright (c) [2024] [Primsoft]
 *
 * Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
 * de este software y los archivos de documentación asociados (el "Software"), para
 * tratar en el Software sin restricción, incluyendo sin limitación los derechos a
 * usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender
 * copias del Software.
 *
 * EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
