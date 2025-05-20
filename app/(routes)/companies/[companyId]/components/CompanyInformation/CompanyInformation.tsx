
import { CompanyInformationProps } from "./CompanyInformation.types";
import CustomImage from "@/components/CustomImage/CustomImage";
import CompanyForm from "../CompanyForm/CompanyForm";

export default function CompanyInformation({ company }: CompanyInformationProps) {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-10 gap-y-4">
      <div className="p-4  rounded-lg shadow-md bg-background hover:shadow-lg">

        <div>
          <CustomImage src={company.profileImage} alt="Company Profile Image"
            width={50} height={50} className="mb-3 rounded-full object-cover" />

          <CompanyForm company={company} />
        </div>
      </div>
    </div>

  )
}
