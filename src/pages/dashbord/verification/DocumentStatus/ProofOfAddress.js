import { Link } from 'react-router-dom'

const ProofOfAddress = () => {
  return (
    <>
      <div class="cardheader">
        <h2 class="cardtitle">Proof of Address</h2>
        &nbsp;&nbsp;
        <span style={{ 'font-size': '12px' }}>
          <i
            class="fas fa-plus-circle"
            style={{ position: 'relative', left: '0px', top: '3px' }}
          ></i>
          &nbsp;<Link to="/members/upload-poa">Upload Proof of Address</Link>
        </span>
      </div>
      <div class="cardcontent">
        <i
          class="fas fa-2x fa-times-circle"
          style={{ position: 'relative', top: '7px' }}
        ></i>{' '}
        You have not uploaded proof of address. Please{' '}
        <Link to="/members/upload-poa">Upload Proof of Address</Link>.
      </div>
    </>
  )
}
export default ProofOfAddress
