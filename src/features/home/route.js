import { HomePage } from './';
import { HomePage2 } from './';



export default {
  path: '',
  childRoutes: [{ path: 'index', component: HomePage, isIndex: true },
                 { path: 'index2', component: HomePage2, isIndex: false }],
};
