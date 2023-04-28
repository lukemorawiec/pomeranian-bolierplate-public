import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { SubRouteExercise1 } from './Exercise1/router-data';

export const blockRouterMetaData = [SubRouteExampleMetaData, SubRouteExercise1];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
