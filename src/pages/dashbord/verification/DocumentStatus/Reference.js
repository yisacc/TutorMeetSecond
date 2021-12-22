import { Link } from 'react-router-dom'

const Reference = () => {
  return (
    <div id="refblock">
      <div class="cardheader">
        <h2 class="cardtitle">References</h2>
        &nbsp;&nbsp;
        <span style={{ 'font-size': '12px' }}>
          <i
            class="fas fa-plus-circle"
            style={{ position: 'relative', left: '0px', top: '3px' }}
          ></i>
          &nbsp;
          <Link to="/members/add-reference">Add a Reference </Link>
        </span>
      </div>
      <div class="cardcontent">
        <i
          class="fas fa-2x fa-times-circle"
          style={{ position: 'relative', top: '7px' }}
        ></i>{' '}
        You have not added any references. Please{' '}
        <Link to="/members/add-reference">Add a Reference </Link>.
      </div>
    </div>
  )
}
export default Reference
