const CreateArticles = () => {
  return (
    <>
      <div class='card'>
        <div class='cardheader'>
          <h2 class='cardtitle'>Article Content</h2>
        </div>
        <div class='cardcontent'>
          <p>
            Here you can use this page to share resources or articles on your
            profile with other users. You can use our editor to format your
            article content. This resource can managed from within the members
            homepage.
          </p>
          <p class='important'>
            Tutors who offer articles on their profile receive a greater number
            of visits from potential students!
          </p>
          <form
            action='/members/create-resource-complete.asp'
            method='post'
            id='mailform'
            name='mailform'
          >
            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label for='articletitle'>Article Title</label>
                <input
                  name='articletitle'
                  id='articletitle'
                  class='forminputtext'
                  placeholder='Example: What are prime numbers'
                  type='text'
                />
              </div>
              <div class='columnsplititem'>
                <label for='articledesc'>Article Description </label>
                <input
                  name='articledesc'
                  id='articledesc'
                  class='forminputtext'
                  type='text'
                />
              </div>
            </div>
            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label for='category'>Subject</label>
                <select
                  name='category'
                  id='category'
                  class='forminputtext'
                  onchange='get_list(this.form.subject , this.value);'
                >
                  <option value='none' selected='selected'>
                    select:
                  </option>
                  <option value='1'>Academic</option>
                  <option value='4'>Arts</option>
                  <option value='5'>Health/Fitness</option>
                  <option value='146'>IT</option>
                  <option value='2'>Languages</option>
                  <option value='286'>Lifestyle</option>
                  <option value='3'>Music</option>
                  <option value='250'>Professional</option>
                </select>
              </div>
              <div class='columnsplititem'>
                <label for='subject'>&nbsp;</label>
                <select class='forminputtext' name='subject' id='subject'>
                  <option value='none'>select:</option>
                </select>
              </div>
            </div>
            <label for='editor'>Your Article Content</label>
            <div class='wysiwyg' style={{ width: "778px" }}>
              <div class='toolbar-wrap'>
                <ul role='menu' class='toolbar'>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='bold'
                    title='Bold'
                  >
                    bold
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='italic'
                    title='Italic'
                  >
                    italic
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='strikeThrough'
                    title='Strike-through'
                  >
                    strikeThrough
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='underline'
                    title='Underline'
                  >
                    underline
                  </li>
                  <li role='separator' class='separator'></li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='justifyCenter'
                    title='Justify Center'
                  >
                    justifyCenter
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='justifyFull'
                    title='Justify Full'
                  >
                    justifyFull
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='justifyLeft'
                    title='Justify Left'
                  >
                    justifyLeft
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='justifyRight'
                    title='Justify Right'
                  >
                    justifyRight
                  </li>
                  <li role='separator' class='separator'></li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='indent'
                    title='Indent'
                  >
                    indent
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='outdent'
                    title='Outdent'
                  >
                    outdent
                  </li>
                  <li role='separator' class='separator'></li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='subscript'
                    title='Subscript'
                  >
                    subscript
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='superscript'
                    title='Superscript'
                  >
                    superscript
                  </li>
                  <li role='separator' class='separator'></li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='redo'
                    title='Redo'
                  >
                    redo
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='undo'
                    title='Undo'
                  >
                    undo
                  </li>
                  <li role='separator' class='separator'></li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='insertOrderedList'
                    title='Insert Ordered List'
                  >
                    insertOrderedList
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='insertUnorderedList'
                    title='Insert Unordered List'
                  >
                    insertUnorderedList
                  </li>
                  <li role='separator' class='separator'></li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='insertHorizontalRule'
                    title='Insert Horizontal Rule'
                  >
                    insertHorizontalRule
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='insertImage'
                    title='Insert image'
                  >
                    insertImage
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='insertTable'
                    title='Insert table'
                  >
                    insertTable
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='code'
                    title='Code snippet'
                  >
                    code
                  </li>
                  <li role='separator' class='separator'></li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='h1'
                    title='Header 1'
                  >
                    h1
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='h2'
                    title='Header 2'
                  >
                    h2
                  </li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='h3'
                    title='Header 3'
                  >
                    h3
                  </li>
                  <li role='separator' class='separator'></li>
                  <li
                    role='menuitem'
                    unselectable='on'
                    class='removeFormat'
                    title='Remove formatting'
                  >
                    removeFormat
                  </li>
                </ul>
                <div style={{ clear: "both" }}></div>
              </div>
              <iframe
                src='javascript:false;'
                frameborder='0'
                id='editor-wysiwyg-iframe'
                style={{ "min-height": "292px", width: "778px" }}
              ></iframe>
              <textarea
                id='editor'
                style={{ height: "300px", display: "none" }}
                placeholder='
               Your Article Content '
              ></textarea>
            </div>
          </form>
          <br />
          <br />
          <br />
          <a onclick='postarticle(mailform);' class='btn btnsuccess'>
            Create Article{" "}
          </a>
        </div>
      </div>
    </>
  );
};
export default CreateArticles;
