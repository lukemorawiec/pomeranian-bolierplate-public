import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { SideEffectsData } from './SideEffects/router-data';
import { routerData as TodoListRouterData } from './TodoList/router-data';
import { useRefMetaData } from './UseRef/router-data';
import { formsMetaData } from './Forms/router-data';
import { FormsValidationData } from './FormsValidation/router-data';
import { reduxRouterData } from './Redux/router-data';
import { todoList2MetaData } from './TodoList2/router-data';
import { form2MetaData } from './Form2/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  SideEffectsData,
  TodoListRouterData,
  useRefMetaData,
  formsMetaData,
  FormsValidationData,
  reduxRouterData,
  todoList2MetaData,
  form2MetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
