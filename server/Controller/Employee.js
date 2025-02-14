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
 let EmpIndex =-1;

 EMPLOYEE.map((emplo ,index)=>{
    if(emplo.EmpId == EmpId){
        EmpIndex = index
    }
 })

 if(EmpIndex == -1){
    return res.json({
                success:false,
                message:"Employee Not Found"
    })
 }
  EMPLOYEE.splice(EmpIndex,1);
  res.json({
        success:true,
        message:"Employee Deleted successfully"
  })
  
}

const PutStudent=async(req,res)=>{
    const {EmpId} = req.params;
    const {name,age,city} = req.body;
    let EmpIndex =-1;

    EMPLOYEE.map((stud,index)=>{
     if(stud.EmpId==EmpId){
         EmpIndex = index
     }
  })  

  if(EmpIndex == -1){
     return res.json({
         success:false,
         message:"employee Not found"
     })
  }

   const employe={
    EmpId,
    name,
    age,
    city,
   }

   EMPLOYEE[EmpIndex]=employe;
   
   res.json({
    success:true,
    data:employe,
    message:"employe update sucessfully"
   })
}
  
const getEmployeeById=async(req,res)=>{
    const {EmpId}=req.params;

    let EmpIndex =-1;

    EMPLOYEE.map((employe,index)=>{
        if(employe.EmpId == EmpId){
            EmpIndex=index;
        }
    })

    if(EmpIndex ==-1){
        return res.json({
            success:false,
            message:"employee Not found"
        })
    }
   const employeee=EMPLOYEE[EmpIndex];
   res.json({
    success:true,
    data:employeee,
    message:"employee update successfully"
   })

}


export {
    GetEmployee ,PostEmployee,DeleteEmployee,PutStudent,getEmployeeById
}