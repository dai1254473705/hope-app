// https://umijs.org/zh-CN/docs/runtime-config
export function onRouteChange({ matchedRoutes, location, routes, action }) {
  console.log('=routes==', routes, action);
}
