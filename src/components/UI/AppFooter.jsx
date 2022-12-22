export const AppFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border">
      <div className="container">
        <div className="py-3 my-2">
          <p className="text-center text-muted">© {year} Company, Inc</p>
        </div>
      </div>
    </footer>
  );
};
