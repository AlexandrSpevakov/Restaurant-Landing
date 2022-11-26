// Plugin
import delAsync from 'del';

// Config
import path from '../config/path.js';

export default () => {
   return delAsync(path.root);
}