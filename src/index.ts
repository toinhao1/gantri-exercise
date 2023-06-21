import { initApi } from './initApi';
import { initDatabase } from './initDatabase';

export default (async () => {
  try {
    await initApi();
    await initDatabase();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
