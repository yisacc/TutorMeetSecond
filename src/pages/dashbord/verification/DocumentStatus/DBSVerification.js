import { Link } from 'react-router-dom'

const DBSVerification = () => {
  return (
    <>
      <div class="cardheader">
        <h2 class="cardtitle">DBS Verification</h2>
        &nbsp;&nbsp;
        <span style={{ 'font-size': '12px' }}>
          {' '}
          <i
            class="fas fa-plus-circle"
            style={{ position: 'relative', left: '0px', top: '3px' }}
          ></i>
          &nbsp;<Link to="/members/upload-crb">Upload DBS Certificate</Link>
        </span>
        &nbsp;&nbsp;
        <span style={{ 'font-size': '12px' }}>
          <i
            class="fas fa-plus-circle"
            style={{ position: 'relative', left: '0px', top: '3px' }}
          ></i>
          &nbsp;
          <Link to="/members/dbs-application">Apply for DBS Certificate</Link>
        </span>
      </div>
      <div class="cardcontent">
        <i
          class="fas fa-2x fa-times-circle"
          style={{ position: 'relative', top: '7px' }}
        ></i>{' '}
        You have not uploaded any DBS certificates. Please{' '}
        <Link to="/members/upload-crb">Upload DBS Certificate</Link>.
      </div>
    </>
  )
}
export default DBSVerification
