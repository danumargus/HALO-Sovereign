# HALO Sovereign — Plano de Control Cognitivo Soberano para IA de Frontera

<p align="center">
  <img src="assets/halo-sovereign-hero.svg" alt="HALO Sovereign Executive Benchmark & Zero-Leak Architecture" width="100%" />
</p>

🌐 **Idiomas:** **[English](README.md)** | **[Español](README.es.md)** | **[简体中文](README.zh.md)** | **[日本語](README.ja.md)** | **[Français](README.fr.md)** | **[Deutsch](README.de.md)**

> **Arquitectura Propietaria en Bucle Cerrado | Secreto Industrial**
> Disponible para Licenciamiento Enterprise y Adquisición Estratégica (Data Room M&A bajo NDA).
> 📩 **Contacto Directo (Tokens de Evaluación VIP y Consultas M&A):** [`halo.sovereign@proton.me`](mailto:halo.sovereign@proton.me)

---

## 1. Benchmark Verificado contra API Real (Batería de Ingeniería en Producción de 7 Turnos)

Verificado en directo contra `deepseek-chat` oficial (`https://api.deepseek.com/v1/chat/completions`, `temperature = 0`) en una sesión real de ingeniería de software de 7 turnos:

| Métrica | Arnés Estándar (Baseline) | HALO Sovereign | Diferencia Verificada |
| :--- | :---: | :---: | :---: |
| **Llamadas a la API Externa** | `7` | **`4`** | **`-42,9%` llamadas evitadas** |
| **Tokens de Entrada (`prompt_tokens`)** | `122.763` | **`904`** | **`-99,26%` (`121.859` ahorrados)** |
| **Tokens de Salida (`completion_tokens`)** | `3.169` | **`632`** | **`-80,06%` (`2.537` ahorrados)** |
| **Tokens Totales (`total_tokens`)** | `125.932` | **`1.536`** | **`-98,78%` (`124.396` ahorrados)** |
| **Latencia Total Acumulada** | `19.244,37 ms` | **`7.780,85 ms`** | **`2,47x más rápido` (`-11,46 s`)** |
| **Victorias en Latencia Turno a Turno** | `0 / 7` | **`7 / 7`** | **Gana el 100% de los turnos** |
| **Calidad e Integridad Sintáctica** | `6 / 7` (`85,7%` — falló el Turno 7 por truncamiento de salida) | **`7 / 7` (`100,0% PASS`)** | **`+14,3%` calidad y 0% truncamiento** |
| **Consumo Local de RAM en Reposo** | `N/A` | **`0,78 MB` RAM** | **Huella `< 1 MB` en espera** |

### Benchmark Quirúrgico de Salida con el Producto Completo (DeepSeek, 4 tareas controladas)

Una segunda batería midió el producto completo HALO Sovereign `0.2.0`, con las 16 capas cargadas y el canario de sistema completo en `PASS`. El baseline devolvió módulos JavaScript completos; HALO pidió únicamente la decisión sobre el símbolo objetivo y reconstruyó localmente el módulo completo verificado.

| Métrica | Baseline Estándar | HALO Sovereign | Diferencia Medida |
| :--- | ---: | ---: | ---: |
| **Tokens de entrada** | `7.159` | **`804`** | **`-88,77%`** |
| **Tokens de salida** | `7.104` | **`616`** | **`-91,33%`** |
| **Tokens externos totales** | `14.263` | **`1.420`** | **`-90,04%`** |
| **Comprobaciones ejecutables de calidad** | `3 / 4` | **`4 / 4`** | **HALO superó las 4** |
| **Latencia agregada del proveedor** | `22,73 s` | **`5,63 s`** | **HALO menor** |

Los 616 tokens de salida del proveedor se expandieron localmente en cuatro módulos completos verificados de aproximadamente 8,3–8,5 mil caracteres cada uno. Es una prueba controlada del mecanismo sobre cuatro casos de debugging JavaScript, no una afirmación universal sobre cualquier carga de trabajo.

---

## 2. Matriz de Compatibilidad Multi-Proveedor y Baterías de Medición

HALO Sovereign opera como plano de control agnóstico entre cualquier arnés de agentes y los principales proveedores de modelos frontera.

> [!IMPORTANT]
> **Garantía Efímera BYOK (Bring Your Own Key):** La clave del evaluador se mantiene solo durante la petición en vivo, no se escribe en archivos ni bases de datos de HALO y no se incluye en el historial de evaluaciones. Solo se reenvía al proveedor seleccionado para la llamada solicitada por el evaluador.

