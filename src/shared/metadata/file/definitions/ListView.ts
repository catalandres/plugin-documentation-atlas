import { ListView } from '../../types/metadata.js';
import {
  Definition,
  getBasenameWithoutExtension,
  getNameOfSecondToLastFolderLevel,
  getFullNameForObjectComponent,
} from '../index.js';

export const LIST_VIEW: Definition = {
  name: 'ListView',
  list: 'listViews',
  extension: '.listView-meta.xml',
  metadataType: {} as ListView,
  setName: getBasenameWithoutExtension,
  setObjectname: getNameOfSecondToLastFolderLevel,
  setFullName: getFullNameForObjectComponent,
};
