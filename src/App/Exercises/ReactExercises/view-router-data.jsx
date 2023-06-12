import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { SideEffectsData } from './SideEffects/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, SideEffectsData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
