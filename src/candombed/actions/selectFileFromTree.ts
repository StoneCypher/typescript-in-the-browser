import { Action } from 'redux';
import { initialState, State } from '../actions/State';
import { store } from '../main';
import { projectFilesToTreeNodes } from '../projectActions';
import { TreeNode } from '../../common/ui-util/fileTreeUtil';


export function selectFileFromTree(state: State = initialState, action: SelectFileFromTreeAction): State {
  if (action.type === SelectFileFromTreeActionId && state.project && state.project.files) {
    if (action.node.isDirectory) {
      let d = state.ui.directoryExpandedNodeData.find(d => d.fileName === action.node.fileName)
      if (!d) {
        d = { expanded: true, fileName: action.node.fileName }
        state.ui.directoryExpandedNodeData.push(d)
      }

      Object.assign(d, { expanded: !d.expanded })
      const fileTreeNodes = projectFilesToTreeNodes(state)
      return Object.assign({}, state, {
        ui: Object.assign(state.ui, {
          directoryExpandedNodeData: state.ui.directoryExpandedNodeData,
          fileTreeNodes
        })
      })
    }
    else {
      return Object.assign({}, state, {
        selectedFile: action.node.fileName
      })
    }
  }
  return state
}

export const SelectFileFromTreeActionId: 'SelectFileFromTreeAction' = 'SelectFileFromTreeAction'
export function dispatchSelectFileFromTree(node: TreeNode) {
  store.dispatch({
    type: SelectFileFromTreeActionId,
    node
  })
}
interface SelectFileFromTreeAction extends Action {
  node: TreeNode
}