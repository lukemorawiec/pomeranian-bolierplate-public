import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { WelcomeViewRouterMetaData } from './WelcomeView/router-data';
import { SubRouteExample1 } from './Exercise1/router-data';
import { SubRouteExample2 } from './Exercise2/router-data';
import { SubRouteExample3 } from './Exercise3/router-data';
import { SubRouteExample4 } from './Exercise4/router-data';
import { SubRouteExample5 } from './MaterialUIBasicElements/router-data';
import { SubRouteExample6 } from './MUITemplateDashboard/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  WelcomeViewRouterMetaData,
  SubRouteExample1,
  SubRouteExample2,
  SubRouteExample3,
  SubRouteExample4,
  SubRouteExample5,
  SubRouteExample6,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
