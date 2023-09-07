export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-body">
        <ul className="left-panel list-inline mb-0 p-0">
          <li className="list-inline-item">
            <a href="/#">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">Terms of Use</a>
          </li>
        </ul>
        <div className="right-panel">
          ©<span data-setting="app_name">Satoshi Finance - Admin Dashboard</span>
        </div>
      </div>
    </footer>
  );
};
