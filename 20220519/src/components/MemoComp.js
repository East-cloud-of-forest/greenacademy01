import { Component } from 'react'

class MemoComp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      memo: [
        {
          id: 1,
          text: '내용',
        },
      ],
      id: 2,
      inputText: '',
    }
  }

  changeInputText = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  addMemo = () => {
    if (this.state.inputText) {
      this.setState({ id: this.state.id + 1 })
      let nextMemo = this.state.memo.concat({
        id: this.state.id,
        text: this.state.inputText,
      })
      this.setState({ memo: nextMemo })
      this.setState({ inputText: '' })
    }
  }

  deleteMemo(id) {
    let deletedmemo = this.state.memo.filter((a)=>(
      a.id !== id
    ))
    this.setState({ memo: deletedmemo })
  }

  render() {
    const { memo, inputText } = this.state
    return (
      <div>
        <h1>메모</h1>
        <input
          type="text"
          name="inputText"
          onChange={(e) => {
            this.changeInputText(e)
          }}
          value={inputText}
        ></input>
        <button
          onClick={() => {
            this.addMemo()
          }}
        >
          추가
        </button>
        <ul>
          {memo.map((a) => (
            <li key={a.id} onClick={() => {this.deleteMemo(a.id)}}>
              {a.text}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MemoComp
