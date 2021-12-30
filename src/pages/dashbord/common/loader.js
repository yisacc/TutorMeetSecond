import Loading from '../../../assets/images/loading1.gif'
export const Loader=()=>{
    return(
        <span id='uploading'>
          <img
              src={Loading}
              style={{
                  margin: 0,
                  padding: 0,
                  marginLeft: "30px",
                  position: "relative",
                  top: "28px",
                  width:'40px',
              }}

          />
        </span>
    )
}
