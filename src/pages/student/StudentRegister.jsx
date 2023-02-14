import StudentForm from "../../components/StudentForm";
import RegisterLayout from "../../components/layout/RegisterLayout";
import { useAuth } from "@arcana/auth-react";

export default function StudentRegister() {
  const { user } = useAuth();
  return (
    <RegisterLayout>
      <h2 className="text-2xl font-semibold">Add you details</h2>
      <StudentForm name={"gokul"} />
    </RegisterLayout>
  );
}
