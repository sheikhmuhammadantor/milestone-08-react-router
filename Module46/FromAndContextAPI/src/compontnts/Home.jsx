import PageTitle from "../utility/PageTitle";
import ReusableFrom from "./Form/ReusableFrom";
// import HookFrom from "./Form/HookFrom";
// import UseRefFrom from "./Form/UseRefFrom";
// import StateForm from "./Form/StateForm";
// import SimpleForm from "./Form/SimpleForm";

export default function Home() {

const handelSignUp = (data) => {
  console.log("SignUp Data : ", data);
}

const handelUpdate = (data) => {
  console.log("Update Data : ", data);
}

  return (
    <div>
      <h1 className="text-3xl my-10">This Is Home !!</h1>
      <PageTitle title={"Home"}></PageTitle>

      {/* Start Main Work */}

      {/* <SimpleForm></SimpleForm> */}
      {/* <StateForm></StateForm> */}
      {/* <UseRefFrom></UseRefFrom> */}
      {/* <HookFrom></HookFrom> */}
      <ReusableFrom formTitle={"User SingUp From"} submitBtnText="Submit" handelSubmitBtn={handelSignUp}>
        <p className="mb-2">Place SignUp now..</p>
      </ReusableFrom>
      <br />
      <br />
      <ReusableFrom formTitle={"Profile Update From"} submitBtnText="Update" handelSubmitBtn={handelUpdate}>
      <p className="mb-2">Always Update now..</p>
      </ReusableFrom>
      
    </div>
  )
}
