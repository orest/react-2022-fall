import { AppFooter } from "./AppFooter";
import AppHeader from "./AppHeader";

const PageLayout = (props) => {
  return (
    <div className="page">
      <AppHeader></AppHeader>
      {props.children}
    </div>
  );
};

export default PageLayout;
