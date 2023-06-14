import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { SideEffectsData } from './SideEffects/router-data';
import { routerData as ApiRequestsRouterData } from './ApiRequests/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  SideEffectsData,
  ApiRequestsRouterData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