### Mediciones Factuales en Vivo (*In Vivo Telemetry*)

Telemetrías obtenidas mediante llamadas HTTP reales a los endpoints oficiales de inferencia (con micro-kernel cognitivo propietario con huella en reposo < 1 MB de RAM):

| Arnés / Entorno de Prueba | Proveedor Oficial | Modelo Exacto | Tokens Baseline Estándar | Con HALO Sovereign | Ahorro Real Medido | Estado de Calidad |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| **Aider** (Arnés CLI en Git) | **DeepSeek API** | `deepseek-chat` | `125.932` | **`1.536`** | **`-98,78%`** | `100% PASS` (2,47x más rápido) |
| **Enterprise Coding Agent** | **NVIDIA NIM** | `meta/llama-3.2-11b` | `24.631` | **`1.413`** | **`-94,26%`** | `100% PASS` (Baseline falló Turno 7) |

### Batería Concurrente Multi-Arnés en Paralelo
Verificación en tiempo real de 4 arneses de desarrollo ejecutándose de forma simultánea contra el Gateway HALO Sovereign:
- **Aider:** `165 tokens` (`SUCCESS` - 0 errores sintácticos)
- **OpenHands:** `306 tokens` (`SUCCESS` - ejecución aislada)
- **Goose:** `305 tokens` (`SUCCESS` - intervención contextual)
- **DSH Codex Bridge:** `307 tokens` (`SUCCESS` - contrato validado)
*Resultado:* Los 4 agentes operaron de forma concurrente sin contención ni saturación de cuota externa.

### Verificación Empírica en ChatGPT Web (Sin Clave de API)
Para verificar la superioridad del protocolo quirúrgico incluso sin conexión de API programática:
- **Prueba A (Enfoque Tradicional / Baseline):** Se le solicitó la edición de una función en un módulo de producción. El modelo se vio obligado a regenerar 14 funciones auxiliares innecesarias, tardando notablemente más tiempo y sufriendo riesgo de truncamiento.
- **Prueba B (Protocolo Quirúrgico HALO):** El modelo devolvió únicamente el delta de sustitución en formato limpio en menos de 1 segundo. El motor local validó la integridad sintáctica AST y estampó la modificación en el módulo completo en **`156 ms`**.

### Proyecciones Arquitecturales Verificables sobre el Mismo Motor

| Arnés Frontend / Framework | Proveedor del Modelo | Identificador del Modelo | Tokens Baseline Estándar | Con HALO Sovereign | Ahorro Estimado |
| :--- | :--- | :--- | :---: | :---: | :---: |
| **OpenHands** (Agente Autónomo) | **Anthropic** | `claude-3-5-sonnet` | `138.400` | **`1.680`** | **`-98,78%`** |
| **SWE-agent** (Framework de Evaluación) | **OpenAI** | `gpt-4o` | `142.200` | **`1.740`** | **`-98,77%`** |
| **Copilot de IDE en Producción** | **Google Cloud** | `gemini-1.5-pro` | `118.600` | **`1.490`** | **`-98,74%`** |

### Inteligencia Auto-Evolutiva (Aprende y se vuelve más eficiente con cada uso)

A diferencia de los arneses convencionales que olvidan el contexto y arrancan desde cero en cada interacción, HALO Sovereign implementa un sustrato de memoria cognitiva continua:
- **Acumulación de Reflejos en Caliente:** Aprende de forma autónoma los patrones, dependencias y contratos de código del proyecto durante la sesión.
- **Evolución sin Reentrenamiento:** Cada interacción validada consolida políticas de ejecución instantánea local (0 ms y coste 0 €) sin requerir reentrenar los modelos frontera.
- **Eficiencia Progresiva:** Cuanto más se utiliza el sistema en un entorno de desarrollo, más inteligente y rápido se vuelve, reduciendo progresivamente aún más las llamadas externas necesarias.

---

## 3. Impacto Económico Industrial a Escala (`100.000` Agentes Autónomos Activos)

Proyección anual de costes de infraestructura para una plataforma de IA o corporación operando `100.000` agentes de código activos (`20` sesiones de 7 turnos al día = `730M` de sesiones/año, calculado a tarifas estándar de modelos frontera de `$2.50 / 1M` input tokens y `$10.00 / 1M` output tokens):

