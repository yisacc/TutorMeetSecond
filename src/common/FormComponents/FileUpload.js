import { useRef, useCallback, useEffect, useState } from "react"
import { formatBytes } from "../../utils/FormatBytes"
import { useDropzone } from "react-dropzone"
const FileUpload = (props) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const { register, errors, setValue } = props

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      setValue("file", files)
    },
  })
  useEffect(() => {
    register(...register.name, { name: "file" })
  }, [])
  useEffect(() => {
    setSelectedFile(acceptedFiles[0])
  }, [acceptedFiles])

  return (
    <>
      {selectedFile && (
        <div class='fileblock'>
          <span class='filedesc'>
            <span id='filename1' class='filename'>
              {selectedFile.path}
            </span>
            &nbsp;&nbsp;
            <span id='filesize1' class='filesize'>
              ({formatBytes(selectedFile.size)})
            </span>
          </span>
          <button
            onClick={() => setSelectedFile(null)}
            type='button'
            class='closefile'
          >
            <span aria-hidden='true'>×</span>
          </button>
        </div>
      )}
      {!selectedFile && (
        <div
          {...getRootProps({ onClick: (e) => e.preventDefault() })}
          class='uploadcontainer'
        >
          <input type='file' name='file' {...getInputProps()} />

          <div class='upload-area' id='uploadfile'>
            <h2 id='draganddropheader'>
              Drag and Drop or Click to upload file
            </h2>
          </div>
        </div>
      )}
      <span style={{ color: "red" }}>{errors.file?.message}</span>
    </>
  )
}

export default FileUpload
