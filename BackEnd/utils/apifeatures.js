class ApiFeatures {
    constructor(query,querystr){
        this.query = query,
        this.querystr = querystr
    }
    filter(){
        const querycopy = {...this.querystr}
        delete querycopy['keyword','page','limit']
        
        function renameKeys(obj) {
            const keyValues = Object.keys(obj).map(key => {
                const Property_Details=['Age_of_Property','Construction_Status','Offers','Maintainance_Charges','BHK','Bathroom','Balcony','Furnish_Type','Covered_Parking','Open_Parking','Cost','BuiltUp_Area','Carpet_Area','Possession_Status','Possession_Date','Plot_Price','Plot_Area','Area_Unit','Length','Width','Width_of_Facing_Road','Available_From','Monthly_Rent','Security_Deposit','Tenant_Type','Name','Total_Beds','For','Best_For','Meals_Offerings','Meals_Speciality','Notice_Period','Look_in_Period','Common_Areas','Managed_By','Stays','Non_Veg_Allowed','Opposite_Sex_Allowed','Any_Time_Allowed','Visitors_Allowed','Guardian_Allowed','Drinking_Allowed','Smoking_Allowed','Available_From','Zone_Type','Suitable_For','Location_Hub','Property_Condition','Entrance','Cieling','Located_Near','Ownership','Price','Negotiable','Tax_Inckuded']
                const Property_Address=['City','Project_Name','Locality','Flat_No','Floor_No','Total_Floors']
                let newKey = ''
                if(Property_Details.includes(key)){
                    newKey = 'Property_Details.'+key;
                }else if(Property_Address.includes(key)){
                    newKey = 'Property_Address.'+key
                }else{
                    newKey = key
                }
                return { [newKey]: obj[key] };
            });
            return Object.assign({}, ...keyValues);
        }

        const querycopyrenamed = renameKeys(querycopy);
        // console.log(querycopyrenamed)

        let querystr = JSON.stringify(querycopyrenamed)
        
        querystr = querystr.replace(/\b(gt|gte|lt|lte)\b/g,(key)=> `$${key}`)

        this.query = this.query.find(JSON.parse(querystr))
        // console.log(JSON.parse(querystr))
        return this
    }
    pagination(resultperpage){
        const currentpage = Number(this.querystr.page) || 1  
        const skip = resultperpage * (currentpage-1)

        this.query = this.query.limit(resultperpage).skip(skip)
        return this
    }
}

module.exports = ApiFeatures