import firebase from 'firebase';
import "firebase/auth"
import {auth} from './adapter/Firebase'
// import '@firebase/firestore';
// import '@firebase/storage'; 
export const register = async({email, password})=>{
    const resp = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);
    return resp.user;

}

export const employercreate = async ({ email
  }) => {
     console.log("employeR creating");
    var db = firebase.firestore();
    var res=await db.collection("Employer")
      .add({
        email: email
      })
      .then((data) => {
        console.log("Details Added");
      });
  
  return res;
  }

  export const employeecreate = async ({ email
  }) => {
     console.log("employeE creating");
    var db = firebase.firestore();
    var res=await db.collection("Employee")
      .add({
        email: email
      })
      .then((data) => {
        console.log("Details Added");
      });
  
  return res;
  }

  export const getJobData = async ({ email}) => {
       console.log("fired");
       var detail = [];
      var db = firebase.firestore();
      await db.collection("Jobs")
      .where("Author","==",localStorage.getItem('email'))
      .get()
        .then((data) => {
          data.forEach((doc) => {
            detail.push({JobTitle:doc.data().JobTitle,JobDescription:doc.data().JobDescription, City:doc.data().City, CTC:doc.data().CTC, NumberofOpenings:doc.data().NumberOfOpenings, JobType: doc.data().JobType});
            
          })
      
        });
    return detail;
    }

    export const getJobDataAll = async () => {
      console.log("getJobDataAll");
      var detail = [];
     var db = firebase.firestore();
     await db.collection("Jobs")
     .get()
       .then((data) => {
         data.forEach((doc) => {
           detail.push({JobTitle:doc.data().JobTitle,JobDescription:doc.data().JobDescription, City:doc.data().City, CTC:doc.data().CTC, NumberofOpenings:doc.data().NumberOfOpenings, JobType: doc.data().JobType});
           
         })
     
       });
   return detail;
   }

export const uploadDetails = async ({ JobTitle,
City,JobType,
NumberofOpenings,
JobDescription,
CTC}) => {
   console.log("fired");
  var db = firebase.firestore();
  var res=await db.collection("Jobs")
    .add({
      JobTitle: JobTitle,
City: City,
JopType: JobType,
NumberofOpenings: NumberofOpenings,
JobDescription: JobDescription,
CTC: CTC,
Author: localStorage.getItem('email')
    })
    .then((data) => {
      console.log("Details Added");
    });

return res;
}

export const uploadResume = async ({ Name,
email,
PhoneNumber,
resume }) => {
  
  var storageRef = firebase.storage().ref(`CV/${resume.name}`);

  storageRef.put(resume).then((res) => {
    storageRef.getDownloadURL().then((url) => {
      console.log(url);
      //update firestore
      var db = firebase.firestore();
      db.collection("Resume")
        .add({
          email: email,
          name: Name,
          phone: PhoneNumber,
          downloadUrl: url,
        })
        .then((data) => {
          console.log("Resume Added");
        });
    });
    console.log(res.metadata);
  }).catch((err) => {
      console.log();
  });

  return true;
};
  
export const login = async({email, password})=>{
  console.log(email)
    const res = await firebase.auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res.user);
    return res.user;
}