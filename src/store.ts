import { observable } from 'mobx';
import { onPageClosing, onPageLoading } from './common/components/Page';
import { loadContextShareStore, saveContextShareStore, setContextShareStore, starupContextShareStore } from './common/utils/ContextShareStore';

const store = observable({
  /** 运营配置 */
  appData: null as AppData | null,
});

onPageLoading(async () => {
  console.log('[Store]', '初始化共享上下文');
  setContextShareStore(store as any);
  console.log('[Store]', '加载共享上下文...');
  await loadContextShareStore();
  console.log('[Store]', '启用共享上下文');
  starupContextShareStore();
});

onPageClosing(async () => {
  saveContextShareStore();
});

export default store;
