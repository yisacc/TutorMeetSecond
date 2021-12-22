import { Alert } from "@material-ui/lab"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const ApiErrorMessage = props => {
  const classes = useStyles()

  const { errorMessage } = props
  return (
    <div className={classes.root}>
      <Alert severity='error'>
        <ul>
          {Object.keys(errorMessage).map(function (key) {
            return <li>{errorMessage[key]}</li>
          })}
        </ul>
      </Alert>
    </div>
  )
}
export default ApiErrorMessage
