import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { SideEffectsData } from './SideEffects/router-data';
import { routerData as TodoListRouterData } from './TodoList/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  SideEffectsData,
  TodoListRouterData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
