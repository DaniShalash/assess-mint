import NodeCache from 'node-cache';

/**
 * 
 * Cache instance.
 * I use node-cache as a cache library.
 * Much faster than setting up a DB, which is out of the scope of this project.
 * 
 */
export const CacheInstance = new NodeCache({
  stdTTL: 0,
  checkperiod: 0,
  useClones: true,
  maxKeys: -1,
  deleteOnExpire: false
});
// ----------------------
// -----------------------------------------------------------------------
