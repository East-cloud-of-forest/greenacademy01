const ADD_MEMO = 'memo/ADD_MEMO'
const REMOVE_MEMO = 'memo/REMOVE_MEMO'

export const addMemo = (payload) => ({
  type: ADD_MEMO,
  payload,
})

export const removeMemo = (payload) => ({
  type: REMOVE_MEMO,
  payload
})

const initalState = [
  {
    id: 1,
    title: '첫번재',
    memo: '첫번째 메모입니다',
  },
  {
    id: 2,
    title: '두번재',
    memo: '두번째 메모입니다',
  },
]

let id = 2

const memoReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_MEMO:
      return [
        ...state,
        {
          id: ++id,
          title: action.payload.title,
          memo: action.payload.memo,
        },
      ]
    case REMOVE_MEMO:
      console.log("remove", action.payload)
      return state.filter(a=>a.id != action.payload)
    default:
      return state
  }
}

export default memoReducer
