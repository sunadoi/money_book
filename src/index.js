import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

class MoneyBook extends Component {
  constructor(props) {
    super(props)
    this.state = {books:[]}
  }
  componentDidMount() {
    this.setState({books: [
      {date: "1/1", item: "お年玉", amount: 10000},
      {date: "1/3", item: "ケーキ", amount: -500},
      {date: "2/1", item: "小遣い", amount: 3000},
      {date: "2/5", item: "漫画", amount: -600}
    ]})
  }
  addBook(date, item, amount) {
    const book = {date: date, item: item, amount: amount}
    this.setState({books: this.state.books.concat(book)})
  }

  render () {
    return (
      <div>
        <Title>小遣い帳</Title>
        <MoneyBookList books={this.state.books} />
        <MoneyEntry add={(date, item, amount) => this.addBook(date, item, amount)} />
      </div>
    )
  }
}

class MoneyEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {date: '', item: '', amount: '', payingIn: true}
  }
}

const MoneyBookItem = (props) => {
  const {date, item, amount} = props.book
  return (
    <tr>
      <td>{date}</td>
      <td>{item}</td>
      <td>{amount >= 0 ? amount : null}</td>
      <td>{amount < 0 ? -amount : null}</td>
    </tr>
  )
}

MoneyBookItem.propTypes = {
  book: PropTypes.object.isRequired
}

const Title = (props) => {
  return (<h1>{props.children}</h1>)
}

Title.propTypes = {
  children: PropTypes.string
}

ReactDOM.render(
  <MoneyBook />,
  document.getElementById('root')
)