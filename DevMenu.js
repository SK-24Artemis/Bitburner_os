/** @param {NS} ns */
export async function main(ns) {
  globalThis._ModuleRaid = globalThis._ModuleRaid ?? (await import('https://unpkg.com/moduleraid/dist/moduleraid.module.js')).default;
  const ModuleRaid = globalThis._ModuleRaid;
  const mr = new ModuleRaid();
  const RouterModule = mr.findModule((module) => {
    return Object.values(module).some(obj => obj.toPage !== undefined);
  })[0];
  const Router = Object.values(RouterModule).find(obj => obj.toPage !== undefined);
  Router.toPage("Dev")
}
export function getRequire() {

  const chunk = webpackChunkbitburner;

  if (!chunk.some(m => m.some(i => i[0] == -1))) {
    let requireCache;
    chunk.push([[-1], {}, r => (requireCache = requireCache ?? r, requireCache)]);
  }

  return chunk.find(m => m.some(i => i[0] == -1))[2]();
}
