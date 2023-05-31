import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { booleanRouterMetaData } from './Boolean/router-data';
import { routerMetaData as valuesAndCommentsRouterData } from './ValuesAndComments/router-data';
import { routerMetaData as hitTheMoleRouterData } from './HitTheMole/router-data';
import { routerMetaData as memoGameRouterData } from './MemoGame/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  booleanRouterMetaData,
  valuesAndCommentsRouterData,
  hitTheMoleRouterData,
  memoGameRouterData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
