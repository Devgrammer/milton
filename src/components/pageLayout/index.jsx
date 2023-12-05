
const PageLayout = ({children}) => {
  return (
      <div className="page-layout-main-container text-milton-black mt-40 z-10 min-w-[320px] max-w-[1200px] px-8 smx:px-0 space-y-32 mx-auto">
        {children}
      </div>
 
  );
}

export default PageLayout