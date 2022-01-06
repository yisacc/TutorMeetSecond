import React from "react";
import {Link} from "react-router-dom";

const AcademicPrice = props => {
    const { register, errors,priceSet,updatelessonprice } = props
    return (
        <div
            name='academicform'
            id='academicform'
        >
            <div className='cardtable tablewrap'>

                {(errors.levelList||errors.primary_rate||errors.ks3_rate||errors.gcse_rate||errors.a_level_rate||errors.degree_rate||
                    errors.adult_learner_rate) &&
                <p className='alert'>
                    {errors.levelList?.message&&(<>
                    {errors.levelList?.message}
                            <br/>
                            </>
                    )}
                    {errors.primary_rate?.message&&(<>
                    {errors.primary_rate?.message}
                            <br/>
                        </>
                    )}
                    {errors.ks3_rate?.message&&(<>
                    {errors.ks3_rate?.message}
                            <br/>
                        </>
                    )}
                    {errors.gcse_rate?.message&&(<>
                    {errors.gcse_rate?.message}
                            <br/>
                        </>
                    )}
                    {errors.a_level_rate?.message&&(<>
                    {errors.a_level_rate?.message}
                            <br/>
                        </>
                    )}
                    {errors.degree_rate?.message&&(<>
                    {errors.degree_rate?.message}
                            <br/>
                        </>
                    )}
                    {errors.adult_learner_rate?.message&&(<>
                    {errors.adult_learner_rate?.message}
                            <br/>
                        </>
                    )}
                </p>}
                <table className='table' style={{"margin-top": "20px"}}>
                    <tbody>
                    <tr>
                        <th>Level</th>
                        <th>Your Hourly Rate</th>
                        <th>Student Rate</th>
                    </tr>
                    <tr>
                        <td>
                            <label
                                className='checkcontainer'
                                style={{position: "relative", top: "-10px"}}
                            >
                                <input
                                    type='checkbox'
                                    id='primary'
                                    name='primary'
                                    {...register('primary')}
                                />
                                Primary<span className='checkmark'></span>
                            </label>
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                style={{width: "80%", display: "inline-block"}}
                                className='forminputtext'
                                type='text'
                                id='primary_rate'
                                name='primary_rate'
                                {...register('primary_rate')}
                                maxLength='8'
                                onChange={(e)=>updatelessonprice(e,'primary_lessonprice')}
                            />
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                className='fadedrate'
                                style={{width: "80%", display: "inline-block"}}
                                title='This is the hourly rate which will appear in your profile'
                                type='text'
                                name='primary_lessonprice'
                                id='primary_lessonprice'
                                maxLength='200'
                                readOnly={true}
                                defaultValue={priceSet.primary_lessonprice?priceSet.primary_lessonprice:''}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                className='checkcontainer'
                                style={{position: "relative", top: "-10px"}}
                            >
                                <input type='checkbox' id='ks3' name='ks3' {...register('ks3')}/>
                                KS3<span className='checkmark'></span>
                            </label>
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                style={{width: "80%", display: "inline-block"}}
                                className='forminputtext'
                                type='text'
                                id='ks3_rate'
                                name='ks3_rate'
                                {...register('ks3_rate')}
                                maxLength='8'
                                onChange={(e)=>updatelessonprice(e,'ks3_lessonprice')}
                            />
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                className='fadedrate'
                                style={{width: "80%", display: "inline-block"}}
                                title='This is the hourly rate which will appear in your profile'
                                type='text'
                                name='ks3_lessonprice'
                                id='ks3_lessonprice'
                                maxLength='200'
                                readOnly={true}
                                defaultValue={priceSet.ks3_lessonprice?priceSet.ks3_lessonprice:''}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                className='checkcontainer'
                                style={{position: "relative", top: "-10px"}}
                            >
                                <input type='checkbox' id='gcse' name='gcse' {...register('gcse')}/>
                                GCSE<span className='checkmark'></span>
                            </label>
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                style={{width: "80%", display: "inline-block"}}
                                className='forminputtext'
                                type='text'
                                id='gcse_rate'
                                name='gcse_rate'
                                {...register('gcse_rate')}
                                maxLength='8'
                                onChange={(e)=>updatelessonprice(e,'gcse_lessonprice')}
                            />
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                className='fadedrate'
                                style={{width: "80%", display: "inline-block"}}
                                title='This is the hourly rate which will appear in your profile'
                                type='text'
                                name='gcse_lessonprice'
                                id='gcse_lessonprice'
                                maxLength='200'
                                readOnly={true}
                                defaultValue={priceSet.gcse_lessonprice?priceSet.gcse_lessonprice:''}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                className='checkcontainer'
                                style={{position: "relative", top: "-10px"}}
                            >
                                <input
                                    type='checkbox'
                                    id='a_level'
                                    name='a_level'
                                    {...register('a_level')}
                                />
                                A-Level<span className='checkmark'></span>
                            </label>
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                style={{width: "80%", display: "inline-block"}}
                                className='forminputtext'
                                type='text'
                                id='a_level_rate'
                                name='a_level_rate'
                                {...register('a_level_rate')}
                                maxLength='8'
                                onChange={(e)=>updatelessonprice(e,'a_level_lessonprice')}
                            />
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                className='fadedrate'
                                style={{width: "80%", display: "inline-block"}}
                                title='This is the hourly rate which will appear in your profile'
                                type='text'
                                name='a_level_lessonprice'
                                id='a_level_lessonprice'
                                maxLength='200'
                                readOnly={true}
                                defaultValue={priceSet.a_level_lessonprice?priceSet.a_level_lessonprice:''}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                className='checkcontainer'
                                style={{position: "relative", top: "-10px"}}
                            >
                                <input
                                    type='checkbox'
                                    id='degree'
                                    name='degree'
                                    {...register('degree')}
                                />
                                Degree<span className='checkmark'></span>
                            </label>
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                style={{width: "80%", display: "inline-block"}}
                                className='forminputtext'
                                type='text'
                                id='degree_rate'
                                name='degree_rate'
                                {...register('degree_rate')}
                                maxLength='8'
                                onChange={(e)=>updatelessonprice(e,'degree_lessonprice')}
                            />
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                className='fadedrate'
                                style={{width: "80%", display: "inline-block"}}
                                title='This is the hourly rate which will appear in your profile'
                                type='text'
                                name='degree_lessonprice'
                                id='degree_lessonprice'
                                maxLength='200'
                                readOnly={true}
                                defaultValue={priceSet.degree_lessonprice?priceSet.degree_lessonprice:''}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label
                                className='checkcontainer'
                                style={{position: "relative", top: "-10px"}}
                            >
                                <input
                                    type='checkbox'
                                    id='adult_learner'
                                    name='adult_learner'
                                    {...register('adult_learner')}
                                />
                                Adult Learner<span className='checkmark'></span>
                            </label>
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                style={{width: "80%", display: "inline-block"}}
                                className='forminputtext'
                                type='text'
                                id='adult_learner_rate'
                                name='adult_learner_rate'
                                {...register('adult_learner_rate')}
                                maxLength='8'
                                onChange={(e)=>updatelessonprice(e,'adult_learner_lessonprice')}
                            />
                        </td>
                        <td>
                            <span>ETB</span>&nbsp;
                            <input
                                className='fadedrate'
                                style={{width: "80%", display: "inline-block"}}
                                title='This is the hourly rate which will appear in your profile'
                                type='text'
                                name='adult_learner_lessonprice'
                                id='adult_learner_lessonprice'
                                maxLength='200'
                                readOnly={true}
                                defaultValue={priceSet.adult_learner_lessonprice?priceSet.adult_learner_lessonprice:''}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <em>Your current commission rate is set at 25%</em>
                <input type='hidden' name='lastval2' value='lastval2'/>
            </div>
        </div>
    )
}
export default AcademicPrice
