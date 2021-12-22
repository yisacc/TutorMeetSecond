import { Link } from 'react-router-dom'

const PhotoID = () => {
  return (
    <tr>
      <td height="30">
        <div class="infopanel-wrapper">
          <span style={{ position: 'relative', top: '-2px' }}>Photo ID </span>{' '}
          &nbsp;
          <a class="mobno" id="item-1" data-panel="panel-1">
            <i class="far fa-question-circle"></i>
          </a>
          <div class="infopanelcontaner">
            <div id="panel-1" class="infopanel">
              <p>
                We only accept photo ID in the form of a passport or driving
                license.
              </p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <i
          class="far fa-times-circle"
          style={{ position: 'relative', top: '2px' }}
        ></i>{' '}
        <span class="profilescorealert">
          <span class="infobad">Not Provided</span>{' '}
        </span>
      </td>
      <td>
        <Link to="/members/upload-id">Upload ID</Link>
      </td>
    </tr>
  )
}
export default PhotoID