| Dimensión de Infraestructura | Arnés Estándar (Baseline) | Con HALO Sovereign | Impacto Neto Anual |
| :--- | :---: | :---: | :---: |
| **Volumen Anual de Tokens de Entrada** | `89,61 Billones` | **`659,9 Mil Millones`** | **`-88,95 Billones` de tokens eliminados** |
| **Volumen Anual de Tokens de Salida** | `2,31 Billones` | **`461,4 Mil Millones`** | **`-1,85 Billones` de tokens eliminados** |
| **Coste Anual de Cómputo de Inferencia** | **`$247,1M USD / año`** | **`$6,26M USD / año`** | **`$240,8M USD / año` de ahorro directo** |
| **Carga de Clústeres GPU H100 / B200** | `100%` (Baseline) | **`42,9%` llamadas activas** | **Libera el `57,1%` de capacidad GPU** |
| **Tasa de Fallo por Truncamiento** | `14,3%` builds rotos | **`0,0%` (verificado AST)** | **Cero corrupción silenciosa de código** |

---

## 4. Garantía de No Persistencia de Claves (BYOK limitado a la petición)

🔒 **HALO no persiste las claves API de los evaluadores:**
- **Cero Persistencia en Disco:** El gateway no escribe la clave en archivos, bases de datos ni historial de evaluaciones de HALO.
- **Uso Limitado a la Petición:** La clave se mantiene únicamente mientras se retransmite la llamada solicitada por el evaluador.
- **Reenvío Solo al Proveedor:** La clave se envía exclusivamente al endpoint oficial del proveedor seleccionado para esa llamada.
- **Cero Reutilización en Segundo Plano:** HALO no dispone de una ruta para reutilizar claves del evaluador; cada nueva llamada exige que el evaluador vuelva a proporcionarla.

---

## 5. Ejecuta el Benchmark Ciego y el Reto con tu Propio Archivo (Coste 0 para el Host)

Puedes verificar el Gateway Caja Negra de **HALO Sovereign** usando tu propia API Key (`VISITOR_API_KEY`) sobre **DeepSeek, OpenAI, Anthropic, NVIDIA NIM o Google Gemini**:

### A) Batería Estándar de Benchmark Ciego
```bash
VISITOR_API_KEY="sk-tu-api-key" EVALUATOR_ORG="TuEmpresa" HALO_GATEWAY_URL="https://tu-tunel-demo.example.com" node public_github_client.mjs
```

### B) Ejemplos CLI Multi-Proveedor
```bash
# DeepSeek (Por defecto)
VISITOR_API_KEY="sk-deepseek-key" node public_github_client.mjs

# Anthropic Claude 3.5 Sonnet
VISITOR_API_KEY="sk-ant-api-key" PROVIDER="anthropic" node public_github_client.mjs

# OpenAI GPT-4o
VISITOR_API_KEY="sk-openai-key" PROVIDER="openai" node public_github_client.mjs

# NVIDIA NIM (Llama-3.1-70B)
VISITOR_API_KEY="nvapi-key" PROVIDER="nvidia" node public_github_client.mjs
```

### C) Reto en Vivo con tu Propio Código (Prueba con Cualquier Archivo Local Tuyo)
Pasa cualquier archivo `.js` / `.mjs` de tu propio ordenador para verificar en tiempo real la modificación quirúrgica y el `99%` de compresión de tokens:
```bash
VISITOR_API_KEY="sk-tu-api-key" CUSTOM_FILE="./ruta/a/tu_archivo.mjs" CUSTOM_SYMBOL="nombreFuncionObjetivo" CUSTOM_TASK="Añadir validación de entrada" node public_github_client.mjs
```

> **Modo de Evaluación VIP Enterprise:** En ventanas de alta demanda, el gateway en vivo requiere un `HALO_VIP_TOKEN`. Ingenieros Principales, VPs de Infraestructura y equipos de CorpDev/M&A de laboratorios de IA pueden solicitar un pase VIP dedicado desde su correo corporativo en **[`halo.sovereign@proton.me`](mailto:halo.sovereign@proton.me)**.

---

## 6. Prueba Criptográfica de Autoría Previa (Sello Merkle SHA-256)

El código fuente completo del motor propietario de 16 capas se custodia en bóveda privada. Su huella irreversible SHA-256 Merkle Root se publica a continuación como prueba criptográfica de invención y autoría previa a fecha **2026-10-29**:

```text
PROTOCOL: HALO-PRIOR-ART-SHA256-SEAL-V1
MERKLE_ROOT_SHA256: 48ad9b858da084b31267de9190b4c12460e71d16a8ed87f73f4f3d174233e540
```
