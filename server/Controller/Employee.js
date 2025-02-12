import { EMPLOYEE } from "../Data/Employee.js"

const GetEmployee =async(req,res)=>{
    res.json({
        success:true,
        data:EMPLOYEE,
        message:"Employee data Fetched"
    })
}

const PostEmployee=async(req,res)=>{
    const {EmpId,name,age,city}=req.body;

    if(!EmpId){
        return res.json({
            success:true,
            message:"EmpId is required"
        })
    }
    if(!name){
        return res.json({
            success:true,
            message:"name is required"
        })
    }
    if(!age){
        return res.json({
            success:true,
            message:"age is required"
        })
    }
    if(!city){
        return res.json({
            success:true,
            message:"city is required"
        })
    }

   
        // if(emp.EmpId==EmpId){
        //     return emp;
        // }
        // if(EmployeebyId){
        //     return res.json({
        //         success:false,
        //         message:"employee id is already exist",
        //     })
        // }
        const employees={
            EmpId,
            name,
            age,
            city
        }
        EMPLOYEE.push(employees);

        res.json({
            success:true,
            data:employees,
            message:"Employee added successfully"
        })

}

const DeleteEmployee=async(req,res)=>{
 const {EmpId} =req.params;
 let EmpIndex = -1;

 EMPLOYEE.map((emplo ,index)=>{
    if(emplo.EmpId == EmpId){
        EmpIndex = index
    }
 })

 if(EmpIndex == -1){
    return res.status(400).json({
                success:false,
                message:"Employee Not Found"
    })
 }

  EMPLOYEE.splice(EmpId,1);

  res.json({
        success:true,
        message:"Employee Deleted successfully"
  })
  
}


export {
    GetEmployee ,PostEmployee,DeleteEmployee
}