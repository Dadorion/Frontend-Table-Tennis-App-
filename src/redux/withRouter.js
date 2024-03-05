import { useParams } from 'react-router-dom'

export function withRouter(Children) {
  return function (props) {
    const match = { params: useParams() }
    return <Children {...props} match={match} />
  }
}
