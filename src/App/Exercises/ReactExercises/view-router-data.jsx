import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { SideEffectsData } from './SideEffects/router-data';
import { routerData as TodoListRouterData } from './TodoList/router-data';
import { useRefMetaData } from './UseRef/router-data';
import { formsMetaData } from './Forms/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  SideEffectsData,
  TodoListRouterData,
  useRefMetaData,
  formsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
