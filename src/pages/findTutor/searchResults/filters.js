const Filter = () => {
  return (
    <>
      <div id='searchfilters' style={{ display: "flex" }}>
        <div class='filteritem'>
          <h3>
            <a
              class='contentogglearea'
              href="javascript:togglecontent('icontoggle10','pricerangetoggle', 'flip90rev')"
            >
              Price Range<i class='fas fa-chevron-down '></i>
            </a>
          </h3>
          <div id='pricerangetoggle'>
            <div id='pricerange' class='filterval'>
              50 - 500 +
            </div>
            <div
              id='slider-price-range'
              class='filterslider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content handle-pos-price'
            >
              <div
                class='ui-slider-range ui-corner-all ui-widget-header'
                style={{ left: "0%", width: "100%" }}
              ></div>
              <span
                tabindex='0'
                class='ui-slider-handle ui-corner-all ui-state-default'
                style={{ left: "0%" }}
              ></span>
              <span
                tabindex='0'
                class='ui-slider-handle ui-corner-all ui-state-default'
                style={{ left: "100%" }}
              ></span>
            </div>
          </div>
        </div>
        <div class='filteritem'>
          <h3>
            <a
              class='contentogglearea'
              href="javascript:togglecontent('icontoggle11','tutorratingtoggle', 'flip90rev')"
            >
              Tutor Rating<i class='fas fa-chevron-down'></i>
            </a>
          </h3>
          <div id='tutorratingtoggle'>
            <div id='tutorrating' class='filterval'>
              All
            </div>
            <div
              id='slider-tutor-rating'
              class='filterslider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content'
            >
              <div
                class='ui-slider-handle ui-corner-all ui-state-default'
                tabindex='0'
                style={{ left: "0%" }}
              ></div>
              <div
                class='ui-slider-range ui-corner-all ui-widget-header ui-slider-range-max'
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
        <div
          class='filteritem'
          id='onlineproxblock'
          style={{ display: "block" }}
        >
          <h3>
            <a
              class='contentogglearea'
              href="javascript:togglecontent('icontoggle16','onlineproximitytoggle', 'flip90rev')"
            >
              Online Tutor Proximity<i class='fas fa-chevron-down'></i>
            </a>
          </h3>
          <div id='onlineproximitytoggle' class='' style={{ display: "block" }}>
            <input
              type='text'
              id='onlinepostcode'
              name='onlinepostcode'
              placeholder='Enter Postcode'
              value=''
              onblur='javascript:getresults();'
            />
            <div id='onlineproximity' class='filtervalsmall'>
              Show All Tutors
            </div>
            <div
              id='slider-online-proximity'
              class='filterslider filterslidersmall ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content'
            >
              <div
                class='ui-slider-handle ui-corner-all ui-state-default'
                tabindex='0'
                style={{ left: "0%" }}
              ></div>
              <div
                class='ui-slider-range ui-corner-all ui-widget-header ui-slider-range-max'
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>
        </div>
        <div class='filteritem'>
          <h3>
            <a
              class='contentogglearea'
              href="javascript:togglecontent('icontoggle12','qualificationstoggle', 'flip90rev')"
            >
              Qualifications<i class='fas fa-chevron-down'></i>
            </a>
          </h3>
          <div id='qualificationstoggle' class='' style={{ display: "block" }}>
            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label class='checkbox'>
                  <input
                    id='chkteacher'
                    name='chkteacher'
                    type='checkbox'
                    value='1'
                    onchange='getresults();'
                  />
                  <div class='checkboxbox'>
                    <i class='icon fas fa-check'></i>
                  </div>
                  <div class='checkboxlabel'>Teachers Only</div>
                </label>
              </div>
              <div class='columnsplititem'>
                <label class='checkbox'>
                  <input
                    id='chkdegree'
                    name='chkdegree'
                    type='checkbox'
                    value='1'
                    onchange='getresults();'
                  />
                  <div class='checkboxbox'>
                    <i class='icon fas fa-check'></i>
                  </div>
                  <div class='checkboxlabel'>Has Degree</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class='filteritem'>
          <h3>
            <a
              class='contentogglearea'
              href="javascript:togglecontent('icontoggle13','gendertoggle', 'flip90rev')"
            >
              Gender
              <i class='fas fa-chevron-down'></i>
            </a>
          </h3>
          <div id='gendertoggle'>
            <div class='columnsplit'>
              <div class='columnsplititem'>
                <label class='checkbox'>
                  <input
                    id='chkmale'
                    name='chkmale'
                    type='checkbox'
                    value='1'
                    onchange='getresults();'
                    checked=''
                  />
                  <div class='checkboxbox'>
                    <i class='iconchecked fas fa-check'></i>
                  </div>
                  <div class='checkboxlabel'>Male</div>
                </label>
              </div>
              <div class='columnsplititem'>
                <label class='checkbox'>
                  <input
                    id='chkfemale'
                    name='chkfemale'
                    type='checkbox'
                    value='1'
                    onchange='getresults();'
                    checked=''
                  />
                  <div class='checkboxbox'>
                    <i class='iconchecked fas fa-check'></i>
                  </div>
                  <div class='checkboxlabel'>Female</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class='filteritem'>
          <h3>
            <a
              class='contentogglearea'
              href="javascript:togglecontent('icontoggle14','internationaltoggle', 'flip90')"
            >
              International Tutors
              <i class='fas fa-chevron-down'></i>
            </a>
          </h3>
          <div id='internationaltoggle' class='' style={{ display: "block" }}>
            <label class='checkbox'>
              <input
                id='chkinternational'
                name='chkinternational'
                type='checkbox'
                value='1'
                onchange='getresults();'
              />
              <div class='checkboxbox'>
                <i class='iconchecked fas fa-check'></i>
              </div>
              <div class='checkboxlabel'>Include International Tutors</div>
            </label>
          </div>
        </div>
        <div class='filteritem'>
          <h3>
            <a
              class='contentogglearea'
              href="javascript:togglecontent('icontoggle15','keywordtoggle', 'flip90')"
            >
              Keyword Search
              <i class='fas fa-chevron-down'></i>
            </a>
          </h3>
          <div id='keywordtoggle' class=''>
            <input
              type='text'
              id='searchtext'
              name='searchtext'
              placeholder='Enter keywords'
              value=''
              maxlength='100'
            />
            <a href='javascript:getresults();' class='cardbtn' id='applyfilter'>
              Apply
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Filter
