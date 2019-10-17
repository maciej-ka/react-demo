import development from './config/development';
import preproduction from './config/preproduction';
import production from './config/production';
import staging from './config/staging';
import reveng from './config/reveng';

export default key => {
  switch (process.env.REACT_APP_ENV) {
    case 'production':
      return production[key];
    case 'preproduction':
      return preproduction[key];
    case 'staging':
      return staging[key];
    case 'reveng':
      return reveng[key];
    default:
      return development[key];
  }
};
