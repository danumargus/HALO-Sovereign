import {readFileSync} from 'node:fs';

/**
 * HALO SOVEREIGN — PUBLIC BLIND BENCHMARK CLIENT
 *
 * - Zero Host Cost (BYOK): Runs using your own LLM API Key (`VISITOR_API_KEY`).
 * - Sends benchmark payloads (or your own custom source file) to the HALO Sovereign
 *   Black-Box Gateway and returns the verified output, token reduction telemetry,
 *   and cryptographic HMAC audit receipt.
 */

export async function runPublicBlindClient({
  gatewayUrl = process.env.HALO_GATEWAY_URL || 'http://127.0.0.1:8787',
  visitorApiKey = process.env.VISITOR_API_KEY || '',
  evaluatorOrg = process.env.EVALUATOR_ORG || 'independent',
  vipToken = process.env.HALO_VIP_TOKEN || '',
  provider = 'deepseek',
  mode = 'code_surgical',
  payload = {},
} = {}) {
  const res = await fetch(`${gatewayUrl.replace(/\/$/, '')}/v1/blind-benchmark`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-visitor-api-key': visitorApiKey,
      'x-evaluator-org': evaluatorOrg,
      'x-evaluation-token': vipToken,
    },
    body: JSON.stringify({
      provider,
      mode,
      ...payload,
    }),
  });

  const body = await res.json();
  return {
    httpStatus: res.status,
    body,
  };
}

if (import.meta.url === `file:///${process.argv[1]?.replace(/\\/g, '/')}`) {
  const apiKey = process.env.VISITOR_API_KEY || '';
  const gatewayUrl = process.env.HALO_GATEWAY_URL || 'http://127.0.0.1:8787';
  const provider = process.env.PROVIDER || 'deepseek';
  const customFile = process.env.CUSTOM_FILE || '';
  const customSymbol = process.env.CUSTOM_SYMBOL || '';
  const customTask = process.env.CUSTOM_TASK || '';

  const mode = customFile ? 'code_surgical' : process.env.DEMO_MODE || 'dry_run_demo';
  const payload = customFile
    ? {
        fileSource: readFileSync(customFile, 'utf8'),
        symbolName: customSymbol,
        taskInstruction: customTask,
      }
    : {};

  console.log('================================================================');
  console.log(' HALO SOVEREIGN — BLIND PUBLIC BENCHMARK CLIENT');
  console.log(' Zero Host Cost (BYOK) | Ephemeral Memory-Only API Key Guarantee');
  console.log(` Active Provider: ${provider.toUpperCase()}`);
  console.log('================================================================');

  runPublicBlindClient({
    gatewayUrl,
    visitorApiKey: apiKey,
    provider,
    mode,
    payload,
  }).then(({httpStatus, body}) => {
    console.log(`HTTP Status: ${httpStatus}`);
    console.log(JSON.stringify(body, null, 2));
  });
}
