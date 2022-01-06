import { FormSelect } from "../../../../../common/FormComponents/FormSelect"
import {useEffect, useState} from "react";
import axiosInstance from "../../../../../utils/axios";

const SkillLevel = (props) => {
    const { register, errors } = props
    const [skillLevels,setSkillLevels]=useState([])
    useEffect(() => {
        axiosInstance
            .get("/api/lookups/all/skill-level")
            .then(response => {
                setSkillLevels(response.data.skillLevels)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const data = skillLevels?.map((skillLevel) => ({
        title: skillLevel.name,
        value: skillLevel.skillLevelId,
    }))
    data?.unshift({ title: "Select", value: "", selected: true })

    return (
        <div
            name='nonacademicform2'
            id='nonacademicform2'
        >
            <FormSelect
                register={register}
                name='level'
                label='Level'
                id='level'
                error={errors.level}
                class='forminputtext'
                options={data}
            />
        </div>
    )
}
export default SkillLevel
