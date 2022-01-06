import * as yup from "yup"

export let AddSubjectSchema = yup
    .object({
        category: yup.string().required("Please select a subject category."),
        subject_list: yup.string().required("Please select a subject."),
        level:yup.string().when('category',{
                is:value=>value!=='KuUjN71tvWlINr76YYkAG',
                then:yup.string().required("Please select a level")
        }),
        rate:yup.string().when('category',{
                is:value=>value!=='KuUjN71tvWlINr76YYkAG',
                then:yup.string().required("The 'Hourly Rate' must only contain numbers eg. ETB150.00")
        }),
        primary: yup.boolean(),
        ks3: yup.boolean(),
        gcse: yup.boolean(),
        a_level: yup.boolean(),
        degree: yup.boolean(),
        adult_learner: yup.boolean(),
        primary_rate:yup.string().when('primary',{
                is:true,
                then:yup.string().required("The Primary 'Hourly Rate' must only contain numbers eg. ETB150.00")
        }),
            ks3_rate:yup.string().when('ks3',{
                    is:true,
                    then:yup.string().required("The ks3 'Hourly Rate' must only contain numbers eg. ETB150.00")
            }),
            gcse_rate:yup.string().when('gcse',{
                    is:true,
                    then:yup.string().required("The gcse 'Hourly Rate' must only contain numbers eg. ETB150.00")
            }),a_level_rate:yup.string().when('a_level',{
                    is:true,
                    then:yup.string().required("The a_level 'Hourly Rate' must only contain numbers eg. ETB150.00")
            }),degree_rate:yup.string().when('degree',{
                    is:true,
                    then:yup.string().required("The degree 'Hourly Rate' must only contain numbers eg. ETB150.00")
            }),adult_learner_rate:yup.string().when('adult_learner',{
                    is:true,
                    then:yup.string().required("The adult_learner 'Hourly Rate' must only contain numbers eg. ETB150.00")
            }),
    })
    .required();
AddSubjectSchema = AddSubjectSchema.test( // this test is added additional to any other (build-in) tests
    'myCustomCheckboxTest',
    null, // we'll return error message ourself if needed
    (obj) => {
        // only testing the checkboxes here
        if ( obj.primary || obj.ks3 || obj.gcse || obj.a_level || obj.degree || obj.adult_learner||obj.category!=='KuUjN71tvWlINr76YYkAG' ) {
            return true; // everything is fine
        }
        return new yup.ValidationError(
            'Please select a level',
            null,
            'levelList'
        );
    }
);

