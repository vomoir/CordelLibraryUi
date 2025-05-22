import { useBooksStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const { companyList, selectCompany } = useBooksStore((state) => ({
    companyList: state.getCompanyList(),
    selectCompany: state.selectCompany,
  }));
  // const companyList = useBooksStore((state) => state.getCompanyList());
  // const selectCompany = useBooksStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
