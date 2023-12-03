import MiniSecHeading from "../miniSectionHeading"
import SectionSubHeading from "../sectionSubHeading"


const SectionWrapper = ({children, id, heading, miniHeading, miniHeadingIcon, classname, iconCode}) => {
  return (
    <>
      <div className={`section-wrapper-subheading  ${classname}`} id={id}>
        <MiniSecHeading heading={miniHeading} icon={iconCode} />
        <SectionSubHeading heading={heading} />
        {children}
      </div>
    </>
  );
}

export default SectionWrapper