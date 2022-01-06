import {FormInput} from "../../../../../common/FormComponents/FormInput";

const NonAcademicPrice = props => {
    const { register, errors,updatelessonprice,priceSet } = props
    return (
        <div
            name='nonacademicform'
            id='nonacademicform'
        >
            <FormInput
                register={register}
                name='rate'
                type='text'
                label='Hourly Rate (ETB):'
                id='rate'
                error={errors.rate}
                class='forminputtextpad'
                onChange={(e)=>updatelessonprice(e,'lessonprice')}
            />
            <p style={{"margin-top": "20px"}}>
                Profile Rate: (ETB)
                <input
                    type='text'
                    id='lessonprice'
                    name='lessonprice'
                    className='currencyfield'
                    disabled={true}
                    defaultValue={priceSet.lessonprice?priceSet.lessonprice:''}
                />
                <em>Your current commission rate is set at 25%</em>
                <input type='hidden' name='lastval' value='lastval'/>
            </p>
        </div>
    )
}
export default NonAcademicPrice
