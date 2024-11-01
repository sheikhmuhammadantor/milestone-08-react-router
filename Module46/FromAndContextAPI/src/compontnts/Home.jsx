import PageTitle from "../utility/PageTitle";
import StateForm from "./Form/StateForm";
// import SimpleForm from "./Form/SimpleForm";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl my-10">This Is Home !!</h1>
      <PageTitle title={"Home"}></PageTitle>

      {/* Start Main Work */}
      {/* <SimpleForm></SimpleForm> */}
      <StateForm></StateForm>
      
    </div>
  )
}
